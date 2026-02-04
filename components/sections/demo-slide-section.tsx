"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const languages = [
  {
    id: "ko",
    name: "홈페이지 영상",
    flag: "",
    title: "메인 홈페이지 소개 영상",
    description: "브랜드 핵심 메시지를 담은 메인 페이지용 데모 영상입니다.",
    videoSrc: "/videos/main_homepage.mp4",
    posterSrc: "",
  },
  {
    id: "en",
    name: "DID영상",
    flag: "",
    title: "DID 디스플레이 목업 영상",
    description: "현장 사이니지에 최적화된 DID용 시연 영상을 보여줍니다.",
    videoSrc: "/videos/did_mockup.mp4",
    posterSrc: "",
  },
  {
    id: "jp",
    name: "VIP영상",
    flag: "",
    title: "VIP 전용 맞춤 메시지",
    description: "이름만 넣으세요. VIP 고객 한 분 한 분의 이름을 부르는 전용 안내 영상이 자동으로 생성됩니다.",
    videoSrc: "/videos/vip.mp4",
    posterSrc: "",
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
            목적에 맞춘 다양한 데모 영상
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            <span className="sm:hidden">
              <span className="block">홈페이지, DID, VIP 등</span>
              <span className="block">용도별 시연 영상을 확인해보세요.</span>
            </span>
            <span className="hidden sm:inline">
              홈페이지, DID, VIP 등 용도별 시연 영상을 확인해보세요.
            </span>
          </p>
        </motion.div>

        {/* Language Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {languages.map((lang) => (
            <button
              key={lang.id}
              type="button"
              onClick={() => setActiveLanguage(lang.id)}
              className={`flex flex-col sm:flex-row items-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeLanguage === lang.id
                  ? "bg-[#111111] text-white"
                  : "bg-white text-[#6B7280] border border-[#E5E7EB] hover:bg-[#F9FAFB]"
              }`}
            >
              {lang.flag ? <span className="text-lg sm:mr-2">{lang.flag}</span> : null}
              <span className="leading-tight">{lang.name}</span>
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
              {/* Video */}
              {currentLanguage.videoSrc ? (
                <video
                  className="aspect-video w-full bg-black"
                  controls
                  playsInline
                  preload="metadata"
                  poster={currentLanguage.posterSrc || undefined}
                >
                  <source src={currentLanguage.videoSrc} type="video/mp4" />
                  브라우저가 비디오 태그를 지원하지 않습니다.
                </video>
              ) : (
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
              )}

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
