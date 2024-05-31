import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { TbShoppingCart } from 'react-icons/tb';
import { IoIosArrowDown, IoMdArrowDown } from 'react-icons/io';
import './custom-styles.css';

const NavbarLinks = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Shop', link: '/#shop' },
  { id: 3, name: 'About', link: '/#about' },
  { id: 4, name: 'Contact', link: '/#contact' },
];

const DropdownLinks = [
  { id: 1, name: 'Phones', link: '/#phones' },
  { id: 2, name: 'Tablets', link: '/#tablets' },
  { id: 3, name: 'Laptops', link: '/#laptops' },
];

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleArrowClick = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/pictures/background.jpg')" }}>
      <nav className="navbar-custom py-4 shadow-md fixed w-full">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <a href="#" className="text-red font-semibold tracking-widest text-2xl uppercase sm:text-3xl mr-8">
              Jojo's
            </a>
            <ul className="flex space-x-4">
              {NavbarLinks.map((data, index) => (
                <li key={index} className="relative">
                  <a href={data.link} className="text-gray-800 font-semibold hover:text-red-500">
                    {data.name}
                  </a>
                </li>
              ))}
              <li
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="#" className="text-gray-800 font-semibold hover:text-red-500 flex items-center">
                  Products <IoIosArrowDown className="ml-1" />
                </a>
                {isDropdownOpen && (
                  <ul className="dropdown-custom absolute left-0 mt-2 w-48 bg-white bg-opacity-90 border border-gray-200 shadow-lg rounded-md group-hover:block z-50">
                    {DropdownLinks.map((dropdown, index) => (
                      <li key={index}>
                        <a href={dropdown.link} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                          {dropdown.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
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
          <button className="ml-4">
            <TbShoppingCart className="text-xl text-gray-600 cursor-pointer" />
          </button>
        </div>
      </nav>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white-custom">
        <h1 className="text-4xl sm:text-6xl font-bold">Welcome to Mexico</h1>
        <p className="text-xl sm:text-2xl mt-4">
          Discover the beauty and the hidden gems of the land of charm.
          <br />
          Scroll down to see more!
        </p>
        <IoMdArrowDown
          className="text-4xl sm:text-6xl mt-20 cursor-pointer arrow-hover"
          onClick={handleArrowClick}
        />
      </div>
    </div>
  );
};

export default Navbar;