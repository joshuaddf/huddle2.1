'use client'

import { Container } from "../container/Container"
import Image from "next/image";
import flowImg from "/public/images/illustration-flowing-conversation.svg"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { openSans, poppins } from "../fonts/page";

export const Flow = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

    return (
        <motion.section ref={ref} style={{ y }} className="relative max-h-[80vh]">
            <Container className="w-[95%] ">
                <div className="flex flex-col lg:gap-14 h-[80vh] mx-auto justify-center lg:flex-row items-center gap-4">
                    <motion.div initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }} className="text-center lg:text-start flex-1 order-2 h-48">
                        <h2 className={`${poppins.className} text-2xl lg:text-4xl font-bold flex-1 py-8`}>Flowing Conversations</h2>
                        <p className={`${openSans.className} text-sm md:text-[1rem] md:w-2/3 lg:w-auto mx-auto lg:text-lg`}>You wouldn't paginate a converation in real life, so why do it online?
                        Our threads have just-in-time loading for a more natural flow.</p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 order-1 pt-12">
                        <Image
                            src={flowImg}
                            height={500}
                            width={500}
                            alt="grow together logo"
                        />
                    </motion.div>
                </div>
            </Container>
        </motion.section>
    )
}
