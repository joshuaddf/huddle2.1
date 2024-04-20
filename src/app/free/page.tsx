import { Container } from '@/components/container/Container'
import React from 'react'
import Image from "next/image"
import shrek from "/public/shrek.gif"

const FreePage = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center -mt-[8rem]'>
      <Container>
        <Image
        src={shrek}
        alt='shrek'
         />
      </Container>
    </div>
  )
}

export default FreePage