"use client"

import { motion } from "framer-motion"
import { Camera, Cpu, FileCheck, Play, BarChart3 } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: Camera,
    title: "High-End Data Acquisition",
    subtitle: "최초 1회 데이터 확보",
    description: "디지털 트윈의 품질을 결정짓는 최상급 소스를 추출하는 단계입니다.",
    details: [
      "스튜디오 촬영: Onyx 전용 스튜디오에서 4K/8K 고해상도 영상 데이터 및 다각도 표정 추출",
      "보이스 샘플링: 다양한 감정과 톤을 포함한 고품질 음성 녹음",
      "특징 분석: 아티스트 특유의 제스처, 습관, 말버릇 등을 데이터화"
    ]
  },
  {
    step: 2,
    icon: Cpu,
    title: "AI Digital Twin Engineering",
    subtitle: "디지털 복제 및 모델링",
    description: "최첨단 AI 기술을 통해 아티스트의 시공간 제약을 없애는 단계입니다.",
    details: [
      "Video Synthesis: Synthesia 및 독자적인 영상 합성 엔진으로 자연스러운 입 모양과 표정 구현",
      "Voice Cloning: ElevenLabs 기반 고성능 TTS 모델링으로 아티스트 목소리 완벽 복제",
      "Global Localization: 다국어 학습을 통해 영어, 일본어, 중국어 등 글로벌 언어 대응 모델 구축"
    ]
  },
  {
    step: 3,
    icon: FileCheck,
    title: "Scenario Planning & Safety Control",
    subtitle: "기획 및 안전 컨펌",
    description: "IP의 가치를 훼손하지 않도록 Onyx가 가장 심혈을 기울이는 'Gatekeeping' 단계입니다.",
    details: [
      "수요처 분석: B2B(교육, 기업 홍보), B2C(개인 축하 영상) 등 용도별 시나리오 기획",
      "Pre-Approval 시스템: 영상 목적, 대본, 배포 채널을 담은 기획 승인서 전달",
      "아티스트/기획사 최종 컨펌 후에만 생산 단계 진입"
    ]
  },
  {
    step: 4,
    icon: Play,
    title: "Automated Production",
    subtitle: "무한 영상 생산",
    description: "컨펌된 기획안을 바탕으로 추가 촬영 없이 영상을 즉시 생성합니다.",
    details: [
      "Zero-Shoot Production: 아티스트 재방문 없이 텍스트 입력만으로 고퀄리티 영상 자동 렌더링",
      "Mass Customization: 소상공인 마케팅용 수백 개의 맞춤형 영상 혹은 개인별 맞춤형 칠순잔치 메시지 대량 생산.",
    ]
  },
  {
    step: 5,
    icon: BarChart3,
    title: "Multi-Channel Distribution",
    subtitle: "수익 창출 및 정산",
    description: "다양한 시장에 공급하여 '잠자는 시간에도 벌리는' 수익 모델을 실현합니다.",
    details: [
      "B2B: 교육 플랫폼 강사 영상, 기업 사내 교육, 공공기관 캠페인",
      "SMB: 지역 소상공인 대상의 연예인 홍보 영상 구독 서비스",
      "B2C: 팬들을 위한 개인화된 기념일 축하 메시지 판매",
      "Transparency: 투명한 리포트를 통해 판매 현황 공유 및 수익 정산"
    ]
  }
]

export function WorkflowSection() {
  return (
    <section className="py-32 px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#6B7280] bg-white rounded-full border border-[#E5E7EB]">
            Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight text-balance">
            5단계 워크플로우
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            체계적인 프로세스를 통해 안전하고 효율적인 디지털 트윈 제작을 보장합니다.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#E5E7EB] hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-[#111111] rounded-full items-center justify-center z-10">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>

                {/* Content Card */}
                <div className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-4" : "md:pl-4"}`}>
                  <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
                        <step.icon className="w-5 h-5 text-[#111111]" />
                      </div>
                      <div className="md:hidden flex items-center justify-center w-8 h-8 bg-[#111111] rounded-full">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                    </div>
                    
                    <span className="inline-block px-3 py-1 text-xs font-medium text-[#6B7280] bg-[#F9FAFB] rounded-full mb-4">
                      {step.subtitle}
                    </span>
                    
                    <h3 className="text-xl font-bold text-[#111111] mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-[#6B7280] mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#111111] rounded-full mt-2 shrink-0" />
                          <span className="text-sm text-[#1F2937]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Space for Alternate Layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
