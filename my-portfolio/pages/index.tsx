"use client"
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import React, { useEffect, useState } from 'react'

export const HomePage = () => { 

  const [nav,setNav]=useState(false);
  const openNav = () => setNav(false);
  const closeNav = () => setNav(false);

  return ( <div className='overflow-x-hidden'>
    <div> 
      {/*Navbar */}
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav}/>
      {/* Hero section */}
      
    </div>

  </div>)
  
}

export default HomePage;
