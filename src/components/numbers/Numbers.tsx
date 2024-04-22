import Image from "next/image";
import comLogo from "/public/images/icon-communities.svg";
import mesLogo from "/public/images/icon-messages.svg";
import { openSans } from "../fonts/page";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "../container/Container";

export const Numbers = () => {

    const numRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: numRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

    return (
        <>
            <Container>

                <motion.div ref={numRef} style={{ y }} className="flex items-center lg:flex-row flex-col gap-8 lg:gap-32 mt-36 lg:mt-12 justify-between w-[60vw]">
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="">
                        <Image
                            src={comLogo}
                            width={50}
                            height={50}
                            alt="community logo"
                        />
                        <div className={`${openSans.className} text-veryDarkCyan`}>
                            <motion.span

                                className="text-[3.5rem] lg:text-[7rem] font-bold"
                            >
                                1.4k+
                            </motion.span>
                            <p className="text-[1.2rem] lg:text-[1.5rem] opacity-60">Communities formed</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="">
                        <Image
                            src={mesLogo}
                            width={50}
                            height={50}
                            alt="community logo"
                        />
                        <div className={`${openSans.className} text-veryDarkCyan`}>
                            <span className="text-[3.5rem] lg:text-[7rem] font-bold">2.7m+</span>
                            <p className="text-[1.2rem] lg:text-[1.5rem] opacity-60">Messages sent</p>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </>
    )
}