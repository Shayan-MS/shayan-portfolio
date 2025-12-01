"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import ScrollReveal from "@/src/components/lightswind/scroll-reveal";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import { LuArrowBigLeft, LuArrowLeft } from "react-icons/lu";
import ScrollReveal from "@/src/components/lightswind/scroll-reveal";
import { TypingText } from "@/src/components/lightswind/typing-text";
import Section from "./components/ShowSectionsWithAnimate";
import Header from "./components/home/Header";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* HOME */}
        <Section>
          <section
            className="relative z-0 flex flex-col items-center justify-center pt-28 pb-32 main-bg"
            id="home"
          >
            <div className="absolute w-full vh-100 backdrop-blur-xs"></div>
            <div className="flex relative z-10 flex-col items-center justify-between w-full lg:flex-row-reverse lg:me-14">
              <div></div>
              <div className="flex flex-col mt-8 md:mt-40 lg:mt-10 space-y-24">
                <div className="text-center flex flex-col space-y-10 md:px-8">
                  <h1>
                    <TypingText
                      delay={0.2}
                      duration={1}
                      fontSize="text-3xl sm:text-5xl lg:text-7xl"
                      fontWeight="font-bold"
                      color="text-white"
                      letterSpacing="tracking-wider"
                      align="center"
                    >
                      Hey, I'm Shayan
                    </TypingText>
                  </h1>
                  <div className="relative z-0 text-3xl sm:text-5xl text-blue-500">
                    <Typewriter
                      words={[
                        "Front-end developer",
                        "Back-end developer",
                        "Web designer",
                      ]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      cursorBlinking
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1200}
                    />
                  </div>
                </div>
                <div className="space-x-8 space-y-5 sm:space-y-0 flex flex-col sm:flex-row justify-center items-center sm:me-10">
                  <div>
                    <a href="#sendMessage" className="flex">
                      <button className="px-4 py-3 md:px-6 md:py-4 flex items-center border-2 cursor-pointer hover:bg-[#0043ff] transition text-xl md:text-2xl font-bold border-[#0043ff] rounded-lg text-white">
                        <>
                          <LuArrowLeft className="me-2 mt-1" />
                        </>
                        <>Send Message</>
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="#portfolio" className="flex">
                      <button className="px-4 py-3 md:px-6 md:py-4 flex items-center border cursor-pointer bg-[#0043ff] hover:bg-[#1453ff] text-white transition text-xl md:text-2xl font-bold border-[#0043ff] rounded-lg ">
                        <>Portfolio</>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-white flex lg:flex-col space-y-5 space-x-5 mt-10 lg:relative lg:left-12 xl:left-40">
                <div>
                  <Link
                    href={"/instagram"}
                    className="text-4xl lg:text-5xl hover:text-[#1453ff] transition"
                  >
                    <FaInstagram className="fill-current" />
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/telegram"}
                    className="text-4xl lg:text-5xl hover:text-[#1453ff] transition
"
                  >
                    <FaTelegram />
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    href={"/telegram"}
                    className="text-4xl lg:text-5xl hover:text-[#1453ff] transition"
                  >
                    <FaWhatsapp />
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    href={"/telegram"}
                    className="text-4xl lg:text-5xl hover:text-[#1453ff] transition"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    href={"/telegram"}
                    className="text-4xl lg:text-5xl hover:text-[#2660ff] transition"
                  >
                    <FaFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Section>
        {/* ABOUT ME */}
        <Section>
          <section className="aboutMe-bg lg:h-[40%]" id="aboutMe">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between xl:mx-32 2xl:mx-56 h-full py-40">
              <div className="flex flex-col items-center justify-center">
                <div
                  className="
      relative 
      rounded-full 
      p-1.5
      border-[3px] border-[#0043ff]
      shadow-[0_0_40px_-5px_rgba(0,67,255,0.7)]
      bg-transparent  
  "
                >
                  <img
                    src="/img/aboutMePicture.png"
                    alt="Shayan Profile"
                    className="w-[370px] h-[370px] rounded-full object-cover"
                  />
                </div>
                <div className="mt-7">
                  <h3 className="text-4xl text-[#0043ff] font-light tracking-wider drop-shadow-[0_0_10px_rgba(0,67,255,0.8)]">
                    [ ShayaN ]
                  </h3>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#4073ff] text-6xl font-bold text-center font-serif">
                  ABOUT ME
                  <div className="flex justify-center mt-5">
                    <hr className="border-b-3 w-50" />
                  </div>
                </h2>
                <div className="mt-5">
                  <p className="text-white text-lg lg:w-[585px]">
                    I’m Shayan Masourians, a 20-year-old student and Full Stack
                    Developer whose world is where the logic of code meets the
                    art of creation. 👋 I’ve been exploring this exciting path
                    for a year now, currently gaining experience and growing
                    alongside the Tanil content team. What keeps me motivated
                    isn't just writing lines of code—it's the thrill of solving
                    complex problems. I’m passionate about building solutions
                    that simplify life for people while crafting interfaces that
                    are genuinely beautiful. Beyond the world of ones and zeros?
                    You’ll likely find me recharging in nature 🌲 or immersed in
                    the gaming world 🎮.
                  </p>
                </div>
                <div className="text-white flex justify-center space-y-5 space-x-5 mt-10">
                  <div>
                    <Link
                      href={"/instagram"}
                      className="text-4xl lg:text-5xl text-[#4979ff] transition hover:transform-3d"
                    >
                      <FaInstagram className="fill-current" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"/telegram"}
                      className="text-4xl lg:text-5xl text-[#4979ff] transition
