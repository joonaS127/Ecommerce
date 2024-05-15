import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';

const NavbarLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop',
  },
  {
    id: 3,
    name: 'About',
    link: '/#about',
  },
  {
    id: 4,
    name: 'Contact',
    link: '/#contact',
  },
];

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <a
            href="#"
            className="text-red font-semibold tracking-widest text-2xl uppercase sm:text-3xl mr-8"
          >
            Jojo's
          </a>
          <ul className="flex space-x-4">
            {NavbarLinks.map((data, index) => (
              <li key={index}>
                <a href={data.link} className="text-gray-800 font-semibold hover:text-red-500">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative flex items-center ml-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <LuSearch className="text-xl text-gray-600 cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className={`border rounded py-1 px-2 transition-transform duration-300 ease-in-out transform ${
              isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            } origin-right absolute right-8`}
            style={{ transformOrigin: 'right' }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
