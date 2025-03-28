"use client";

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="h-screen flex flex-col items-center justify-center text-center px-6 z-30 ">
      <div className="mt-20 mb-10">
      <h2 className="text-4xl font-bold text-gray-800 ">About us</h2>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-gray-800 ">Our mission</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            At Laura Pro Cleaners, we are committed to providing top-quality cleaning services to keep your home and office spotless. Our experienced team uses eco-friendly products and modern techniques to ensure a safe and hygienic environment.
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div className="lg:w-1/2">
          <Image 
            src={assets.about_image} 
            alt="About Us Image" 
            width={500} 
            height={350} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
