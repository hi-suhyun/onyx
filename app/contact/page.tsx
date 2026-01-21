import { Navigation } from "@/components/navigation"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "문의하기 - Onyx",
  description: "Onyx AI 디지털 트윈 솔루션에 대해 문의하세요. 3시간 이내에 전담 매니저가 맞춤형 제안서와 함께 연락드립니다.",
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#6B7280] bg-[#F9FAFB] rounded-full border border-[#E5E7EB]">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight text-balance">
            <span className="sm:hidden">
              <span className="block">지금 바로</span>
              <span className="block">스타의 목소리로</span>
              <span className="block text-[#6B7280]">귀사의 가치를 높이세요</span>
            </span>
            <span className="hidden sm:inline">
              지금 바로 스타의 목소리로
              <br />
              <span className="text-[#6B7280]">귀사의 가치를 높이세요</span>
            </span>
          </h1>
          <p className="mt-6 text-lg text-[#6B7280] max-w-2xl mx-auto">
            문의 주시면 맞춤형 데모 영상과 단가표를 보내드립니다.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6">
        <ContactFormSection />
      </section>

      <Footer />
    </main>
  )
}
