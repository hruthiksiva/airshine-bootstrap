import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/AboutPage'
import DestinationPage from './Pages/DestinationPage'
import TestimonialsPage from './Pages/TestimonialsPage'
import DomesticPage from './Pages/DomesticPage'
import InternationalPage from './Pages/InternationalPage'
import FlightsPage from './Pages/FlightsPage'
import HotelsPage from './Pages/HotelsPage'
import VisaPage from './Pages/VisaPage'
import InsurancePage from './Pages/InsurancePage'
import DestinationTemplate from './Pages/DestinationTemplate'
import FAQPage from './Pages/FAQPage'
import OurServicesPage from './Pages/OurServicesPage'
import TourDetailsPage from './Pages/TourDetailsPage'


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/destinations' element={<DestinationPage />}/>
        <Route path='/testimonials' element={<TestimonialsPage />}/>
        <Route path='/domestic' element={<DomesticPage/>}/>
        <Route path='/international' element={<InternationalPage/>}/>
        <Route path='/flights' element={<FlightsPage/>}/>
        <Route path='/hotels' element={<HotelsPage/>}/>
        <Route path='/visa' element={<VisaPage/>}/>
        <Route path='/insurance' element={<InsurancePage/>}/>
        <Route path='/destination-template' element={<DestinationTemplate/>}/>
        <Route path='/faq' element={<FAQPage/>}/>
        <Route path='/ourservices' element={<OurServicesPage/>}/>
        <Route path="/tour/:id" element={<TourDetailsPage />} />
      </Route>
    )
  )

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;