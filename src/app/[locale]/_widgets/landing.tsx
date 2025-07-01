"use client"

import React from 'react'
import TypewriterTemplate from '../_logics/data'
import Image from 'next/image'
import developer from '@/assets/images/developer.gif'
import dev2 from '@/assets/images/dev2.png'

// import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import Footer from '@/components/generals/layouts/footer'

const LandingPage = () => {
    return (
        <div className="relative w-full h-full ">

            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 z-10">
                {/* Text Content */}
                <aside className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400 mb-4">
                        Hi There!{" "}
                        <span className="wave inline-block" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        {"I'M"} <span className="text-indigo-600">MISBAHU AHMED</span>
                    </h2>

                    <div className="text-lg text-slate-400">
                        <TypewriterTemplate />
                    </div>
                </aside>

                {/* Optional Image / Graphic */}
                <aside className="hidden md:flex md:w-1/2 justify-center items-center">
                    {/* Add your image or animation here */}
                    <div className=" w-[80%] rounded-full shadow-lg flex items-center justify-center">
                        <Image src={developer} alt='dev' width={500} height={500}
                            className="w-full h-auto object-contain drop-shadow-2xl flex justify-center animate-fade-in border-none outline-none"
                            priority
                        />
                    </div>
                </aside>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <aside className='z-10'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-slate-400 md:text-left">
                        LET ME <span className="text-purple-600">INTRODUCE</span> MYSELF
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        I fell in love with programming and I’ve at least learned something, I think… 🤷‍♂️
                        <br /><br />
                        I am fluent and focused in classics like
                        <span className="text-purple-600 font-medium"> JavaScript, and Go.</span>
                        <br /><br />
                        My field of interest includes building new
                        <span className="text-purple-600 font-medium"> Web Technologies and Products</span>, and areas related to
                        <span className="text-purple-600 font-medium"> ERP Systems.</span>
                        <br /><br />
                        Whenever possible, I love developing products using
                        <span className="text-purple-600 font-medium"> Node.js</span>
                        <span className="text-purple-600 font-medium"> GoFiber</span> and modern frameworks like
                        <span className="text-purple-600 font-medium"> React.js</span> and
                        <span className="text-purple-600 font-medium"> Next.js</span>.
                    </p>
                </aside>

                {/* Image or Illustration */}
                <aside className="flex justify-center md:justify-end">
                    {/* Replace src with your preferred image */}
                    <Image src={dev2} alt='dev' width={500} height={500}
                        className="w-full h-auto object-contain drop-shadow-2xl animate-fade-in"
                        priority
                    />
                </aside>
            </section>

            <footer className='w-full relative'>
                <Footer />
            </footer>

        </div>
    )
}

export default LandingPage
