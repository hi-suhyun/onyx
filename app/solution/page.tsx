import { Navigation } from "@/components/navigation"
import { ServiceAreasSection } from "@/components/sections/service-areas-section"
import { WorkflowSection } from "@/components/sections/workflow-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "솔루션 - Onyx",
  description: "Onyx의 3대 핵심 솔루션과 5단계 워크플로우를 확인하세요. 초개인화 커스터마이징, 브랜드 신뢰 구축, 브랜드 파트너십 생산성 솔루션을 제공합니다.",
}

export default function SolutionPage() {
  return (
    <main>
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#6B7280] bg-[#F9FAFB] rounded-full border border-[#E5E7EB]">
            Solution
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight text-balance">
            AI 디지털 트윈 솔루션
          </h1>
          <p className="mt-6 text-lg text-[#6B7280] max-w-2xl mx-auto">
            <span className="sm:hidden">
              <span className="block">스타의 IP 가치를 보존하면서</span>
              <span className="block">무한한 비즈니스 확장을 가능하게 합니다.</span>
            </span>
            <span className="hidden sm:inline">
              스타의 IP 가치를 보존하면서 무한한 비즈니스 확장을 가능하게 합니다.
            </span>
          </p>
        </div>
      </section>

      <ServiceAreasSection />
      <WorkflowSection />
      <CTASection />
      <Footer />
    </main>
  )
}
