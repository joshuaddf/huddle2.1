'use client'

import Image from "next/image";
import logo from "/public/images/logo.svg"
import { Button } from "../Button/Button";
import Link from "next/link";
import { Container } from "../container/Container";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { openSans } from "../fonts/page";

export const Navbar = () => {

    const pathName = usePathname();
    const [scrolled, setScrolled] = useState(false);

    const navScroll = () => {
        if (window.scrollY >= 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navScroll)
    }, [])

    return (
        <nav className={scrolled ? "lg:p-4 lg:h-[5rem] h-[4rem] duration-300 flex items-center sticky top-0 bg-white bg-opacity-70 z-20" : "lg:p-4 h-[8rem] flex z-20 duration-300 items-center sticky top-0 bg-white"}>
            <Container className="flex items-center flex-row justify-between w-screen">
                <div className="flex items-center transition-all duration-300">
                    <Link href="/">
                        <Image className={scrolled ? "w-[7rem] lg:w-[10rem] transition-all duration-300" : "w-[10rem] lg:w-[13rem] transition-all duration-300"}
                            src={logo}
                            alt="Huddle logo"
                            width={225}
                            height={225}
                        /></Link>
                </div>
                <div 
                    className="">
                    {pathName === "/free" ? (
                        <Button className={` ${openSans.className} text-pink hover:text-lightPink border-2 border-pink`} size="medium"><Link href="/">Home</Link></Button>
                    ) : (
                        <Button className={`${openSans.className} text-pink hover:text-lightPink border-2 border-pink`} size="medium"><Link href="/free">Try It Free</Link></Button>
                    )}
                </div>
            </Container>
        </nav>
    )
}