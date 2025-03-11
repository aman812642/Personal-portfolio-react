import React from 'react'
import Project from './Project'
import obys from '../assets/Obys_agency.jpg'
import premier from '../assets/Premier.png'
import refokus from '../assets/Refokus.png'
import ecommerce from '../assets/Ecommerce.png'


function Projects() {
    const projectsData = [
        {images : obys , link :  "https://obys-agencys-clone.netlify.app/", projectName : "Obys Agency Clone" , responsive : true , projectDescription : "I created this obys agency clone using html css and javascript I use javascript library to add animation to this page and use locomotive for smooth scrolling" , techUsed : [
            "html" , "css" , "javascript" , "GSAP" , "Locomotive"
        ]},
        {images : ecommerce  , link : "https://ekart-ecommerce-web.netlify.app/", projectName : "Ecommerce webpage" , responsive : true , projectDescription : "Crafted a fully responsive E-commerce Webpage using HTML, CSS, and JavaScript. This project features an intuitive user interface, seamless navigation, and dynamic content rendering to enhance user experience across all devices." , techUsed : [
            "html" , "css" , "javascript"
        ]},
        {images : refokus, projectName : "Refokus" , responsive : false , projectDescription : "I created a clone of Refokus website work page in which is use React Js , Tailwind css ,  Locomotive and Framer motion " , techUsed : [
            "React Js" , "Tailwind Css" , "Framer Motion" , "Locomotive"
        ]},
        {images : premier, link : "https://primer-responsive.netlify.app/",projectName : "Premier Webpage"  , responsive : true ,  projectDescription : "This is a landing page of premier website i created it using html css only and also add autoprifix css code to it which helps to support this webpage in all browsers .." , techUsed : [
            "html" , "css" , "javascript"
        ]}
    ]
  return (
    <div>
      <h1 className='text-center text-gray-500 text-5xl my-10'>Projects</h1>
      {projectsData.map((elem , index) => {
        return <Project data={elem}/>
      })}
    </div>
  )
}

export default Projects
