"use client";

import React, { useState, useEffect } from "react";
import { XMarkIcon, ArrowUpRightIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Background color effect */}
      <div className="fixed top-0 right-0 -z-10 translate-y-[-80%] w-11/12">
        <Image src={assets.header_bg_color} alt="" className="w-full"/>
      </div>

      <nav className={`w-full fixed flex justify-between items-center px-6 py-4 z-50 transition-all duration-300 
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        
        {/* Logo */}
        <a href="#top" className="text-3xl font-bold">Laura Pro Cleaners</a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-row gap-6 px-8 py-3 rounded-full shadow-sm bg-white">
          <li className="hover:text-blue-500 transition duration-300"><a href="#top">Home</a></li>
          <li className="hover:text-blue-500 transition duration-300"><a href="#about">About</a></li>
          <li className="hover:text-blue-500 transition duration-300"><a href="#services">Services</a></li>
          <li className="hover:text-blue-500 transition duration-300"><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Sign Up Button (Desktop) */}

    

        <div className="hidden lg:flex items-center ">
          
        <a href="/login" className="flex items-center   border text-white
          bg-black rounded-full px-5 py-3  transition duration-500  hover:bg-blue-500">
            Login
            <ArrowUpRightIcon className="w-5 h-5 ml-2" />
          </a>
          
          <a href="/signup" className="flex items-center  hover:text-white border
           border-gray-500 rounded-full px-5 py-3 hover:bg-blue-500 transition duration-500">
            Signup
            <ArrowUpRightIcon className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="lg:hidden cursor-pointer fixed top-4 right-4 z-50" onClick={handleToggle}>
          {isOpen ? (
            <XMarkIcon className="w-7 h-7 text-black" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-black" />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 w-64 shadow-sm transform ${isOpen ? "translate-x-0" : "translate-x-full"} 
          transition-transform duration-300 ease-in-out lg:hidden `}>
          <ul className="flex flex-col gap-6 p-12 pt-20 backdrop-blur-sm h-screen">
            <li className="hover:text-blue-500 transition"><a href="#top" onClick={handleToggle}>Home</a></li>
            <li className="hover:text-blue-500 transition"><a href="#about" onClick={handleToggle}>About</a></li>
            <li className="hover:text-blue-500 transition"><a href="#services" onClick={handleToggle}>Services</a></li>
            <li className="hover:text-blue-500 transition"><a href="#contact" onClick={handleToggle}>Contact Us</a></li>
            <li>
              <a href="/login" className="block text-center border text-white bg-black rounded-full px-5 py-3 transition duration-500 mt-4  hover:bg-blue-500">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="block text-center border border-gray-500 rounded-full px-5 py-3 hover:bg-blue-500 hover:text-white transition duration-500">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
