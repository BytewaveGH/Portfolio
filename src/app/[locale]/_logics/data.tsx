import React from 'react'
import Typewriter from 'typewriter-effect'

function TypewriterTemplate() {
  return (
    <div className="text-2xl">
      <Typewriter
        options={{
          strings: [
            'Full-Stack Software Engineer',
            'Lead Frontend Developer',
            'Backend Engineer (Go & Node.js)',
            'ERP Systems Specialist',
            'Open Source Contributor',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: 'font-semibold text-4xl',
        }}
      />
    </div>
  )
}

export default TypewriterTemplate
