'use client'

import { Container } from "../container/Container"
import Image from "next/image";
import growImg from "/public/images/illustration-grow-together.svg"
import secTop1 from "/public/images/bg-section-top-desktop-1.svg"
import secTop2 from "/public/images/bg-section-bottom-desktop-2.svg"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { openSans, poppins } from "../fonts/page";

export const Grow = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

    return (
        <motion.section ref={ref} style={{ y }} className="relative max-h-[80vh] bg-veryPaleBlue">
            <Image className="absolute xl:top-[-8rem] lg:top-[-7rem] md:-top-20 -top-10 left-0 z-10"
                src={secTop1}
                height={1000}
                alt="section border"
            />
            <Container className="w-[95%] ">
                <div className="flex flex-col lg:gap-14 h-[80vh] mx-auto justify-center lg:flex-row items-center gap-4">
                    <motion.div initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }} className="text-center lg:text-start flex-1 h-48  order-2 lg:order-1">
                        <h2 className={`${poppins.className} text-2xl lg:text-4xl font-bold flex-1 py-8`}>Grow Together</h2>
                        <p className={`${openSans.className} text-sm md:text-[1rem] md:w-2/3 lg:w-auto mx-auto lg:text-lg`}>Generate meaningful discussions with your audience and build a strong, loyal community. Think of he insightful conversations you miss out on with a feedback form.</p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex-1 lg:order-1 pt-12">
                        <Image
                            src={growImg}
                            height={500}
                            width={500}
                            alt="grow together logo"
                        />
                    </motion.div>
                </div>
            </Container>
            <Image className="absolute h-auto lg:bottom-[-6rem] xl:bottom-[-8rem] md:-bottom-16 -bottom-8 left-0 z-10"
                src={secTop2}
                height={1000}
                alt="section border"
            />
        </motion.section>
    )
}
