import React from "react";
import Cards from "./Cards";
import { motion } from "framer-motion";
const About1 = () => {
  return (
    <>
      <section id="About" className="overflow-hidden  pb-20 lg:pt-[10px] lg:pb-[90px] bg-white dark:bg-dark px-10">
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
            
                <div className="w-3/4 mt-2">
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
            transition={{ duration: 1, delay: 0.9 }}
            className="animate_left"
          > <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
              Our Mission
                
              </h2>
              </motion.div>
              </div>
    <div className=" flex items-center gap-5">
            
                <div className="w-3/4 mt-2">
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
            transition={{ duration: 1, delay: 1 }}
            className="animate_left"
          > 
                  <p>To inspire the world to create unique identity in the digital space
 </p></motion.div>
                </div>
              </div>
              
             
                   </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                           
              <video
  className="object-contain rounded-3xl w-full"
  height="600"
  width="778"
  src="./images/about/about3.webm"
  autoPlay
  muted
  loop
/>
    
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                   
                  <img
                      src="./images/about/16.png"
                      alt=""

                      className="w-full "
                    />
                  </div>
                </div>
              
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
