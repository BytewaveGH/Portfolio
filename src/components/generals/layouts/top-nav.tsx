
'use client'

import React, { Fragment } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NavItems } from './_logics/data'

interface TopNavProps {}

const TopNav = ({}: TopNavProps) => {
  const pathname = usePathname()
  const router = useRouter()

  /**
   * Normalize paths so:
   * /about
   * /about/
   *
   * are treated as the same route.
   */
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const normalizePath = (path: string) => {
    if (!path) return '/'
    
    const normalized = path.replace(/\/+$/, '')

    return normalized || '/'
  }

  const currentPath = normalizePath(pathname)

  /**
   * Determine whether a navigation item is active.
   */
  const isNavItemActive = (link: string) => {
    const normalizedLink = normalizePath(link)

    // Home should ONLY be active on "/"
    if (normalizedLink === '/') {
      return currentPath === '/'
    }

    // For other pages, support nested routes.
    return (
      currentPath === normalizedLink ||
      currentPath.startsWith(`${normalizedLink}/`)
    )
  }

  /**
   * Find the currently active navigation item.
   * Both desktop and mobile navigation use this.
   */
  const activeNavItem = NavItems.find(({ link }) =>
    isNavItemActive(link)
  )

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
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 20,
            }}
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-950/30"
          >
            <span className="text-xl font-bold tracking-tight text-white">
              M
            </span>

            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white/50" />
          </motion.div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-100 transition-colors duration-200 group-hover:text-indigo-300 sm:text-base">
              Misbahu Ahmed
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
              Software Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 sm:flex">
          {NavItems.map(({ id, label, icon, link }) => {
            const isActive = isNavItemActive(link)

            return (
              <Fragment key={id}>
                <Link
                  href={link}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'group relative flex items-center gap-2.5 rounded-lg px-4 py-2.5',
                    'text-sm font-medium transition-colors duration-200',
                    'outline-none focus-visible:ring-2 focus-visible:ring-indigo-400',
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-100'
                  )}
                >
                  <span
                    className={cn(
                      'transition-colors duration-200',
                      isActive
                        ? 'text-indigo-400'
                        : 'text-slate-500 group-hover:text-indigo-300'
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
                      isActive
                        ? 'bg-white/[0.06]'
                        : 'group-hover:bg-white/[0.04]'
                    )}
                  />
                </Link>
              </Fragment>
            )
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center sm:hidden">
          <label
            htmlFor="mobile-navigation"
            className="sr-only"
          >
            Navigate to page
          </label>

          <select
            id="mobile-navigation"
            value={activeNavItem?.link ?? ''}
            onChange={(event) => {
              const selectedLink = event.target.value

              if (selectedLink) {
                router.push(selectedLink)
              }
            }}
            className="max-w-[155px] rounded-lg border border-white/10 bg-[#111a2b] px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-indigo-400"
          >
            {!activeNavItem && (
              <option value="" disabled>
                Navigate
              </option>
            )}

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