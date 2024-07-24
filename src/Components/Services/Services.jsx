import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
const Services = () => {
  const skilldata = [
    {
      name: "Best Price",
      icon: (
        <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur nisi dolorum.",
      aosdelay: "0",
    },
    {
      name: "Fast and Safe",
      icon: (
        <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur nisi dolorum.",
      aosdelay: "500",
    },
    {
      name: "Experience Drivers",
      icon: (
        <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link: "#",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur nisi dolorum.",
      aosdelay: "0",
    },
  ];
  return (
    <div className="py-12 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-serif font-semibold text-center sm:text-4xl">
            Why Choose Us?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skilldata.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosdelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{skill.icon}</div>
              <h1>{skill.name}</h1>
              <p>{skill.description}</p>
              <a href={skill.link}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
