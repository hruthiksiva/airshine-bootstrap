import React from 'react'
import HeroSection from '../Components/HeroSection'
import MetricSection from '../Components/MetricSection'
import DestinationSection from '../Components/DestinationSection'
import TestimonialSection from '../Components/TestimonialSection'
import ContactCard from '../Components/ContactCard'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <MetricSection />
        <DestinationSection />
        <TestimonialSection/>
        <ContactCard />
    </div>
  )
}

export default HomePage