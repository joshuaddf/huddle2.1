'use client'

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { titleProp } from "@/components/types/TitleProp";
import { titlevariants } from "@/components/variants/Variants";
import { poppins } from "@/components/fonts/page";

export const HeroTitle = ({ text, className }: titleProp) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    return (
        <h1 className={`${poppins.className} text-2xl lg:text-[2.8rem] font-bold mt-[4rem] lg:mt-[8rem] text-veryDarkCyan ${className}`}>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ staggerChildren: 0.08 }}
            >
                {text.split(" ").map((word) => (
                    <span className="inline-block">
                        {word.split(" ").map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                variants={titlevariants}
                            >
                                {char}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </span>
                ))}
            </motion.span>
        </h1>
    );
};