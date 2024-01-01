"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./style.css"
import About1 from "./About1";
// import Link from "next/link";

import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      title: 'Atoms Digital Services',
      description: 'Description for card 1. Add more detailed information about the card content.',
    },
    {
      title: 'Atoms Visual Media',
      description: 'Description for card 2. Add more detailed information about the card content.',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate to the next card
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex, cardData.length]);

  const handleViewMore = () => {
    // Handle "View More" button click
    console.log(`View more clicked for card ${currentIndex + 1}`);
  };

  
  return (
    <>
     



<About1/>









<section className="overflow-hidden   lg:pt-[8px] lg:pb-[10px] bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          

            <div className="w-full px-4 ">
              <div className="mt-3 lg:mt-0 ">
             <div style={{marginLeft:"-8px"}}>
             <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            className="animate_left"
          > <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Our projects</span>
</h2></motion.div>
</div>
      <div>       
      <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -40,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            className="animate_left"
          >       
      <p>
   
At Atoms Digital Solutions, we understand the importance of a strong digital presence in today's competitive landscape. That's why we work collaboratively with our clients to tailor our services to their specific needs, helping them stand out in the digital space and achieve their business objectives with remarkable success.

With a passion for innovation and creativity, we thrive on crafting unique and impactful digital experiences for our clients. Whether it's creating engaging marketing campaigns, developing cutting-edge websites and applications, designing custom software solutions, or capturing captivating moments through photography, our team is dedicated to delivering excellence in every project.
    </p></motion.div>
                   </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
<section className="container mx-auto my-10">
  
    {/* First Card */}
    <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            className="animate_left lg:w-1/1 px-4"
          ><div className="flex flex-wrap justify-center">
    <div className="max-w-sm mx-4 my-4 overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="./images/projects/2.webp"
          alt="card image"
        />
        {/* Unique Shape Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
      </div>
      <div className="p-6 relative z-10">
      <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Digital Marketing Services</h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
        At Atoms Education, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to ...
        </p>
        <a
          href="https://digitalmarketingservices.atomsgroup.net/"
          className=" Digital Solutions mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300  Digital Solutions-hover:pr-2">Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>
      </div>
    </div>
    
   {/* 2 Card */}
   <div className="max-w-sm mx-4 my-4 overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="./images/projects/6.webp"
          alt="card image"
        />
        {/* Unique Shape Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
      </div>
      <div className="p-6 relative z-10">
      <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Software services</h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
        Atoms  Digital Solutions is committed to providing affordable and impressive  Digital Solutions services for people social backgrounds. Our current projects include a private hostel offering ...
        </p>
        <a
          href="https://softwareservices.atomsgroup.net/"
          className=" Digital Solutions mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300  Digital Solutions-hover:pr-2">Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>
      </div>
    </div>
     {/* 3 Card */}
     <div className="max-w-sm mx-4 my-4 overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="./images/projects/10.webp"
          alt="card image"
        />
        {/* Unique Shape Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
      </div>
      <div className="p-6 relative z-10">
        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms visual media</h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
        Atoms  Digital Solutions is committed to providing affordable and impressive  Digital Solutions services for people social backgrounds. Our current projects include a private hostel offering ...
        </p>
        <a
          href="https://visualmedia.atomsgroup.net/"
          className=" Digital Solutions mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300  Digital Solutions-hover:pr-2">Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>


      </div>
    </div>


  </div>
  </motion.div>
</section>










 

 
<section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
<motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            className="animate_left lg:w-1/1 px-4"
          >       
<div className="flex items-center justify-center">
      <h2 className="text-center mb-6 text-2xl font-bold text-black dark:text-white xl:text-3xl 2xl:text-4xl  ">
  <span className="text-content  nowraps">Our Clients</span>
</h2>


</div>      
     </motion.div>      



       <div className="logos" >
               <div className="logos-slide" >
              
       
       
           <img src="./images/clients/1.png" alt="client-1 logo image" />
       
       
       
           <img src="./images/clients/2.png" alt="client-2 logo image" />
       
       
       
           <img src="./images/clients/3.png" alt="client-3 logo image" />
       
       
       
           <img src="./images/clients/4.png" alt="client-4 logo image" />
       
       
       
           <img src="./images/clients/5.png" alt="client-5 logo image" />
       
       
       
           <img src="./images/clients/6.png" alt="client-6 logo image" />
       
       
       
           <img src="./images/clients/7.png" alt="client-7 logo image" />
       
       
       
           <img src="./images/clients/8.png" alt="client-8 logo image" />
       
       
       
           <img src="./images/clients/9.png" alt="client-9 logo image" />
       
       
       
       
           <img src="./images/clients/10.png" alt="client-10 logo image" />
       
       
       
       
           <img src="./images/clients/11.png" alt="client-11 logo image" />
       
       
       
       
           <img src="./images/clients/12.png" alt="client-12 logo image" />
       
       
       
       
           <img src="./images/clients/13.png" alt="client-13 logo image" />
       
       
       
       
           <img src="./images/clients/14.png" alt="client-14 logo image" />
       
       
       
       
           <img src="./images/clients/15.png" alt="client-15 logo image" />
       
       
       
       
           <img src="./images/clients/16.png" alt="client-16 logo image" />
       
       
       
       
           <img src="./images/clients/17.png" alt="client-17 logo image" />
       
       
       
       
           <img src="./images/clients/18.png" alt="client-18 logo image" />
       
       
       
       
           <img src="./images/clients/19.png" alt="client-19 logo image" />
       
       
       
       
           <img src="./images/clients/20.png" alt="client-20 logo image" />
       
       
       
       
           <img src="./images/clients/21.png" alt="client-21 logo image" />
       
       
       
       
           <img src="./images/clients/22.png" alt="client-22 logo image" />
       
       
       
       
           <img src="./images/clients/23.png" alt="client-23 logo image" />
       
       
       
       
           <img src="./images/clients/24.png" alt="client-24 logo image" />
       
       
       
       
           <img src="./images/clients/25.png" alt="client-25 logo image" />
       
       
       
       
           <img src="./images/clients/26.png" alt="client-26 logo image" />
       
       
       
       
           <img src="./images/clients/27.png" alt="client-27 logo image" />
       
       
       
       
           <img src="./images/clients/28.png" alt="client-28 logo image" />
       
       
       
       
           <img src="./images/clients/29.png" alt="client-29 logo image" />
       
       
       
       
           <img src="./images/clients/30.png" alt="client-30 logo image" />
       
       
       
       
           <img src="./images/clients/31.png" alt="client-31 logo image" />
       
       
       
       
           <img src="./images/clients/32.png" alt="client-32 logo image" />
       
       
       
       
           <img src="./images/clients/33.png" alt="client-33 logo image" />
       
       
       
       
           <img src="./images/clients/34.png" alt="client-34 logo image" />
       
       
       
       
               
         </div>
       
        
       </div>
       
       </section>















    </>
  );
};

export default About;