"
                    >
                      <FaTelegram />
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Link
                      href={"/whatsapp"}
                      className="text-4xl lg:text-5xl text-[#4979ff] transition"
                    >
                      <FaWhatsapp />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Section>
        <Section>
          <section
            className="relative z-0 flex flex-col items-center justify-center pt-28 pb-32 main-bg"
            id="portfolio"
          >
            <div className="absolute w-full h-full backdrop-blur-xs"></div>
            <div className="flex relative z-10 flex-col items-center justify-between w-full lg:flex-row-reverse lg:me-14">
              <div></div>
              <div className="flex flex-col mt-8 md:mt-40 lg:mt-10 space-y-24">
                <div className="text-center flex flex-col space-y-10 md:px-8">
                  <h1>
                    <TypingText
                      delay={0.2}
                      duration={1}
                      fontSize="text-3xl sm:text-5xl lg:text-7xl"
                      fontWeight="font-bold"
                      color="text-white"
                      letterSpacing="tracking-wider"
                      align="center"
                    >
                      Hey, I'm Shayan
                    </TypingText>
                  </h1>
                  <div className="relative z-0 text-3xl sm:text-5xl md:text-6xl font-light text-blue-600">
                    <Typewriter
                      words={[
                        "Front-end developer",
                        "Back-end developer",
                        "Web designer",
                      ]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      cursorBlinking
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1200}
                    />
                  </div>
                </div>
                <div className="space-x-8 space-y-5 sm:space-y-0 flex flex-col sm:flex-row justify-center items-center sm:me-10">
                  <div>
                    <a href="#sendMessage" className="flex">
                      <button className="px-4 py-3 md:px-6 md:py-4 flex items-center border-2 cursor-pointer hover:bg-[#0043ff] transition text-xl md:text-2xl font-bold border-[#0043ff] rounded-lg text-white">
                        <>
                          <LuArrowLeft className="me-2 mt-1" />
                        </>
                        <>Send Message</>
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="#portfolio" className="flex">
                      <button className="px-4 py-3 md:px-6 md:py-4 flex items-center border cursor-pointer bg-[#0043ff] hover:bg-[#1453ff] text-white transition text-xl md:text-2xl font-bold border-[#0043ff] rounded-lg ">
                        <>Portfolio</>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-white flex lg:flex-col space-y-5 space-x-5 mt-10 lg:relative lg:left-12 xl:left-40">
                <div>
                  <Link
                    href={"/instagram"}
                    className="text-4xl lg:text-5xl hover:text-[#1453ff] transition"
                  >
                    <FaInstagram className="fill-current" />
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/telegram"}
                    className="text-4xl lg:text-5xl hover:text-[#1453ff] transition
"
                  >
                    <FaTelegram />
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    href={"/telegram"}
                    className="text-4xl lg:text-5xl hover:text-[#1453ff] transition"
                  >
                    <FaWhatsapp />
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    href={"/telegram"}
                    className="text-4xl lg:text-5xl hover:text-[#1453ff] transition"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    href={"/telegram"}
                    className="text-4xl lg:text-5xl hover:text-[#2660ff] transition"
                  >
                    <FaFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Section>
      </main>
    </div>
  );
};

export default Home;
