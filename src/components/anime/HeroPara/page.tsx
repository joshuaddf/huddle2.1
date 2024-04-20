'use client'

import { paragraphProp } from "@/components/types/TitleProp"
import { openSans } from "@/components/fonts/page"
import { motion, useInView } from "framer-motion"
import { paragraphVariants } from "@/components/variants/Variants"
import { useRef } from "react"

export const HeroPara = ({ paraText, className }: paragraphProp) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    return (
        <p className={`${openSans.className} ${className} text-veryDarkCyan text-[0.95rem] py-8 lg:py-[3rem] font-700`}>
            <motion.span ref={ref} animate="animate" initial={isInView ? "animate" : "initial"}>
                {paraText.map((word, index) => {
                    return <motion.span className="inline-block"
                        variants={paragraphVariants}
                        key={index}>{word}</motion.span>
                })}
            </motion.span>

        </p>
    )
}