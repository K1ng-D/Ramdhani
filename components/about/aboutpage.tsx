"use client";
import TransitionLayout from "@/components/Transition/transition";
import React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

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

function parentVariants() {
  return {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 1,
      },
    },
  };
}

function variantsImage() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 4,
      },
    },
  };
}

export default function AboutPage() {
  const setVariantsText = useMemo(() => variantsText(), []);
  const setParentVariants = useMemo(() => parentVariants(), []);
  const setVariantsImage = useMemo(() => variantsImage(), []);

  return (
    <div className="h-full min-h-screen md:pt-14 scroll-smooth">
      <div id="about" className="relative w-full h-auto">
        <Image
          src="/assets/images/plester.png"
          alt="footer-background"
          layout="responsive"
          width={1500}
          height={500}
        />
      </div>
      <TransitionLayout />
      <div className="mx-auto max-w-7xl mt-20 p-6 md:px-14 md:mt-4">
        <motion.div className="flex flex-col xl:flex-row gap-6  items-center text-white justify-between xl:pt-8 xl:pb-24">
          <motion.div
            variants={setVariantsText}
            initial="offscreen"
            animate="onscreen"
            className="w-full md:w-1/2"
          >
            <h1 className="border-l-4 border-[#FF4500] py-4 px-4 text-white uppercase text-2xl font-bold ">
              About <span className="text-[#FF4500] ">Me</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6  py-8">
              <div className="text-white font-semibold">
                <p className="py-4">
                  Allow me to introduce myself. My name is Ramdhani Hadi
                  Winarno, commonly known as Dhani. Currently, I am an active
                  five-semester student at Universitas Duta Bangsa Surakarta,
                  majoring in Computer Engineering. I am also actively involved
                  in the HMPTI (Himpunan Mahasiswa Prodi Teknik Informatika)
                  organization, where I have served as a member of the Research
                  and Technology division for three terms. I have been actively
                  engaged in both graphic design and Content Creator since high
                  school, and I continue to enjoy learning about both fields.
                </p>
                <p className="py-4">
                  I am currently focusing on graphic design and software
                  development. In addition, I have side activities as a CTF
                  player and pentester. With the experience I&apos;ve honed over
                  the past 4 years, I have completed several projects and
                  created some of my best works. From now on, I will continue
                  learning to sharpen my skills.
                </p>
              </div>
            </div>
          </motion.div>
          {/* 2 */}
          <motion.div
            variants={setParentVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="w-full md:w-1/2 justify-center items-center py-4 px-10 text-center"
          >
            <div className="w-full h-auto text-orange-600 text-center rounded-br-xl font-bold uppercase grid grid-cols-1 xl:grid-cols-2 gap-6">
              <motion.div
                variants={setVariantsImage}
                className="flex-col lg:w-full lg:flex items-center justify-between"
              >
                <Image
                  src="/assets/images/programmer.png"
                  alt="test"
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                variants={setVariantsImage}
                className="flex-col lg:w-full lg:flex items-center justify-between "
              >
                <Image
                  src="/assets/images/contenCreator.png"
                  alt="test"
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                variants={setVariantsImage}
                className="flex-col lg:w-full lg:flex items-center justify-between "
              >
                <Image
                  src="/assets/images/pentester.png"
                  alt="test"
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                variants={setVariantsImage}
                className="flex-col lg:w-full lg:flex items-center justify-between "
              >
                <Image
                  src="/assets/images/graphicDesign.png"
                  alt="test"
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
