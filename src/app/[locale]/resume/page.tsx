// app/resume/page.tsx
'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Download } from 'lucide-react'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const ResumePage = () => {
  const [numPages, setNumPages] = useState<number | undefined>(0)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16  text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">My <span className="text-purple-600">Resume</span></h1>

      {/* Resume Viewer */}
      <div className="w-full max-w-4xl bg-gray-800 p-4 rounded-xl shadow-lg mb-10 border border-gray-700">
        <Document
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center gap-6"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={800}
              renderAnnotationLayer={false}
              renderTextLayer={true}
            />
          ))}
        </Document>
      </div>

      {/* Download Button */}
      <a href="/resume.pdf" download>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300">
          <Download size={20} />
          Download Resume
        </button>
      </a>
    </section>
  )
}

export default ResumePage
