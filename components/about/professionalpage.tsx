"use client";
import React, { useState } from "react";
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
const ProfessionalPage = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const setVariantsText = useMemo(() => variantsText(), []);
  const setParentVariants = useMemo(() => parentVariants(), []);
  const setVariantsImage = useMemo(() => variantsImage(), []);

  return (
    <div id="expert Area" className="h-full min-h-screen ">
      <div className="relative w-full h-auto">
        <Image
          src="/assets/images/plester.png"
          alt="footer-background"
          layout="responsive"
          width={1500}
          height={500}
        />
      </div>
      <div className="mx-auto max-w-7xl mt-20 p-2 md:p-8 md:mt-4">
        <motion.div className="flex flex-col xl:flex-row gap-6   text-white justify-between xl:pt-8 xl:pb-24">
          {/* Konten Sisi Kiri */}
          <motion.div
            variants={setVariantsText}
            initial="offscreen"
            animate="onscreen"
            className="w-full md:w-1/2 p-6"
          >
            <h1 className="border-l-4 border-[#FF4500] py-4 px-4 text-white uppercase text-2xl font-bold">
              Expert <span className="text-[#FF4500]">AREA</span>
            </h1>
            <p className="text-white mt-4">
              Hello! My name is Ramdhani Hadi Winarno. I am a passionate
              computer engineering student at Universitas Duta Bangsa Surakarta.
              I specialize in graphic design and content creation, with
              experience spanning over four years. I also actively participate
              in the HMPTI organization, focusing on research and technology.
            </p>
            <p className="text-white mt-2">
              I am a dedicated learner, constantly honing my skills in software
              development and design, while also engaging in activities like CTF
              (Capture The Flag) competitions and penetration testing.
            </p>
          </motion.div>

          {/* Konten Sisi Kanan */}
          <motion.div
            variants={setParentVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="w-full md:w-1/2 justify-center items-center py-4 px-10 text-center"
          >
            {/* Tombol Tab di Atas Konten */}
            <motion.div className="flex justify-center space-x-4 mb-4">
              <button
                className={`px-4 py-2 text-lg rounded-full ${
                  activeTab === "skills"
                    ? "bg-[#FF4500] text-white"
                    : "bg-[#1c1c1c] border-2 border-[#FF4500] text-[#FF4500]"
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
              <button
                className={`px-4 py-2 text-lg rounded-full ${
                  activeTab === "experience"
                    ? "bg-[#FF4500] text-white"
                    : "bg-[#1c1c1c] border-2 border-[#FF4500] text-[#FF4500]"
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`px-4 py-2 text-lg rounded-full ${
                  activeTab === "education"
                    ? "bg-[#FF4500] text-white"
                    : "bg-[#1c1c1c] border-2 border-[#FF4500] text-[#FF4500]"
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </motion.div>

            {/* Konten Berdasarkan Tab Aktif */}
            <div className="mt-8 overflow-y-auto h-[400px] scrollable-div">
              {/* Konten Skills */}
              <motion.div
                variants={setParentVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className={`${
                  activeTab === "skills" ? "block" : "hidden"
                } grid grid-cols-1 md:grid-cols-2  gap-4`}
              >
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/photoshop.png"
                    alt="Photoshop"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Adobe Photoshop</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/premierepro.png"
                    alt="Premiere Pro"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Premiere Pro</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/aftereffect.png"
                    alt="After Effect"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">After Effect</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/ilustrator.png"
                    alt="Adobe Ilustrator"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Adobe Ilustrator</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/html.png"
                    alt="HTML"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">HTML</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/css.png"
                    alt="CSS"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">CSS</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/js.png"
                    alt="JavaScript"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">JavaScript</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/react.png"
                    alt="ReactJS"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">React JS</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/tailwind.png"
                    alt="Tailwind"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Tailwind</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/node.png"
                    alt="NodeJS"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Node JS</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/next.png"
                    alt="Next JS"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Next JS</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/mongo.png"
                    alt="Mongo DB"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Mongo DB</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/php.png"
                    alt="PHP"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">PHP</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/laravel.png"
                    alt="Laravel"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Laravel</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/planetScale.png"
                    alt="Planet Scale"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Planet Scale</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="flex items-center p-4 shadow-lg  bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <Image
                    src="/assets/images/pentester.png"
                    alt="Pentester"
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Pentester</h3>
                    <p className="text-sm text-gray-300">Level: Expert</p>
                  </div>
                </motion.div>
              </motion.div>
              {/* Konten Experience */}
              <motion.div
                variants={setParentVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className={`${
                  activeTab === "experience" ? "block" : "hidden"
                } space-y-6`}
              >
                <motion.div
                  variants={setVariantsImage}
                  className="p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Bagian Gambar */}
                    <div className="flex justify-center md:justify-start md:w-[18%]">
                      <Image
                        src="/assets/images/graphicDesign.png"
                        alt="Premiere Pro"
                        width={80}
                        height={80}
                      />
                    </div>

                    {/* Bagian Teks */}
                    <div className="w-full md:w-[82%] text-center md:text-start">
                      <h3 className="text-lg font-semibold">Graphic Design</h3>
                      <p className="text-sm text-gray-300">
                        Unknow - Freelance
                      </p>
                      <p className="text-sm text-gray-300">
                        August 2017 - June 2022 (4 years and 10 months)
                      </p>
                    </div>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Photoshop
                    </span>
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Premiere Pro
                    </span>
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      After Effect
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Bagian Gambar */}
                    <div className="flex justify-center md:justify-start md:w-[18%]">
                      <Image
                        src="/assets/images/MIC.png"
                        alt="Premiere Pro"
                        width={80}
                        height={80}
                      />
                    </div>

                    {/* Bagian Teks */}
                    <div className="w-full md:w-[82%] text-center md:text-start">
                      <h3 className="text-lg font-semibold">IT Consultant</h3>
                      <p className="text-sm text-gray-300">MIC - Employee</p>
                      <p className="text-sm text-gray-300">
                        January 2023 - March 2023 (3 months)
                      </p>
                    </div>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Cyber Security
                    </span>
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      ERP
                    </span>
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Business Analysis
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Bagian Gambar */}
                    <div className="flex justify-center md:justify-start md:w-[18%]">
                      <Image
                        src="/assets/images/pentester.png"
                        alt="Premiere Pro"
                        width={80}
                        height={80}
                      />
                    </div>

                    {/* Bagian Teks */}
                    <div className="w-full md:w-[82%] text-center md:text-start">
                      <h3 className="text-lg font-semibold">Cyber Security</h3>
                      <p className="text-sm text-gray-300">
                        Unknow - Freelance
                      </p>
                      <p className="text-sm text-gray-300">August 2022 - Now</p>
                    </div>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Pentester
                    </span>
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      CTF Player
                    </span>
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Bug Hunter
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Konten Education */}
              <motion.div
                variants={setParentVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className={`${
                  activeTab === "education" ? "block" : "hidden"
                } space-y-6`}
              >
                <motion.div
                  variants={setVariantsImage}
                  className="p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Bagian Gambar */}
                    <div className="flex justify-center md:justify-start md:w-[18%]">
                      <Image
                        src="/assets/images/dutiska.png"
                        alt="Premiere Pro"
                        width={80}
                        height={80}
                      />
                    </div>

                    {/* Bagian Teks */}
                    <div className="w-full md:w-[82%] text-center md:text-start">
                      <h3 className="text-lg font-semibold">
                        SMPN 23 SURAKARTA
                      </h3>
                      <p className="text-sm text-gray-300">-</p>
                      <p className="text-sm text-gray-300">
                        July 2014 - June 2017
                      </p>
                    </div>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Graphic Design
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  variants={setVariantsImage}
                  className="p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Bagian Gambar */}
                    <div className="flex justify-center md:justify-start md:w-[18%]">
                      <Image
                        src="/assets/images/smanila.png"
                        alt="Premiere Pro"
                        width={80}
                        height={80}
                      />
                    </div>

                    {/* Bagian Teks */}
                    <div className="w-full md:w-[82%] text-center md:text-start">
                      <h3 className="text-lg font-semibold">
                        SMAN 1 NGEMPLAK, BOYOLALI
                      </h3>
                      <p className="text-sm text-gray-300">
                        Ilmu Pengetahuan Sosial
                      </p>
                      <p className="text-sm text-gray-300">
                        July 2017 - June 2020
                      </p>
                    </div>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Graphic Design
                    </span>
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Programmer
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  variants={setVariantsImage}
                  className="p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Bagian Gambar */}
                    <div className="flex justify-center md:justify-start md:w-[18%]">
                      <Image
                        src="/assets/images/udb.png"
                        alt="Premiere Pro"
                        width={80}
                        height={80}
                      />
                    </div>

                    {/* Bagian Teks */}
                    <div className="w-full md:w-[82%] text-center md:text-start">
                      <h3 className="text-lg font-semibold">
                        UNIVERSITAS DUTA BANGSA SURAKARTA
                      </h3>
                      <p className="text-sm text-gray-300">
                        Teknik Informatika
                      </p>
                      <p className="text-sm text-gray-300">July 2022 - Now</p>
                    </div>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Graphic Design
                    </span>
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Programmer
                    </span>
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-sm rounded-full">
                      Cyber Security
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalPage;
