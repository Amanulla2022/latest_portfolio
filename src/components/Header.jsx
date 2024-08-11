import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <header className="flex justify-between items-center w-full h-20 px-2 text-white bg-black fixed">
      <div>
        <h1 className="text-4xl font-bold ml-2">Amanulla</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <Link
            key={id}
            to="/"
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </Link>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? (
          <IoIosCloseCircle className="text-4xl" />
        ) : (
          <FaBarsStaggered className="text-4xl" />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to="/"
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </Link>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
