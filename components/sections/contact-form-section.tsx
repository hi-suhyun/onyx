"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2, Check, Clock, Mail, MessageSquare } from "lucide-react"

const inquiryTypes = [
  "초개인화 솔루션",
  "브랜드 신뢰 구축",
  "브랜드 파트너십",
  "기타 문의"
]

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    contact: "",
    inquiryType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact",
          ...formData
        })
      })

      if (!response.ok) {
        throw new Error("메일 전송 실패")
      }

      setIsSubmitted(true)
    } catch (error) {
      setErrorMessage("전송에 실패했습니다. 잠시 후 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center py-16"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-[#111111] rounded-full flex items-center justify-center">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#111111] mb-4">
          문의가 성공적으로 접수되었습니다
        </h3>
        <p className="text-[#6B7280] leading-relaxed">
          3시간 이내에 전담 매니저가 맞춤형 제안서와 함께 연락드립니다.
          <br />
          빠른 시일 내에 뵙겠습니다.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Info Cards */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]"
          >
            <Clock className="w-6 h-6 text-[#111111] mb-4" />
            <h4 className="font-semibold text-[#111111] mb-2">빠른 응답</h4>
            <p className="text-sm text-[#6B7280]">
              3시간 이내에 전담 매니저가 연락드립니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]"
          >
            <Mail className="w-6 h-6 text-[#111111] mb-4" />
            <h4 className="font-semibold text-[#111111] mb-2">맞춤형 제안서</h4>
            <p className="text-sm text-[#6B7280]">
              귀사에 최적화된 솔루션과 단가표를 제공합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]"
          >
            <MessageSquare className="w-6 h-6 text-[#111111] mb-4" />
            <h4 className="font-semibold text-[#111111] mb-2">데모 영상</h4>
            <p className="text-sm text-[#6B7280]">
              실제 구현 가능한 데모 영상을 함께 보내드립니다.
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#1F2937] mb-2">
                  회사명 <span className="text-[#6B7280]">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="회사명을 입력하세요"
                  className="w-full px-5 py-4 bg-white border border-[#E5E7EB] rounded-xl text-[#111111] placeholder:text-[#6B7280]/60 focus:outline-none focus:border-[#111111] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-2">
                  담당자명 <span className="text-[#6B7280]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="담당자명을 입력하세요"
                  className="w-full px-5 py-4 bg-white border border-[#E5E7EB] rounded-xl text-[#111111] placeholder:text-[#6B7280]/60 focus:outline-none focus:border-[#111111] transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-[#1F2937] mb-2">
                  연락처 <span className="text-[#6B7280]">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  placeholder="이메일 또는 전화번호"
                  className="w-full px-5 py-4 bg-white border border-[#E5E7EB] rounded-xl text-[#111111] placeholder:text-[#6B7280]/60 focus:outline-none focus:border-[#111111] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-[#1F2937] mb-2">
                  문의 분야 <span className="text-[#6B7280]">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white border border-[#E5E7EB] rounded-xl text-[#111111] focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em"
                  }}
                >
                  <option value="">선택하세요</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1F2937] mb-2">
                문의 내용 <span className="text-[#6B7280]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="프로젝트에 대해 자세히 알려주세요"
                className="w-full px-5 py-4 bg-white border border-[#E5E7EB] rounded-xl text-[#111111] placeholder:text-[#6B7280]/60 focus:outline-none focus:border-[#111111] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-[#111111] text-white font-medium rounded-xl hover:bg-[#1F2937] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  문의하기
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {errorMessage && (
              <p className="text-center text-sm text-red-600">{errorMessage}</p>
            )}

            <p className="text-center text-sm text-[#6B7280]">
              문의 주시면 3시간 내에 맞춤형 데모 영상과 단가표를 보내드립니다.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
