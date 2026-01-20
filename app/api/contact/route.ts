import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

type ContactSource = "contact" | "cta"

const SMTP_HOST = "smtp.gmail.com"
const SMTP_PORT = 465

const getString = (value: unknown) =>
  typeof value === "string" ? value.trim() : ""

const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value)

export async function POST(request: Request) {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpTo = process.env.SMTP_TO || smtpUser

  if (!smtpUser || !smtpPass || !smtpTo) {
    return NextResponse.json(
      { ok: false, message: "메일 설정이 누락되었습니다." },
      { status: 500 }
    )
  }

  let payload: {
    source: ContactSource
    company?: string
    name: string
    contact: string
    inquiryType?: string
    message?: string
  }

  try {
    const body = await request.json()
    const source = getString(body?.source) as ContactSource

    payload = {
      source,
      company: getString(body?.company),
      name: getString(body?.name),
      contact: getString(body?.contact),
      inquiryType: getString(body?.inquiryType),
      message: getString(body?.message)
    }
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "요청 형식이 올바르지 않습니다." },
      { status: 400 }
    )
  }

  if (payload.source !== "contact" && payload.source !== "cta") {
    return NextResponse.json(
      { ok: false, message: "문의 유형이 올바르지 않습니다." },
      { status: 400 }
    )
  }

  if (!payload.name || !payload.contact) {
    return NextResponse.json(
      { ok: false, message: "필수 입력값이 누락되었습니다." },
      { status: 400 }
    )
  }

  if (payload.source === "contact") {
    if (!payload.company || !payload.inquiryType || !payload.message) {
      return NextResponse.json(
        { ok: false, message: "필수 입력값이 누락되었습니다." },
        { status: 400 }
      )
    }
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  })

  const subject =
    payload.source === "cta"
      ? "[Onyx] 무료 상담 신청"
      : "[Onyx] 문의하기"

  const lines = [
    `소스: ${payload.source}`,
    `이름: ${payload.name}`,
    `연락처: ${payload.contact}`
  ]

  if (payload.company) lines.push(`회사명: ${payload.company}`)
  if (payload.inquiryType) lines.push(`문의 분야: ${payload.inquiryType}`)
  if (payload.message) lines.push(`문의 내용: ${payload.message}`)

  const replyTo = isEmail(payload.contact) ? payload.contact : undefined

  try {
    await transporter.sendMail({
      from: `"Onyx Landing" <${smtpUser}>`,
      to: smtpTo,
      subject,
      text: lines.join("\n"),
      replyTo
    })
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "메일 전송에 실패했습니다." },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
