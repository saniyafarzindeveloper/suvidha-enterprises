import { About } from '@/components/landing-page/About'
import { BrandShowcase} from '@/components/landing-page/BrandShowcase'
import { Hero } from '@/components/landing-page/Hero'
import React from 'react'

const Page = () => {
  return (
    <>
     <Hero />
       
    <About />
  <BrandShowcase />
    </>
   
  )
}

export default Page