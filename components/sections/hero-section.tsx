"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 mb-8 text-sm font-medium text-[#6B7280] bg-[#F9FAFB] rounded-full border border-[#E5E7EB]">
            AI-Powered Star IP Marketing Solution
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight tracking-tight text-balance"
        >
          <span className="sm:hidden">
            <span className="block">스타의 시간을</span>
            <span className="block">데이터로 해방하고,</span>
            <span className="block text-[#6B7280]">IP의 가능성을</span>
            <span className="block">무한히 확장합니다.</span>
          </span>
          <span className="hidden sm:inline">
            스타의 시간을 데이터로 해방하고,
            <br />
            <span className="text-[#6B7280]">IP의 가능성을 무한히 확장합니다.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto text-pretty"
        >
          <span className="sm:hidden">
            <span className="block">오닉스(Onyx)는 스타의 IP 가치를 보존하며,</span>
            <span className="block">물리적 한계를 넘어선</span>
            <span className="block">압도적 생산성을 제공합니다.</span>
          </span>
          <span className="hidden sm:inline">
            오닉스(Onyx)는 스타의 IP 가치를 보존하며,
            <br />
            물리적 한계를 넘어선 압도적 생산성을 제공합니다.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#111111] text-white text-base font-medium rounded-xl hover:bg-[#1F2937] transition-all duration-300 hover:scale-105"
          >
            Contact
          </Link>
          <Link
            href="/solution"
            className="px-8 py-4 bg-transparent text-[#111111] text-base font-medium rounded-xl border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-all duration-300"
          >
            솔루션 알아보기
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 mx-auto border-2 border-[#E5E7EB] rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-[#6B7280] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
