'use client'

import { Container } from '@/components/container/Container'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Navbar } from '@/components/header/Navbar'
import { Footer } from '@/components/footer/Footer'
import { Loader } from '@/components/loader/Loader'
import drake from "/public/drake.jpg"

const FreePage = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchpage = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    fetchpage();
  }, [])

  return isLoading ? <Loader /> : (
    <>
        <Navbar />
        <div className='h-[90vh] flex items-center justify-center -mt-[8rem]'>
          <Container>
            <Image
              src={drake}
              alt='shrek'
            />
          </Container>
        </div>
        <Footer />
    </>
  )
}

export default FreePage