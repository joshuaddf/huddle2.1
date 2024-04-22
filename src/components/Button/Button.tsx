import { useEffect, useState, useRef } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"

type ButtonProps = {
    children: React.ReactNode
    size: "small" | "medium" | "large"
    className: string
}

export const Button = ({ children, size, className }: ButtonProps) => {
    const [scrolled, setScrolled] = useState(false);

    const buttonScroll = () => {
        setScrolled(window.pageYOffset >= 20);
    }

    useEffect(() => {
        window.addEventListener("scroll", buttonScroll);
        return () => {
            window.removeEventListener("scroll", buttonScroll);
        };
    }, []);

    const buttonSizes = {
        small: "text-sm px-3 py-2 duration-300 transition-all",
        medium: "text-md px-3 lg:px-8 lg:py-2 py-1 duration-300 transition-all",
        large: "text-sm px-12 lg:px-24 py-5 lg:py-4 duration-300 transition-all",
    }

    return (
        <button
            className={twMerge("rounded-full", className, scrolled ? "text-[0.7rem] px-4 duration-300 transition-all py-2" : buttonSizes[size])}>
            { children }
        </button>
    )
}