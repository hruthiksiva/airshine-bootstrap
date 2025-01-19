import React from 'react'
import HeroSection from '../Components/HeroSection'
import DestinationSection from '../Components/DestinationSection'
import TestimonialSection from '../Components/TestimonialSection'
import ContactCard from '../Components/ContactCard'
import AboutUsSection from '../Components/AboutUsSection'
import PopularPackageSection from '../Components/PopularPackageSection'
import WhySection from '../Components/WhySection'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <AboutUsSection />
        <PopularPackageSection />
        <WhySection />
        <DestinationSection />
        <TestimonialSection/>
        <ContactCard />
    </div>
  )
}

export default HomePage