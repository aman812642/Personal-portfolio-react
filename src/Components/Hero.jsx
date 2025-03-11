import React from "react";
import profilePhoto from "../assets/Profile.webp"
import { delay, motion } from "framer-motion";

function Hero() {

  const containerAnimation = (delay) => ({
    hidden : {x : -100, opacity : 0},
    visible : {x : 0 , opacity : 1 , transition : {
      duration : 0.5 , delay : delay
    }}
  })
  return (
    <div>
      <div className="border-b mb-15 border-neutral-900 pb-4 lg:mb-30">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={containerAnimation(0)}
                initial = "hidden"
                animate = "visible"
                 className="text-2xl pb-14 tracking-tight font-medium lg:text-8xl lg:font-thin lg:mt-20 ">Aman singh tomar</motion.h1>
                <motion.span 
                variants={containerAnimation(0.5)}
                initial = "hidden"
                animate = "visible"
                className="mt-[-10vw] text-3xl lg:mt-0 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-4xl tracking-tight text-transparent">-Frontend developer-</motion.span>
                <motion.p
                variants={containerAnimation(1)}
                initial = "hidden"
                animate = "visible"
                className="mt-5 text-center italic tracking-tight font-light text-gray-400 text-sm lg:w-[80%] lg:text-left lg:text-lg lg:mt-8">-Crafting seamless user experiences with clean code, intuitive design, and modern web technologies.
                <br /> -Turning ideas into interactive, responsive, and visually engaging web experiences. <br /> -Building dynamic interfaces that blend creativity with functionality.
                </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial = {{y :-100 , opacity:0}}
                    animate = {{y :0 , opacity:1}}
                    transition={{
                      duration : 0.7,
                      delay:0.7
                    }}
                    className="h-[90vw] mt-10 rounded lg:h-[35vw] lg:mt-1" src= {profilePhoto} alt="" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
