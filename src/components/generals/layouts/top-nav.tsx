"use client"

import React, { Fragment } from 'react'
import { cn } from '@/lib/utils'
import { NavItems } from './_logics/data'
import { motion } from 'framer-motion'

interface TopNavProps {
}

const TopNav = ({ }: TopNavProps) => {




    return (
        <main className='w-full bg-slate-300 text-black'>
            <section className={cn('w-full h-full flex justify-between items-center px-2 border-slate-100  border-b-2 ')}>
                {/* Left Side */}
                <aside className={cn('w-[20%] flex items-center pl-2 space-x-2')}>

                </aside>
                {/* right side */}
                <aside className={cn('w-[80%] flex items-center justify-end mr-5 gap-2')}>
                    {NavItems.map(({ id, label, icon, link }) => (
                        <Fragment key={id}>
                            <motion.div
                                initial={{
                                    scale: 1,
                                    opacity: 0.8,
                                    borderColor: 'transparent',
                                    boxShadow: '0 0 0px rgba(99,102,241, 0)' // subtle indigo shadow
                                }}
                                whileHover={{
                                    scale: 1.07,
                                    x: 6,
                                    opacity: 1,
                                    borderColor: '#6366f1', // indigo-500
                                    boxShadow: '0 0 16px rgba(99,102,241, 0.4)' // glowing effect
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 250,
                                    damping: 18,
                                    duration: 0.4
                                }}
                                className={cn(
                                    'flex items-center border-b-4 border-transparent gap-3 px-4 py-2 cursor-pointer',
                                    'transition-all duration-300 ease-in-out rounded-md'
                                )}
                            >
                                <span className="text-muted-foreground">{icon}</span>
                                <a href={link} className="text-lg font-medium">{label}</a>
                            </motion.div>
                        </Fragment>
                    ))}
                </aside>
            </section>
        </main>
    )
}

export default TopNav