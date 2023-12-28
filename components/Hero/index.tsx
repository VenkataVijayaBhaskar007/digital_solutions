"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css"
const images = [
  "/herosection/1.svg",
  "/herosection/2.svg",
  "/herosection/3.svg",
  "/herosection/4.svg",
  "/herosection/5.svg",
  "/herosection/6.svg",
];


// const mobileImages = [
//   "/herosection/mobile/1.svg",
//   "/herosection/mobile/2.svg",
//   "/herosection/mobile/3.svg",
//   "/herosection/mobile/4.svg",
//   "/herosection/mobile/5.svg",
//   "/herosection/mobile/6.svg",
// ];
const Hero = () => {
  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
  };

  return (
    <>
   <section id="home" className=" pb-20  md:pt-10 xl:pb-25 xl:pt-1 relative" >
  <div className="pt-7 sm:pt-16 lg:pt-20 mx-auto w-full h-full">
    <div className=" md:block scale-95 rounded-lg relative">
      <Slider {...settings} className="">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={image}
                alt="heroimage"
                key={index}
                className="rounded-lg cursor-pointer"
              />
              <div className="hero-text-container absolute left-0 text-left pl-6 top-1/2 transform -translate-y-1/2">
              <h4 className="mb-6 heading-small text-xl font-medium text-white dark:text-white" >
                 Welcome to
              </h4>
              
              <h1 className=" text-4xl font-bold pr-16 heading-text  text-white dark:text-white xl:text-hero hover:translate-y-[-18px]" style={{ marginBottom:"-15px" }}>
              Atoms Digital Solutions
              </h1>
              <div className="text-xl">   
              <p className="mt-8 w-1/2 text-white font-regular">
              Atoms Group is committed to providing affordable and impressive Group+ services for people from all social backgrounds.
              </p>
              </div>
              <div className="mt-8">
                {/* <form onSubmit={handleSubmit}> */}
                  {/* <div className="flex flex-wrap gap-5"> */}
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}
                    {/* <button
                      aria-label="get started button"
                      className="flex rounded-full bg-purple-600 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-purple-600 dark:hover:bg-blackho hover:translate-y-[-5px]"
                    >
                      Our Projects
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-gray-100  px-7.5 py-2.5 text-black  dark:text-white hover:text-white duration-300 ease-in-out hover:bg-purple-600 dark:bg-btndark dark:hover:bg-purple-600 hover:translate-y-[-5px]"
                    >
                      Our Team
                    </button>
                  </div> */}
               

               
              </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  </div>
  </section>
  <section>
  

  <div className="topmargin" >
    <div className="relative">
    
      <div className=" relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className=" max-w-4xl mx-auto">
          <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500" id="item-1">
          Clients
              </dt>
              <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600" >
                20+
              </dd>
            </div>
            <div
              className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
              Digital Reach
              </dt>
              <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                17,68,978+
              </dd>
            </div>
            <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
           Our Impressions
              </dt>
              <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                31,83,180+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>

  </section>
    </>
  );
};

export default Hero;
