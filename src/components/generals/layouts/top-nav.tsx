// 'use client'

// import React, { Fragment } from 'react'
// import { cn } from '@/lib/utils'
// import { NavItems } from './_logics/data'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// interface TopNavProps { }

// const TopNav = ({ }: TopNavProps) => {
//   return (
//     <main className="w-full bg-slate-300 text-black">
//       <section className={cn('w-full h-full flex justify-between items-center px-2 border-slate-100  border-b-2 ')}>
//         {/* Left Side */}
//         <aside className={cn('w-[20%] flex items-center pl-2 space-x-2')}>
//           {/* Left side: Personal branding */}
//           <Link
//             href="/"
//             aria-label="Misbahu Ahmed home"
//             className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
//           >
//             <motion.div
//               whileHover={{ scale: 1.06, rotate: -3 }}
//               whileTap={{ scale: 0.96 }}
//               className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-950/40"
//             >
//               <span className="text-xl font-bold tracking-tight text-white">
//                 M
//               </span>
//             </motion.div>

//             <div className="flex flex-col">
//               <span className="text-sm font-semibold tracking-wide text-white transition-colors group-hover:text-indigo-300 sm:text-base">
//                 Misbahu Ahmed
//               </span>
//               <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
//                 Software Developer
//               </span>
//             </div>
//           </Link>
//         </aside>
//         {/* right side */}
//         <aside className={cn('w-[80%] flex items-center justify-end mr-5 gap-2')}>
//           {NavItems.map(({ id, label, icon, link }) => (
//             <Fragment key={id}>
//               <motion.div
//                 initial={{
//                   scale: 1,
//                   opacity: 0.8,
//                   borderColor: 'transparent',
//                   boxShadow: '0 0 0px rgba(99,102,241, 0)', // subtle indigo shadow
//                 }}
//                 whileHover={{
//                   scale: 1.07,
//                   x: 6,
//                   opacity: 1,
//                   borderColor: '#6366f1', // indigo-500
//                   boxShadow: '0 0 16px rgba(99,102,241, 0.4)', // glowing effect
//                 }}
//                 transition={{
//                   type: 'spring',
//                   stiffness: 250,
//                   damping: 18,
//                   duration: 0.4,
//                 }}
//                 className={cn(
//                   'flex items-center border-b-4 border-transparent gap-3 px-4 py-2 cursor-pointer',
//                   'transition-all duration-300 ease-in-out rounded-md'
//                 )}
//               >
//                 <span className="text-muted-foreground">{icon}</span>
//                 <a href={link} className="text-lg font-medium">
//                   {label}
//                 </a>
//               </motion.div>
//             </Fragment>
//           ))}
//         </aside>
//       </section>
//     </main>
//   )
// }

// export default TopNav

'use client'

import React, { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NavItems } from './_logics/data'

interface TopNavProps {}

const TopNav = ({}: TopNavProps) => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0b1120]/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[76px] w-full max-w-[1600px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
      >
        {/* Personal Branding */}
        <Link
          href="/"
          aria-label="Misbahu Ahmed — Home"
          className="group flex shrink-0 items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-950/30"
          >
            <span className="text-xl font-bold tracking-tight text-white">M</span>

            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white/50" />
          </motion.div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-100 transition-colors duration-200 group-hover:text-indigo-300 sm:text-base">
              Misbahu Ahmed
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">Software Developer</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 sm:flex">
          {NavItems.map(({ id, label, icon, link }) => {
            const isActive = link === '/' ? pathname === '/' : pathname === link || pathname.startsWith(`${link}/`)

            return (
              <Fragment key={id}>
                <Link
                  href={link}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'group relative flex items-center gap-2.5 rounded-lg px-4 py-2.5',
                    'text-sm font-medium transition-colors duration-200',
                    'outline-none focus-visible:ring-2 focus-visible:ring-indigo-400',
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-100'
                  )}
                >
                  <span
                    className={cn(
                      'transition-colors duration-200',
                      isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-indigo-300'
                    )}
                  >
                    {icon}
                  </span>

                  <span>{label}</span>

                  {isActive && (
                    <motion.span
                      layoutId="active-navigation"
                      className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={cn(
                      'absolute inset-0 -z-10 rounded-lg transition-colors duration-200',
                      isActive ? 'bg-white/[0.06]' : 'group-hover:bg-white/[0.04]'
                    )}
                  />
                </Link>
              </Fragment>
            )
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center sm:hidden">
          <label htmlFor="mobile-navigation" className="sr-only">
            Navigate to page
          </label>

          <select
            id="mobile-navigation"
            value={
              NavItems.find(({ link }) => (link === '/' ? pathname === '/' : pathname === link || pathname.startsWith(`${link}/`)))?.link ??
              ''
            }
            onChange={(event) => {
              window.location.href = event.target.value
            }}
            className="max-w-[155px] rounded-lg border border-white/10 bg-[#111a2b] px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-indigo-400"
          >
            {NavItems.map(({ id, label, link }) => (
              <option key={id} value={link}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  )
}

export default TopNav
