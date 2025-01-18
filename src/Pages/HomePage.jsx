import React from 'react'
import HeroSection from '../Components/HeroSection'
import MetricSection from '../Components/MetricSection'
import DestinationSection from '../Components/DestinationSection'
import TourPlanner from '../Components/TourPlanner'
import Testimonials from '../Components/Testimonials'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <MetricSection />
        <DestinationSection />
        <TourPlanner />
        <Testimonials />
    </div>
  )
}

export default HomePage