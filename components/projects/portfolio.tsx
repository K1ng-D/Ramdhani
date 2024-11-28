"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("projects");
  return (
    <div className="h-full min-h-screen">
      <div id="portfolio" className="relative w-full h-auto">
        <Image
          src="/assets/images/plester.png"
          alt="footer-background"
          layout="responsive"
          width={1500}
          height={500}
        />
      </div>
      <div className="mx-auto max-w-7xl mt-20 p-2 md:p-8 md:mt-4">
        <motion.div className="w-full  justify-center items-center py-4 px-10">
          <h1 className="text-center text-[40px] py-6 text-[#FF4500] font-bold">
            PORTFOLIO
          </h1>
          <motion.div className="flex justify-center space-x-4 mb-4">
            <button
              className={`px-4 py-2 text-lg rounded-full ${
                activeTab === "projects"
                  ? "bg-[#FF4500] text-white"
                  : "bg-[#1c1c1c] border-2 border-[#FF4500] text-[#FF4500]"
              }`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
            <button
              className={`px-4 py-2 text-lg rounded-full ${
                activeTab === "Graphic Design"
                  ? "bg-[#FF4500] text-white"
                  : "bg-[#1c1c1c] border-2 border-[#FF4500] text-[#FF4500]"
              }`}
              onClick={() => setActiveTab("Graphic Design")}
            >
              Graphic Design
            </button>
            <button
              className={`px-4 py-2 text-lg rounded-full ${
                activeTab === "education"
                  ? "bg-[#FF4500] text-white"
                  : "bg-[#1c1c1c] border-2 border-[#FF4500] text-[#FF4500]"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Konten
            </button>
          </motion.div>
          <div className="mt-8 overflow-y-auto h-[400px] scrollable-div">
            {/* Konten projects */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className={`${
                activeTab === "projects" ? "block" : "hidden"
              } grid grid-cols-1 md:grid-cols-2   gap-4`}
            >
              <motion.div className="flex flex-col items-start p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl">
                <Image
                  src="/assets/images/portfolio.png"
                  alt="portfolio"
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                />
                <div className=" pt-2">
                  <h3 className="text-lg text-[#FF4500] font-semibold">
                    Portfolio Ramdhani Hadi Winarno
                  </h3>
                  <p className="text-sm text-white">Website</p>
                </div>
              </motion.div>
              <motion.div className="flex flex-col items-start p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl">
                <Image
                  src="/assets/images/isekanime.png"
                  alt="isekanime"
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                />
                <div className=" pt-2">
                  <h3 className="text-lg text-[#FF4500] font-semibold">
                    ISEKANIME
                  </h3>
                  <p className="text-sm text-white">Website</p>
                </div>
              </motion.div>
              <motion.div className="flex flex-col items-start p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl">
                <Image
                  src="/assets/images/gamasti.png"
                  alt="gamasti"
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                />
                <div className=" pt-2">
                  <h3 className="text-lg text-[#FF4500] font-semibold">
                    Galeri Mahasiswa TI, GAMASTI
                  </h3>
                  <p className="text-sm text-white">Website</p>
                </div>
              </motion.div>
              <motion.div className="flex flex-col items-start p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl">
                <Image
                  src="/assets/images/ecosmart.png"
                  alt="ecosmart"
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                />
                <div className=" pt-2">
                  <h3 className="text-lg text-[#FF4500] font-semibold">
                    EcoSmart
                  </h3>
                  <p className="text-sm text-white">Website</p>
                </div>
              </motion.div>
              <motion.div className="flex flex-col items-start p-4 shadow-lg bg-[#1c1c1c] border-2 border-[#FF4500] rounded-xl">
                <Image
                  src="/assets/images/mengenalbenda.png"
                  alt="mengenalbenda"
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                />
                <div className=" pt-2">
                  <h3 className="text-lg text-[#FF4500] font-semibold">
                    Mengenal Benda
                  </h3>
                  <p className="text-sm text-white">Game Mobile</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
