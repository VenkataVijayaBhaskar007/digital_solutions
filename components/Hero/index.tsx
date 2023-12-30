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
   <section id="home" className=" pb-20  md:pt-10 xl:pb-25 xl:pt-1 relative space" >
  <div className=" pad   mx-auto w-full h-full">
    <div className=" md:block scale-95  relative">
      <Slider {...settings} className="">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={image}
                alt="heroimage"
                key={index}
                className=" cursor-pointer"
              />
           <div className="hero-text-container absolute left-0 text-left pl-6 top-1/2 transform -translate-y-1/2">
             
             
          
           <div className="mt-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
  <p className="max-w-2xl mb-2 font-light text-white textsize1  lg:mb-2  dark:text-gray-400">Welcome to</p>   
            <h1 className="max-w-2xl mb-2 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl text-white dark:text-white">Atoms Digital Solutions</h1>
            <p className="max-w-2xl mb-4 font-light text-white textsize lg:mb-6  dark:text-gray-400">Creating changemakers who inspire...</p>
           
        </div>
              
    </div>
              <div className="mt-8">
               
               

               
              </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    <div className="block md:hidden scale-95 rounded-lg pt-6 relative">
     
    </div>
  </div>
</section>






















  {/* <section>
  

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

</section>  */}





    </>
  );
};

export default Hero;

