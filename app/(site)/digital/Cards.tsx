// FeatureSection.tsx

import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";


const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/1.png",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
   
  },
  {
    id: 2,
    icon: "/images/icon/2.png",
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 3,
    icon: "/images/icon/3.png",
    title: "Social Media Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 4,
    icon: "/images/icon/4.png",
    title: "Social media Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 5,
    icon: "/images/icon/5.png",
    title: "Documentation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 6,
    icon: "/images/icon/6.png",
    title: "Report Making",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  
];

const SingleFeature: React.FC<{ feature: Feature }> = ({ feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
     
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p>{description}</p>
       
        <a href=""
    className="inline-block mt-4 px-4 py-2 bg-white text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 rounded-full transition duration-300 ease-in-out mr-4"
  >
   Know more
  </a>
   
    </>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className=" ">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Remove SectionHeader and add your own content */}
         
          {/* <!-- Section Title End --> */}

          <div className=" grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5 ">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default FeatureSection;
