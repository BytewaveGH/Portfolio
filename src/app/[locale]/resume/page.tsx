// src/app/[locale]/resume/page.tsx

'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Download, ChevronLeft, ChevronRight, FileText } from 'lucide-react'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

export default function ResumePage() {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [error, setError] = useState(false)

  return (
    <main className="relative z-0 min-h-screen w-full bg-[#0b1120] px-4 py-12 text-white sm:px-6">
      <section className="mx-auto w-full max-w-5xl">
        {/* Resume heading */}
        <header className="mb-8 block text-center">
          <p className="mb-3 text-sm font-medium text-purple-400">PROFESSIONAL PROFILE</p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            My <span className="text-purple-400">Resume</span>
          </h1>

          <p className="mt-4 text-slate-400">Explore my professional experience, technical skills, and career journey.</p>
        </header>

        {/* Always-visible download button */}
        <div className="mb-8 flex justify-center">
          <a
            href="/resume.pdf"
            download="Misbahu-Ahmed-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* PDF viewer */}
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
          <div className="flex items-center gap-3 border-b border-white/10 p-4">
            <FileText className="text-purple-400" size={22} />
            <div>
              <p className="font-semibold">Misbahu Ahmed</p>
              <p className="text-xs text-slate-400">Resume / CV</p>
            </div>
          </div>

          <div className="flex min-h-[400px] w-full justify-center overflow-auto bg-[#1a2232] p-4">
            {error ? (
              <div className="py-16 text-center">
                <p className="text-red-300">Unable to display the PDF.</p>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="mt-4 inline-block text-purple-400 underline">
                  Open resume directly
                </a>
              </div>
            ) : (
              <Document
                file="/resume.pdf"
                onLoadSuccess={({ numPages }) => {
                  setNumPages(numPages)
                  setPageNumber(1)
                  setError(false)
                }}
                onLoadError={(err) => {
                  console.error('Resume PDF error:', err)
                  setError(true)
                }}
                loading={<p className="py-16 text-slate-300">Loading resume...</p>}
              >
                {numPages > 0 && (
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(typeof window !== 'undefined' ? window.innerWidth - 64 : 650, 650)}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                )}
              </Document>
            )}
          </div>

          {/* Always-visible pagination bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 p-4">
            <span className="text-sm text-slate-300">
              Page {pageNumber} of {numPages || '…'}
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                disabled={pageNumber <= 1}
                className="inline-flex items-center gap-1 rounded-lg border border-white/20 px-4 py-2 text-sm text-white disabled:opacity-40"
              >
                <ChevronLeft size={18} />
                Previous
              </button>

              <button
                type="button"
                onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                disabled={!numPages || pageNumber >= numPages}
                className="inline-flex items-center gap-1 rounded-lg bg-purple-600 px-4 py-2 text-sm text-white disabled:opacity-40"
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
