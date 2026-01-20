"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const languages = [
  { 
    id: "ko", 
    name: "한국어", 
    flag: "🇰🇷",
    //title: "한국어로 말하는 디지털 트윈",
    //description: "네이티브 수준의 한국어 발음과 자연스러운 표정으로 국내 팬들과 소통합니다."
    title: "coming soon",
    description: "coming soon"
  },
  { 
    id: "en", 
    name: "English", 
    flag: "🇺🇸",
    //title: "Digital Twin Speaking English",
    //description: "글로벌 시장을 향한 완벽한 영어 커뮤니케이션을 실현합니다."
    title: "coming soon",
    description: "coming soon"
  },
  { 
    id: "jp", 
    name: "日本語", 
    flag: "🇯🇵",
    //title: "日本語を話すデジタルツイン",
    //description: "일본 시장을 위한 자연스러운 일본어 립싱크와 보이스를 제공합니다."
    title: "coming soon",
    description: "coming soon"
  },
]

export function DemoSlideSection() {
  const [activeLanguage, setActiveLanguage] = useState("ko")
  const currentLanguage = languages.find(l => l.id === activeLanguage) || languages[0]

  return (
    <section className="py-32 px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#6B7280] bg-white rounded-full border border-[#E5E7EB]">
            Multilingual Demo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight text-balance">
            하나의 촬영으로, 전 세계 언어로
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            동일 인물이 한국어, 영어, 일본어로 자연스럽게 말하는 영상을 확인해보세요.
          </p>
        </motion.div>

        {/* Language Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {languages.map((lang) => (
            <button
              key={lang.id}
              type="button"
              onClick={() => setActiveLanguage(lang.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeLanguage === lang.id
                  ? "bg-[#111111] text-white"
                  : "bg-white text-[#6B7280] border border-[#E5E7EB] hover:bg-[#F9FAFB]"
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLanguage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden"
            >
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-[#111111] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <title>Play button</title>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-[#6B7280] text-sm">데모 영상 재생</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#111111] mb-3">
                  {currentLanguage.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {currentLanguage.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
