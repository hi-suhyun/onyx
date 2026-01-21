"use client"

import { motion } from "framer-motion"
import { Users, Building2, Zap } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Hyper-Personalization",
    subtitle: "모두를 위한 단 한 명의 스타",
    badge: "초개인화 커스터마이징 솔루션",
    description: "수만 명의 팬과 임직원, 한 사람 한 사람의 이름을 직접 부르는 놀라운 경험을 선사하세요. AI 보이스와 립싱크 기술을 통해 전 세계 어디든, 어떤 언어로든 스타의 진심을 초개인화된 영상 메시지로 배달합니다.",
    values: ["유대감 형성", "글로벌 확장성", "로열티 극대화"]
  },
  {
    icon: Building2,
    title: "Institutional Trust",
    subtitle: "기관의 품격을 완성하는 신뢰의 얼굴",
    badge: "브랜드 신뢰 구축 솔루션",
    description: "첫 방문의 순간, 스타의 신뢰도가 기관의 가치가 됩니다. 홈페이지 메인부터 오프라인 키오스크까지, 스타의 디지털 트윈이 직접 방문객을 맞이하며 귀사의 비전과 신뢰를 가장 품격 있게 전달합니다.",
    values: ["브랜드 이미지 제고", "권위 부여", "고객 경험(UX) 고도화"]
  },
  {
    icon: Zap,
    title: "Operational Excellence",
    subtitle: "반복되는 노동을 멈추고, 생산성을 혁신하다",
    badge: "브랜드 파트너십 생산성 솔루션",
    description: "스타의 시간을 사지 마세요, 오닉스의 기술력을 구독하세요. 수천 벌의 의류 피팅부터 반복적인 광고 소스 제작까지, 노동집약적인 작업을 AI가 완벽히 대체합니다. IP의 가치는 보존하고, 제작 공정의 생산성은 무한대로 높입니다.",
    values: ["공정 자동화", "제작 비용 및 시간 절감", "IP 활용 극대화"]
  }
]

export function ServiceAreasSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#6B7280] bg-[#F9FAFB] rounded-full border border-[#E5E7EB]">
            Core Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight text-balance">
            3대 핵심 솔루션
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            <span className="sm:hidden">
              <span className="block">Onyx는 각 비즈니스 목적에 맞는</span>
              <span className="block">최적화된 솔루션을 제공합니다.</span>
            </span>
            <span className="hidden sm:inline">
              Onyx는 각 비즈니스 목적에 맞는 최적화된 솔루션을 제공합니다.
            </span>
          </p>
        </motion.div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 md:p-12 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] hover:border-[#111111]/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon and Title */}
                  <div className="lg:w-1/3">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#111111] rounded-xl mb-6">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium text-[#6B7280] bg-white rounded-full border border-[#E5E7EB] mb-4">
                      {service.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-[#111111] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#6B7280] font-medium">
                      {`"${service.subtitle}"`}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="lg:w-2/3">
                    <p className="text-[#1F2937] leading-relaxed text-lg mb-8">
                      {service.description}
                    </p>
                    
                    {/* Value Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.values.map((value) => (
                        <span
                          key={value}
                          className="px-4 py-2 text-sm font-medium text-[#111111] bg-white rounded-xl border border-[#E5E7EB]"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
