'use client'

import { Hero } from "@/components/hero/Hero";
import { Flow } from "@/components/sections/Flow";
import { Grow } from "@/components/sections/Grow";
import { Users } from "@/components/sections/Users";
import { Build } from "@/components/sections/Build";
import { Navbar } from "@/components/header/Navbar";
import { Footer } from "@/components/footer/Footer";
import { useEffect, useState, useRef } from "react";
import { Loader } from "@/components/loader/Loader";
import Lenis from "@studio-freight/lenis";

export default function Home() {

  const lenisRef = useRef<Lenis | undefined>(undefined);
  const rafHandleRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize Lenis on the first render
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();
      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };
      rafHandleRef.current = requestAnimationFrame(raf);
    }

    // Clean up on component unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
  }, []);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChildren = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500)
    }
    fetchChildren();
  }, [])


  return isLoading ? <Loader /> : (
    <>
      <Navbar />
      <main className="flex flex-col">
        <div className="lg:h-[200vh] h-[150vh]">
          <Hero />
        </div>
        <div className="">
          <Grow />
          <Flow />
          <Users />
          <Build />
        </div>
      </main>
      <Footer />
    </>
  )
}
