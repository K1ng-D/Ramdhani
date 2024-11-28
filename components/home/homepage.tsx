"use client";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";
import TransitionLayout from "@/components/Transition/transition";

function variantsText() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 4 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

function variantsProfile() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 5 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

export default function HomePage() {
  const setVariantsText = useMemo(() => variantsText(), []);
  const setVariantsProfile = useMemo(() => variantsProfile(), []);

  return (
    <div id="home" className="h-full min-h-screen">
      <TransitionLayout />
      <div className="mx-auto max-w-7xl mt-20 px-6 pt-6  md:px-14  md:mt-4">
        <motion.div className="flex flex-col xl:flex-row items-center text-white justify-between xl:pt-8 ">
          {/* TEXT */}
          <motion.div
            variants={setVariantsText}
            initial="offscreen"
            animate="onscreen"
            className="text-center xl:text-start mb-8 xl:mb-0"
          >
            <span className="text-sm md:text-xl">Hello, my name is</span>
            <h1 className="text-[32px] md:text-[48px] text-[#FF4500] xl:text-[50px] leading-[1.1] font-bold">
              Ramdhani Hadi Winarno
            </h1>
            <p className="mb-6 md:mb-9">
              I am a software developer as well as a pentester. I have been
              studying in the IT
              <br /> field for 3 years, and I have finally found a comfortable
              place for my career as
              <br /> a software developer and pentester.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex gap-4">
                <FaGithub className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <FaInstagram className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <FaFacebook className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <FaXTwitter className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
          </motion.div>
          {/* PHOTO */}
          <motion.div
            variants={setVariantsProfile}
            initial="offscreen"
            animate="onscreen"
            className="flex justify-center xl:justify-end w-full xl:w-auto "
          >
            <div className="border-4 border-white bg-[#FF4500] rounded-full">
              <Image
                src="/assets/images/ramdhani.png"
                alt="Ramdhani"
                width={300}
                height={300}
                className="rounded-full object-cover md:w-[500px] md:h-[500px]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
