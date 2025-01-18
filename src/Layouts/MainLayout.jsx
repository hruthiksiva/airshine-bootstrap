import React from 'react'
import FooterSection from '../Components/FooterSection'
import NavbarSection from '../Components/NavBarSection'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <NavbarSection/>
        <Outlet/>
        <FooterSection/>
    </>


  )
}

export default MainLayout