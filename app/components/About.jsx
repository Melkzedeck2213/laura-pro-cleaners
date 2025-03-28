"use client";

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-6 z-30 py-16">
      <div className="mt-20 mb-10">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            At Laura Pro Cleaners, we are committed to providing top-quality cleaning services to keep your home and office spotless. 
            Our experienced team uses eco-friendly products and modern techniques to ensure a safe and hygienic environment.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-6">Why Choose Us?</h2>
          <ul className="text-gray-600 mt-4 leading-relaxed list-disc list-inside">
            <li>Eco-friendly cleaning solutions that prioritize your health and safety.</li>
            <li>Experienced and professional cleaning staff.</li>
            <li>Flexible scheduling to fit your busy lifestyle.</li>
            <li>Affordable pricing without compromising quality.</li>
            <li>100% satisfaction guarantee with every service.</li>
          </ul>
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

      {/* Company Values Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Integrity</h3>
            <p className="text-gray-600 mt-2">We operate with honesty and transparency in all our services.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Excellence</h3>
            <p className="text-gray-600 mt-2">We strive for the highest standards in everything we do.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Customer Focus</h3>
            <p className="text-gray-600 mt-2">Your satisfaction is our priority, and we tailor our services to meet your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
