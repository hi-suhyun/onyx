"use client"

import { motion } from "framer-motion"
import { Clock, Users, Cog, Globe, X, Check } from "lucide-react"

const comparisonData = [
  {
    icon: Clock,
    category: "물리적 제약",
    traditional: {
      title: "시공간의 한계",
      description: "스타의 스케줄과 컨디션에 의존"
    },
    onyx: {
      title: "시공간의 해방",
      description: "24/7 언제 어디서나 즉시 영상/이미지 생성"
    }
  },
  {
    icon: Users,
    category: "커스터마이징",
    traditional: {
      title: "단방향 메시지",
      description: "불특정 다수를 향한 일회성 영상"
    },
    onyx: {
      title: "초개인화",
      description: "수만 명 개개인의 이름을 부르는 1:1 메시지"
    }
  },
  {
    icon: Cog,
    category: "공정 효율성",
    traditional: {
      title: "수동 오퍼레이션",
      description: "수천 벌의 피팅, 수천 번의 재촬영 필요"
    },
    onyx: {
      title: "자동 오퍼레이션",
      description: "텍스트와 이미지 입력만으로 공정 자동화"
    }
  },
  {
    icon: Globe,
    category: "글로벌 확장",
    traditional: {
      title: "언어의 장벽",
      description: "재촬영 또는 어색한 더빙 필요"
    },
    onyx: {
      title: "네이티브 다국어",
      description: "AI 보이스로 전 세계 언어 즉시 보급"
    }
  }
]

export function PainPointSection() {
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
            Why Onyx?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight text-balance">
            기존 방식의 한계를 넘어서다
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            기존 스타 비즈니스의 물리적 한계와 Onyx의 디지털 트윈 솔루션을 비교해보세요.
          </p>
        </motion.div>

        {/* Comparison Headers */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
          <div />
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] text-[#6B7280] text-sm font-medium rounded-full border border-[#E5E7EB]">
              <X size={14} className="text-[#6B7280]" />
              기존 스타 비즈니스
            </span>
          </div>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-white text-sm font-medium rounded-full">
              <Check size={14} />
              Onyx 디지털 트윈
            </span>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-4">
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-4 md:gap-6"
            >
              {/* Category */}
              <div className="flex items-center gap-4 p-6 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl border border-[#E5E7EB]">
                  <item.icon className="w-5 h-5 text-[#111111]" />
                </div>
                <span className="font-semibold text-[#111111]">{item.category}</span>
              </div>

              {/* Traditional */}
              <div className="p-6 bg-white rounded-xl border border-[#E5E7EB]">
                <div className="md:hidden mb-2">
                  <span className="text-xs text-[#6B7280] font-medium">기존 방식</span>
                </div>
                <h4 className="font-semibold text-[#1F2937] mb-1">{item.traditional.title}</h4>
                <p className="text-sm text-[#6B7280]">{item.traditional.description}</p>
              </div>

              {/* Onyx */}
              <div className="p-6 bg-[#111111] rounded-xl text-white">
                <div className="md:hidden mb-2">
                  <span className="text-xs text-white/60 font-medium">Onyx 솔루션</span>
                </div>
                <h4 className="font-semibold mb-1">{item.onyx.title}</h4>
                <p className="text-sm text-white/70">{item.onyx.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
