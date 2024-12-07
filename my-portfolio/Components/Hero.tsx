import { Particles } from "@tsparticles/engine";
import React from "react";
import { Particle } from "./Particle";
import { Span } from "next/dist/trace";
import TextEffect from "./TextEffect"

import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/16/solid";
const Hero = () => {
    return (<div className=" h-[88vh] bg-gradient-to-b  from-blue-600 to-blue-950">
        {/* <Particle /> */}
        <div className="w-[80%] grid-cols-1 mx-auto gird lg:grid-cols-2 gap-[3rem] h-[100%] items-center   ">
            <div>
                <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                    Hi, I'M <span className="text-yellow-400">AMBER</span>
                </h1>

                <TextEffect />
                <p className="mt-[1.5rem] text-[18px] text-[#ffffff92] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in enim deleniti cumque quis reiciendis illum
                    amet minus quam sed repellat, minima molestias quas nesciunt tempore tenetur. Ullam, possimus aut!
                </p>
            </div>
            <div className="w-[500px] hidden relative  bg-[#55e6a5]  lg:flex items-center rounded-full h-[500px]">
                <Image src="/images/u1.jpg" alt="user" layout="fill" className=" object-cover rounded-full" />
            </div>

            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0  sm:flex sm:flex-row items-center sm:space-x-6">
                <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold 
                uppercase bg-[#55e6a5] text-black flex item-center space-x-2">
                    <p>
                        Download CV
                    </p>
                    <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                </button>
                <button className="flex items-center space-x-2">
                    <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
                    <p className="text-[20px] font-semibold text-white">
                        Watch The Video
                    </p>
                </button>

            </div>


        </div>


    </div>
    )
};

export default Hero;