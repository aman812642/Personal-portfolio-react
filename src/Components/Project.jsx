import React from 'react'
import { motion } from 'framer-motion'

function Project({data}) {
  const{projectName , projectDescription , techUsed , responsive , images , link} = data
    
  return (
    <div className='w-full mt-[-10vw] lg:mt-0 flex flex-wrap lg:gap-10 lg:ml-30 border-b border-neutral-900 py-4'>
      
      <div className='w-full lg:w-[30%] h-80 flex items-center justify-center p-4'>
      <a href={link}>
      <motion.img
      whileHover={{scale : 1.2}}
      className='rounded-lg' src={images} alt="" />
      </a>
      </div>
      <div className='w-full lg:w-[60%] mt-[-18vw] lg:mt-0 h-80 py-1 flex flex-col lg:py-10 px-5 justify-center lg:justify-start'>
       <div className='flex gap-2 items-center'>
       <h1 className='text-xl font-bold'>{projectName} -</h1>
       <h3 className='text-xs bg-orange-800 px-1 py-1 rounded'> {responsive ? "Responsive" : "Not Responsive"}</h3>
       </div>
        <p className='mt-5 lg:max-w-[65%] break-words text-gray-500'>{projectDescription}</p>
        <div className='flex flex-wrap gap-5 mt-5'>
          {techUsed.map((item , index) => {
            return <button key={index} className='px-3 py-1 bg-blue-800 rounded text-xs lg:text-lg hover:bg-amber-700'>{item}</button>
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
