'use client'

import Image from "next/image";
import { Container } from "../container/Container";
import footImg from "/public/images/bg-footer-top-desktop.svg";
import logo2 from "/public/images/logo2.svg";
import phone from "/public/images/icon-phone.svg"
import email from "/public/images/icon-email.svg"
import Link from "next/link"
import { openSans, poppins } from "../fonts/page";
import { useEffect, useState } from "react";
import smirk from "/public/smirk.gif"
import { motion, AnimatePresence } from "framer-motion"

export const Footer = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(!open)
    }

    return (
        <footer className="relative h-[90vh] md:h-[50vh] lg:h-[70vh] bg-veryDarkCyan xl:mt-[8rem] text-white">
            <Image className="absolute xl:top-[-9.5rem] lg:top-[-7rem] md:-top-20 -top-10 left-0 z-10"
                src={footImg}
                height={1000}
                alt="section border"
            />
            <div className="flex items-center justify-center h-auto mx-auto">
                {open ? <Modal handleClose={handleClose} /> : " "}
            </div>
            <Container className="flex flex-col lg:flex-row items-center lg:w-[80rem] md:w-[70%] justify-center h-[100%]">
                <div className="flex-1 pt-14 lg:order-2 ">
                    <h3 className={` ${poppins.className} text-2xl lg:text-xl font-bold pb-3 lg:-mt-12`}>NEWSLETTER</h3>
                    <p className={`${openSans.className} text-sm lg:tracking-wide lg:leading-loose lg:w-2/3  md:w-[70%]`}>To receive tips on how to grow your community, sign up to our weekly newsletter. we'll never send you spam or pass on your email address.</p>
                    <div className="flex items-end flex-col lg:flex-row gap-3 lg:gap-10 pt-6 lg:w-[85%]">
                        <input className="py-3 mx-auto text-veryDarkCyan flex w-[100%] lg:w-[80%] px-20 lg:px-12 rounded-lg" type="email" placeholder="example@gmail.com" />
                        <button onClick={handleOpen} className="text-sm flex rounded-lg bg-pink px-6 lg:px-[3.7rem] lg:py-[0.9rem] py-3">Subscribe</button>
                    </div>
                </div>
                <div className="flex-1 text-start lg:order-1 md:mt-[6rem] pt-8 md:pt-0">
                    <Link href="/">
                        <Image
                            src={logo2}
                            alt="logo"
                        />
                    </Link>
                    <p className={`${openSans.className} lg:w-1/2 md:w-[70%] py-8 text-sm lg:text-[0.87rem] lg:tracking-wide lg:leading-loose`}>Huddle is a cool platform for creating virtual spaces, like a digital campfire where teams collaborate, share and build community! 🤗</p>
                    <Phone />
                    <Email />
                </div>

            </Container>
        </footer>
    )
}

export const Phone = () => {
    return (
        <div className="flex items-center gap-6 py-2">
            <Image
                src={phone}
                alt="phone"
                width={25}
                height={25}
            />
            <span className="text-sm"><a href="tel+233555230449">+233 55 523 0449</a></span>
        </div>
    )
}

export const Email = () => {
    return (
        <div className="flex items-center gap-6 py-2">
            <Image
                src={email}
                alt="email"
                width={25}
                height={25}
            />
            <span className="text-sm"><a href="https://jkdodofoli@gmail.com" target="_blank">jkdodofoli@gmail.com</a></span>
        </div>
    )
}

export const Modal = ({ handleClose }: any) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 flex items-center justify-center rounded-2xl top-[3.7rem] left-0 bg-pink h-[230px] w-[350px] mx-auto lg:h-[250px] lg:w-[350px] p-3">
                <div className="flex items-center justify-center">
                    <Image className="rounded-lg"
                        src={smirk}
                        alt="smirk"
                        height={200}
                        width={200}
                    />
                    <div className="flex flex-col  text-veryDarkCyan px-4">
                        <p className="text-lg text-white text-center">Thanks for subscribing🤗</p>
                        <button className="px-3 py-2 mt-4 text-white text-sm bg-veryDarkCyan rounded-full" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>

    )
}