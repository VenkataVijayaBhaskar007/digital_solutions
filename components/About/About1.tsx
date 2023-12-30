import React from "react";
import Cards from "./Cards";
const About1 = () => {
  return (
    <>
      <section id="About" className="overflow-hidden  pb-20 lg:pt-[10px] lg:pb-[90px] bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 ">
             <div style={{marginLeft:"-8px"}}> <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero " style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms Digital Solutions</span>
</h2></div>
      <div>       
              
    <p>
    At Atoms Group, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. Our expertise lies in providing courses and training to students, teachers, parents, and educational institution management, utilizing our innovative models to create effective learning spaces.
    </p>
   
    <div className="mt-5">
              <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
              Our Vision
                
              </h2>
              </div>
    <div className=" flex items-center gap-5">
            
                <div className="w-3/4 mt-2">
                  <h3 className="mb-0.5 text-metatitle2 text-black hover:text-blue-600 dark:text-white">
                    Achieving greater heights is not so farther
                  </h3>
                  <p>ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. </p>
                </div>
              </div>
             
              
             
                   </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
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
