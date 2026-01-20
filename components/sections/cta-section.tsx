"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Loader2 } from "lucide-react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: ""
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
          source: "cta",
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

  return (
    <section className="py-32 px-6 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-balance">
            IP의 가치는 보존하고,
            <br />
            <span className="text-white/60">비즈니스는 무한히 확장합니다.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
            지금 바로 Onyx와 함께 스타 IP의 새로운 가능성을 열어보세요.
          </p>
        </motion.div>

        {/* Quick Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Check icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">문의가 접수되었습니다</h3>
              <p className="text-white/60">곧 연락드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="성함"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                />
                <input
                  type="text"
                  placeholder="연락처"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                  className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-white text-[#111111] font-medium rounded-xl hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    무료 상담 신청하기
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              {errorMessage && (
                <p className="text-center text-sm text-red-300">{errorMessage}</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
