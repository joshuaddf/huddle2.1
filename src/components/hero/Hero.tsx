'use client'

import { HeroPara } from "../anime/HeroPara/page";
import { HeroTitle } from "../anime/HeroTitle/page";
import { Button } from "../Button/Button"
import { Container } from "../container/Container"
import Link from "next/link";
import { openSans } from "../fonts/page";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants, heroImgVariants } from "../variants/Variants";
import Image from "next/image"
import heroImage from "/public/images/screen-mockups.svg"
import {  useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Numbers } from "../numbers/Numbers";

export const Hero = () => {

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const container = useRef(null);
    const { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
    // let o = useTransform(scrollYProgress , [0, 1], [1, 0.6]);


    return (
        <header className="">
            <Container className="flex items-center text-center justify-center flex-col">
                <HeroTitle className="" text="Build The Community Your Fans Will Love" />
                <motion.div className="lg:w-[70%]">
                    <HeroPara className="font-normal lg:w-[90%] lg:text-xl mx-auto" paraText={[
                        "Huddle re-imagines the way we build ",
                        "communities. You have a voice, but so does ",
                        "your audience. Create connections with your ",
                        "users as you engage in genuine discussion. "
                    ]} />
                </motion.div>
                {/* <div className="hidden lg:block lg:w-[40%]">
                <HeroPara className="font-normal" paraText={[
                    "Huddle re-imagines the way we build communities. You have a ",
                    "voice, but so does your audience. Create connections with your",
                    "users as you engage in genuine discussion."
                ]} />
                </div> */}
                <motion.div
                    variants={buttonVariants} initial="initial" animate="animate" className="no-wrap">
                    <Button className={`bg-pink text-nowrap mx-auto text-white shadow-xl hover:bg-lightPink font-bold ${openSans.className}`} size="large"><Link href="/free">Get Started For Free</Link></Button>
                </motion.div>

                <motion.div ref={container} style={{y}} variants={heroImgVariants} initial="initial" animate="animate"  className="mt-[4rem]">
                    <Image
                        src={heroImage}
                        objectFit="cover"
                        alt="screen"
                    />
                </motion.div>

                <Numbers />
            </Container>
        </header>
    )
}