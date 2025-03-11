import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';

function Navbar() {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Correct stagger effect
        duration: 0.5, 
        ease: "easeInOut"
      }
    }
  };

  return (
    <div>
      <nav className='w-full flex justify-between py-5 px-1'>
        <div className='flex items-center'>
          <motion.h1 
            initial={{ rotateY: 360, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            AmanST
          </motion.h1>
        </div>

        {/* Icons with staggered animation */}
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          className='flex items-center mr-2 gap-5 text-lg'
        >
          <motion.div variants={iconVariants}><FaLinkedin /></motion.div>
          <motion.div variants={iconVariants}><FaInstagram /></motion.div>
          <motion.div variants={iconVariants}><FaGithub /></motion.div>
          <motion.div variants={iconVariants}><FaXTwitter /></motion.div>
        </motion.div>
      </nav>
    </div>
  )
}

export default Navbar;
