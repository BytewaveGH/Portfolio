'use client'

import React from 'react'
import Image from 'next/image'
import TypewriterTemplate from '../_logics/data'

import heroDeveloper from '@/assets/images/hero-developer-clean.png'
import aboutDeveloper from '@/assets/images/about-developer-clean.png'

import Footer from '@/components/generals/layouts/footer'

const LandingPage = () => {
  return (
    <main className="min-h-screen  text-white">
      <section className="relative overflow-hidden">
        <div className="relative mx-auto grid min-h-[565px] max-w-7xl grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-8">
          {/* HERO TEXT */}
          <div className="relative z-20 py-20 text-center lg:py-0 lg:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-[56px]">
              Hi There!{' '}
              <span className="inline-block animate-[wave_2s_infinite]" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>

            <h2 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-[48px]">
              I&apos;M{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                MISBAHU AHMED
              </span>
            </h2>

            {/* Typewriter */}
            <div className="mt-7 max-w-xl font-mono text-base leading-7 text-slate-300 sm:text-lg">
              <TypewriterTemplate />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/en/projects"
                className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 px-7 py-3 text-sm font-semibold shadow-lg shadow-purple-900/30 transition hover:-translate-y-1"
              >
                View My Projects
                <span className="ml-2">→</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-purple-500/60 px-7 py-3 text-sm font-semibold transition hover:bg-purple-500/10"
              >
                ↓ &nbsp; Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="mt-7 flex justify-center gap-5 text-sm text-slate-400 lg:justify-start">
              <a
                href="https://github.com/Lyondealpha-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-purple-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/misbahu-ahmed-4a5411278/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-purple-400"
              >
                LinkedIn
              </a>

              {/* <a
                href="#"
                className="transition hover:text-purple-400"
              >
                Instagram
              </a> */}
            </div>
          </div>

          {/* HERO IMAGE */}
          {/* <div className="relative flex h-full items-end justify-center lg:justify-end"> */}

          {/* Purple glow behind person */}
          {/* <div className="absolute right-[10%] top-[25%] h-[350px] w-[350px] rounded-full bg-purple-600/30 blur-[100px]" /> */}

          <Image
            src={heroDeveloper}
            alt="Misbahu Ahmed - Full Stack Engineer"
            width={850}
            height={720}
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="
                relative
                z-10
                h-auto
                w-full
                max-w-[850px]
                object-contain
                object-right-bottom
                drop-shadow-[0_0_45px_rgba(124,58,237,0.20)]
              "
          />

          {/* </div> */}
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section id="about" className="relative overflow-hidden border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-20 lg:grid-cols-2 lg:px-8">
          {/* ABOUT TEXT */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">About Me</span>

              <span className="h-px w-12 bg-purple-500" />
            </div>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              LET ME <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">INTRODUCE</span>
              <br />
              MYSELF
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-7 text-slate-400">
              <p>
                I&apos;m a passionate full-stack engineer with hands-on experience architecting and delivering{' '}
                <span className="font-semibold text-purple-400">enterprise-grade ERP systems</span> from the ground up.
              </p>

              <p>
                I specialize in <span className="font-semibold text-purple-400">TypeScript, JavaScript, and Go</span> — building everything
                from performant backend APIs to polished, component-driven UIs.
              </p>

              <p>
                My core focus is <span className="font-semibold text-purple-400">Web Engineering and Enterprise Systems</span> — designing
                scalable multi-tenant platforms, clean architectures, and intuitive user experiences.
              </p>

              <p>
                I build with <span className="font-semibold text-purple-400">Node.js, GoFiber, React.js, and Next.js</span> — and I&apos;ve
                led and collaborated with engineering teams delivering real-world products used by institutions and businesses.
              </p>
            </div>

            {/* ABOUT FEATURE BOXES */}
            <div className="mt-9 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-purple-500/40 bg-[#090f26]/70 p-4">
                <div className="text-xl text-purple-400">&lt;/&gt;</div>

                <p className="mt-3 text-xs font-medium">
                  Clean
                  <br />
                  Architecture
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/40 bg-[#090f26]/70 p-4">
                <div className="text-xl text-purple-400">◉</div>

                <p className="mt-3 text-xs font-medium">
                  Scalable
                  <br />
                  Systems
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/40 bg-[#090f26]/70 p-4">
                <div className="text-xl text-purple-400">◎</div>

                <p className="mt-3 text-xs font-medium">
                  Team
                  <br />
                  Collaboration
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/40 bg-[#090f26]/70 p-4">
                <div className="text-xl text-purple-400">↗</div>

                <p className="mt-3 text-xs font-medium">
                  Real-World
                  <br />
                  Impact
                </p>
              </div>
            </div>
          </div>

          {/* ABOUT IMAGE */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[120px]" />

            <Image
              src={aboutDeveloper}
              alt="Misbahu Ahmed developing software"
              width={600}
              height={650}
              className="relative z-10 w-full max-w-[620px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer id="contact" className="border-t border-white/[0.06]">
        <Footer />
      </footer>
    </main>
  )
}

export default LandingPage
