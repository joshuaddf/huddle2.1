'use client'

import { motion } from "framer-motion"
import { buttonVariants } from "../variants/Variants"
import { openSans, poppins } from "../fonts/page"
import Link from "next/link";
import { Container } from "../container/Container"
import { HeroTitle } from "../anime/HeroTitle/page";

export const Build = () => {
    return (
        <section className="h-[60vh] mb-[5rem]">
            <Container className=" mx-auto flex text-center items-center space-y-12 justify-center flex-col">
               <AnimeBuild />
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }} className="no-wrap">
                    <button className={`bg-pink mx-auto text-white shadow-xl hover:bg-lightPink font-bold rounded-full text-sm px-12 lg:px-24 py-5 lg:py-6 ${openSans.className}`}><Link href="/free">Get Started For Free</Link></button>
                </motion.div>
            </Container>
        </section>
    )
}


export const AnimeBuild = () => {
    return (
        <HeroTitle text="Ready To Build Your Community?" />
    )
}