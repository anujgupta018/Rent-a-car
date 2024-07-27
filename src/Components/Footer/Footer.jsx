import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      Link: "/#",
    },
    {
      title: "About",
      Link: "/#about",
    },
    {
      title: "Contact",
      Link: "/#contact",
    },
    {
      title: "Blog",
      Link: "/#blog",
    },
  ];
  const Link = [
    {
      title: "Home",
      Link: "#",
    },
    {
      title: "About",
      Link: "/#about",
    },
    {
      title: "Contact",
      Link: "/#contact",
    },
    {
      title: "Blog",
      Link: "/#blog",
    },
  ];
  const Location = [
    {
      title: "Delhi",
      Link: "#",
    },
    {
      title: "Bangalore",
      Link: "#",
    },
    {
      title: "Chennai",
      Link: "#",
    },
    {
      title: "Pune",
      Link: "#",
    },
  ];
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3">
              Car Rental
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              repudiandae perspiciatis eligendi?
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Mumbai,Maharastra</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 1230990123</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-blue-500 duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-blue-700 duration-300" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* First col */}
            <div className="py-8 px-4">
              <div>
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="flex gap-3 flex-col">
                  {footerLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-primary duration-300"
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.Link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* second col */}
            <div className="py-8 px-4">
              <div>
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Links
                </h1>
                <ul className="flex gap-3 flex-col">
                  {Link.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-primary duration-300"
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.Link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Third col */}
            <div className="py-8 px-4">
              <div>
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Location
                </h1>
                <ul className="flex gap-3 flex-col">
                  {Location.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-primary duration-300"
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.Link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
