"use client"
import About from "@/Components/About";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import { Particle } from "@/Components/Particle";
import React, { useEffect, useState } from 'react'

export const HomePage = () => { 

  const [nav,setNav]=useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return ( <div className='overflow-x-hidden'>
    <div> 
      
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav}/>
      
      <Hero/>

      <div className="relativ z-[30]">
        <About/>
    

      </div>

    </div>

  </div>)
  
}

export default HomePage;
