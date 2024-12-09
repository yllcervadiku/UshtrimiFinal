import React from 'react'
import Hero from '../components/hero'
import AboutUs from '../components/about'
import TestimonialSlider from '../components/customers'
import Services from '../components/services'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <Services/>
        <AboutUs/>
        <TestimonialSlider/>
    </>
  )
}

export default HomePage