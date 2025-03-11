import React from 'react'

function About() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='text-center text-purple-500 text-3xl mb-20 lg:text-5xl'>About 
         <span className='text-neutral-500 ml-1.5'>Me</span>
      </h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-center items-center'>
                <img className='w-[70vw] lg:w-1/2 rounded-lg' src="https://img.freepik.com/free-vector/organic-flat-design-about-me-concept_23-2148899257.jpg?t=st=1741675231~exp=1741678831~hmac=66d8e74305a6682b356d4720c7705b85a7a1c62e1d9408609e11e0bee018f487&w=900" alt="" />
            </div>
        </div>
        <div className='w-full text-gray-400 tracking-tight font-light mt-10 text-center lg:w-[40%] lg:text-lg lg:mt-20 italic'>
            <p>I'm a skilled frontend developer with a strong foundation in HTML, CSS, and JavaScript. Proficient in ReactJS, I craft reusable UI components and optimize performance. With a background in Node js and Express js, I effectively integrate frontend and backend technologies to deliver seamless user experiences. I'm passionate about building responsive, scalable, and maintainable web applications that exceed expectations. Let's collaborate and create innovative solutions!"</p>
        </div>
      </div>
    </div>
  )
}

export default About
