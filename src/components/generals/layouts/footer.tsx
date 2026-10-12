'use client'

import { Github, Linkedin, Mail, ArrowUpRight, Code2, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Home', href: '/en' },
    { label: 'About', href: '/en/about' },
    { label: 'Projects', href: '/en/projects' },
    { label: 'Resume', href: '/en/resume' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#0b1120] px-6 pb-8 pt-14 text-white md:px-12 lg:px-20">
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-80 w-80 rounded-full bg-purple-600/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.08] pb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Brand and introduction */}
          <div className="lg:col-span-1">
            <a href="/en" aria-label="Misbahu Ahmed - Back to home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-lg font-bold text-purple-300">
                M
              </span>

              <span className="text-lg font-semibold tracking-tight">Misbahu Ahmed</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Full-stack developer building scalable web applications, enterprise systems, and digital products that solve real-world
              problems.
            </p>

            <a href="mailto:" className="mt-5 inline-flex items-center gap-2 text-sm text-purple-300 transition hover:text-purple-200">
              <Mail size={16} />
              Get in touch
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Explore</h3>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="flex space-x-2 flex-wrap gap-2 text-sm text-slate-400">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-400 transition hover:text-purple-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Professional links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Connect</h3>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Interested in collaborating on a project or discussing a development opportunity? Let&apos;s connect.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://github.com/Lyondealpha-hub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/misbahu-ahmed-4a5411278/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
              >
                <Linkedin size={17} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-slate-500">© {currentYear} Misbahu Ahmed. All rights reserved.</p>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Code2 size={15} className="text-purple-400" />
            <span>Designed & built with care.</span>
          </div>

          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex w-fit items-center gap-2 text-xs text-slate-400 transition hover:text-purple-300"
          >
            Back to top
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
