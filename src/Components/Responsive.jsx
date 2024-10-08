import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Responsive = ({ showMenu }) => {
  const NavLinks = [
    {
      id: "1",
      name: "HOME",
      link: "/#",
    },
    {
      id: "2",
      name: "CARS",
      link: "/#cars",
    },
    {
      id: "3",
      name: "ABOUT",
      link: "/#about",
    },
    {
      id: "4",
      name: "BOOKING",
      link: "/#booking",
    },
  ];
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1>Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavLinks.map((data) => (
              <li key={data.id}>
                <a href={data.link}>{data.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Responsive;
