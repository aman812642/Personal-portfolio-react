import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import Skillbar from "./Skillbar";
import { motion } from "framer-motion";

function Technologies() {

    const barsData = [
        {language : "Html" , percentage : "90%" , percentageWidth : "90%" , percentagePosition : "53%"},
        {language : "Css" , percentage : "85%" , percentageWidth : "85%" , percentagePosition : "56%"},
        {language : "JavaScript" , percentage : "80%" , percentageWidth : "80%" , percentagePosition : "59%"},
        {language : "Tailwind css" , percentage : "80%" , percentageWidth : "80%" , percentagePosition : "59%"},
        {language : "React js" , percentage : "70%" , percentageWidth : "70%" , percentagePosition : "64%"},
    ]
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-5xl text-purple-500">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="text-5xl rounded-2xl border-4 border-neutral-800 p-4 ">
          <motion.div 
          whileHover={{scale:1.3}}
          ><FaHtml5 className="text-[#DD471E] bg-white rounded-lg" /></motion.div>
        </div>

        <div className="text-5xl rounded-2xl border-4 border-neutral-800 p-4 ">
          <motion.div
          whileHover={{scale:1.3}}
          ><FaCss3Alt className="text-[#254BDF] bg-white rounded-lg" /></motion.div>
        </div>

        <div className="text-5xl rounded-2xl border-4 border-neutral-800 p-4">
          <motion.div
          whileHover={{scale:1.3}}
          ><IoLogoJavascript className="text-[#E9D44D]" /></motion.div>
        </div>

        <div className="text-5xl rounded-2xl border-4 border-neutral-800 p-4">
          <motion.div
          whileHover={{scale:1.3}}
          ><RiTailwindCssFill className="text-[#36B6F2]" /></motion.div>
        </div>

        <div className="text-5xl rounded-2xl border-4 border-neutral-800 p-4">
         <motion.div
         whileHover={{scale:1.3}}
         ><RiReactjsLine className="text-[#00D1F7]" /> </motion.div> 
        </div>

        <div className="text-5xl rounded-2xl border-4 border-neutral-800 p-4">
          <motion.div
          whileHover={{scale:1.3}}
          ><SiRedux className="text-[#7248B6]" /></motion.div>
        </div>

        <div className="text-5xl rounded-2xl border-4 border-neutral-800 p-4">
          <motion.div
          whileHover={{scale:1.3}}
          ><FaGithubSquare className="text-black bg-white rounded-lg" /></motion.div>
        </div>

      </div>
    <div className="mt-20">
    {barsData.map((item , index) => {
        return <Skillbar key={index} data={item}/>
    })}
    </div>
    </div>
  );
}

export default Technologies;
