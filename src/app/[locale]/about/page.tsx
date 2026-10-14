'use client'

import React from 'react'
import Image from 'next/image'
import aboutDeveloper from '@/assets/images/about-developer-clean.png'
import { skillsets } from './_logics/data'
import Footer from '@/components/generals/layouts/footer'
import { motion } from 'framer-motion'

const Page = () => {
  // const fadeInUp = {
  //     hidden: { opacity: 0, y: 30 },
  //     visible: (i = 1) => ({
  //         opacity: 1,
  //         y: 0,
  //         transition: {
  //             delay: i * 0.1,
  //             duration: 0.6,
  //             ease: 'easeOut',
  //         },
  //     }),
  // }

  return (
    <div className="relative w-full h-full z-10 overflow-x-hidden">
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <aside className="z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white  md:text-left">
            LET ME <span className="text-purple-600">INTRODUCE</span> MYSELF
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I&apos;m a full-stack software engineer with deep expertise in designing and shipping
            <span className="text-purple-600 font-medium"> enterprise software systems</span> — from multi-tenant ERP platforms to courier
            logistics and school management systems.
            <br />
            <br />
            Proficient in
            <span className="text-purple-600 font-medium"> TypeScript, JavaScript, Go, and C++</span>, I work comfortably across the entire
            stack — building RESTful APIs, architecting databases, and crafting responsive frontends.
            <br />
            <br />
            I&apos;m driven by
            <span className="text-purple-600 font-medium"> engineering problems that matter</span> — systems that serve real institutions,
            streamline operations, and scale with the people who use them.
            <br />
            <br />
            Beyond code, I enjoy
            <span className="text-purple-600 font-medium"> mentoring developers</span>, leading technical discussions, and contributing to
            open source. I believe great software is built through collaboration, clarity, and craftsmanship.
          </p>
        </aside>

        {/* Image or Illustration */}
        <aside className="flex justify-center md:justify-end">
          {/* Replace src with your preferred image */}
          {/* <Image
            src={dev2}
            alt="dev"
            width={500}
            height={500}
            className="w-full h-auto object-contain drop-shadow-2xl animate-fade-in"
            priority
          /> */}
          <Image
            src={aboutDeveloper}
            alt="Misbahu Ahmed developing software"
            width={800}
            height={750}
            className="relative z-10 w-full max-w-[620px] object-contain"
          />
        </aside>
      </section>

      <section className="w-full px-6 z-10">
        <div
          id="stroke-text"
          className="py-5 relative after:absolute flex items-center after:italic after:inset-0 after:z-0 after:content-['Tools_and_Technologies'] after:text-gray-300 after:-top-0 after:left-0 after:text-5xl after:h-full after:w-full after:font-sans before:absolute before:text-5xl before:content-['My_Experiences'] text-gray-800 before:-top-4 before:left-8 before:h-full before:w-full before:z-0 before:tracking-widest before:italic before:font-sans before:uppercase"
        ></div>

        <section className="max-w-7xl mx-auto px-6 py-16 text-white z-10">
          <div className="w-full space-y-12 z-10">
            {skillsets.map((category, idx) => (
              <motion.div
                key={category.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx * 0.2,
                      duration: 0.6,
                      ease: 'easeOut',
                      when: 'beforeChildren',
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="mb-16"
              >
                <motion.h3
                  className="text-2xl font-semibold mb-6 border-b-2 border-gray-700 pb-2 relative inline-block"
                  whileHover={{
                    color: '#a78bfa',
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="relative z-10">{category.label}</span>
                  <motion.span
                    layoutId="glow-border"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500/50 blur-sm rounded-full z-0"
                    animate={{ opacity: [0, 1, 0.6], scaleX: [0.8, 1, 1.05] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  />
                </motion.h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  {category.desc.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
                      className="flex flex-col items-center justify-center space-y-2 text-sm text-center group"
                    >
                      <div className="w-12 h-12 bg-gray-800 p-2 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                        {item.icon}
                        {item.img && (
                          <Image src={item.img} alt={item.name || 'Skill Icon'} width={40} height={40} className="object-contain" />
                        )}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item.name || '...'}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>

      <footer className="w-full relative">
        <Footer />
      </footer>
    </div>
  )
}

export default Page
