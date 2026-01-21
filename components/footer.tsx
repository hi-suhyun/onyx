"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#F9FAFB] border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-[#111111] tracking-tight">
              Onyx
            </Link>
            <p className="mt-3 text-sm text-[#6B7280] max-w-xs">
              <span className="sm:hidden">
                <span className="block">스타의 시간을 데이터로 해방하고,</span>
                <span className="block">IP의 가능성을 무한히 확장합니다.</span>
              </span>
              <span className="hidden sm:inline">
                스타의 시간을 데이터로 해방하고, IP의 가능성을 무한히 확장합니다.
              </span>
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold text-[#111111] mb-4">서비스</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/solution" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
                    솔루션
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors">
                    문의하기
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} Onyx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
