import React from 'react'
import Project from './Project'
import obys from '../assets/Obys_agency.jpg'
import premier from '../assets/Premier.png'
import refokus from '../assets/Refokus.png'
import ecommerce from '../assets/Ecommerce.png'
import rental from '../assets/Rentals.png'
import taskflow from '../assets/Taskflow.png'


function Projects() {
    const projectsData = [
        {images : obys , link :  "https://obys-agencys-clone.netlify.app/", projectName : "Obys Agency Clone" , responsive : true , projectDescription : "I created this obys agency clone using html css and javascript I use javascript library to add animation to this page and use locomotive for smooth scrolling" , techUsed : [
            "html" , "css" , "javascript" , "GSAP" , "Locomotive"
        ]},
        {images : ecommerce  , link : "https://ekart-ecommerce-web.netlify.app/", projectName : "Ecommerce webpage" , responsive : true , projectDescription : "Crafted a fully responsive E-commerce Webpage using HTML, CSS, and JavaScript. This project features an intuitive user interface, seamless navigation, and dynamic content rendering to enhance user experience across all devices." , techUsed : [
            "html" , "css" , "javascript"
        ]},
        {images : premier, link : "https://primer-responsive.netlify.app/",projectName : "Premier Webpage"  , responsive : true ,  projectDescription : "This is a landing page of premier website i created it using html css only and also add autoprifix css code to it which helps to support this webpage in all browsers .." , techUsed : [
            "html" , "css" , "javascript"
        ]},
        {images : rental, link : "https://rentals-your.netlify.app", projectName : "Rent Your Property"  , responsive : true ,  projectDescription : "I created this website this is a clone of Airbnb I which we can see propterties which are avilable for rent and also add our property dynamically" , techUsed : [
            "React js" , "css" , "Emailjs"
        ]},
        {images : taskflow, link : "https://employeemanagementc.netlify.app/", projectName : "Task Flow"  , responsive : true ,  projectDescription : "I'm excited to share my latest project, TaskFlow, a task management application designed for both admins and employees to efficiently manage tasks, track progress, and boost productivity And Uses Localstorage for storing data in browser also also get data from browser" , techUsed : [
          "React js" , "Tailwind css"
      ]},
      {images : refokus, projectName : "Refokus" , responsive : false , projectDescription : "I created a clone of Refokus website work page in which is use React Js , Tailwind css ,  Locomotive and Framer motion " , techUsed : [
        "React Js" , "Tailwind Css" , "Framer Motion" , "Locomotive"
    ]},
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
