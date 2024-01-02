import React from "react";
import Cards from "./Cards";
import { motion } from "framer-motion";
const About1 = () => {
  return (
    <>
      <section id="About" className="overflow-hidden  pb-20 lg:pt-[10px]  bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 ">
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
          > <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero " style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms Digital Solutions</span>
</h2></motion.div></div>
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
    Atoms Digital Solutions is a dynamic technology company focused on establishing distinctive digital identities for individuals and businesses. Our diverse range of services encompasses digital marketing, web and app development, software design and development, and top-notch photography services.



    </p>
    </motion.div>
   
    <div className="mt-5">
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
            transition={{ duration: 1, delay: 0.8 }}
            className="animate_left"
          > <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
              Our Vision
                
              </h2>
              </motion.div>
              </div>
    <div className=" flex items-center gap-5">
            
                <div className=" mt-2">
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
            transition={{ duration: 1, delay: 1}}
            className="animate_left"
          > 
                  <p>To inspire the world to create unique identity in the digital space
 </p></motion.div>
                </div>
              </div>
              <div className="mt-5">
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
            transition={{ duration: 1, delay: 1.1 }}
            className="animate_left"
          > <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
              Our Mission
                
              </h2>
              </motion.div>
              </div>
    <div className=" flex items-center gap-5">
            
                <div className=" mt-2">
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
            transition={{ duration: 1, delay: 1.2 }}
            className="animate_left"
          > 
                  <p>Shaping distinctive digital identities through cutting-edge technology and comprehensive services.
 </p></motion.div>
                </div>
              </div>
              
             
                   </div>
              </div>
            </div>
            <div className="w-full -px-4 lg:w-6/12 mt-15">
              <div className="flex items-center ">
                           
              <video
  className="object-contain rounded-3xl w-full"
  height="600"
  width="778"
  src="./images/about/about.mp4"
  autoPlay
  muted
  loop
/>
    
             
              
               
              </div>
            </div>
          </div>
        </div>
      </section>
      
<section>
<div className="  min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333] ">
      <div className="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
        <div className="text-center">
          <h3 className="text-4xl font-extrabold">20<span className="text-blue-600">+</span></h3>
          <p className="text-blue-500 font-semibold mt-3">Total Clients</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-extrabold">10<span className="text-blue-600">+</span></h3>
          <p className="text-blue-500 font-semibold mt-3">Team Members</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-extrabold">17.5L<span className="text-blue-600">+</span></h3>
          <p className=" font-semibold mt-3 text-blue-500">Digital Reach</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-extrabold">31.5L<span className="text-blue-600">+</span></h3>
          <p className="text-blue-500 font-semibold mt-3">Our Impressions</p>
        </div>
      </div>
    </div>
</section>
    </>
  );
};

export default About1;
