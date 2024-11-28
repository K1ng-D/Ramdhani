"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [scrollActive, setScrollActive] = useState(false);

  const sectionIds = ["home", "about", "expert Area", "portfolio"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MotionLink = motion.div;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 transition-all ${
          scrollActive
            ? "bg-[#FF4500] text-[#1c1c1c] shadow-md"
            : "bg-transparent text-[#FF4500]"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px]">
              <MotionLink
                className={`w-10 h-10 flex text-2xl items-center justify-center rounded font-bold ${
                  scrollActive
                    ? "w-10 h-10 bg-[#1c1c1c] text-[#FF4500]"
                    : "w-10 h-10 bg-[#FF4500] text-[#1c1c1c]"
                }`}
                whileHover={{
                  backgroundColor: [
                    "rgb(234, 88, 12, 1)",
                    "rgb(236, 191, 12, 1)",
                    "rgb(236, 19, 12, 1)",
                    "rgb(19, 236, 12, 1)",
                    "rgb(12, 236, 221, 1)",
                    "rgb(234, 88, 12, 1)",
                  ],
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
                R
              </MotionLink>
              amdhani
            </div>
          </div>
          <ul className="hidden lg:flex col-start-2 col-end-2 items-center">
            {sectionIds.map((id) => (
              <li
                key={id}
                className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                  activeLink === id
                    ? "text-white shadow-white"
                    : "font-bold hover:text-white"
                }`}
              >
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setActiveLink(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* Tampilan Mobile */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t bg-[#FF4500]">
        <div className="sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#f5f5dc]">
            {sectionIds.map((id) => (
              <li
                key={id}
                className={`px-2 py-2 mx-2 cursor-pointer inline-block relative ${
                  activeLink === id
                    ? "text-[#f5f5dc] shadow-[#f5f5dc]"
                    : "font-bold hover:text-white"
                }`}
              >
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setActiveLink(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
