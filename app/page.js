"use client";
import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

// import ScrollReveal from "@/src/components/lightswind/scroll-reveal";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { TypingText } from "@/src/components/lightswind/typing-text";
import Header from "./components/home/Header";
import ScrollStack from "@/src/components/lightswind/scroll-stack";
import ClickSpark from "@/components/ClickSpark";

import { InteractiveCard } from "@/src/components/lightswind/interactive-card";
import {
  Brackets,
  Check,
  CodeXml,
  Layers,
  PanelsTopLeft,
  PenTool,
  Ruler,
  Shapes,
} from "lucide-react";
import Footer from "./components/home/Footer";
import { CountUp } from "@/src/components/lightswind/count-up";

const Home = () => {
  const myProjects = [
    {
      id: 1,
      title: "Store Web",
      subtitle: "Next.js, Tailwind, MongoDB",
      badge: "E-Commerce",
      backgroundImage: "/img/about-me.jpg",
      href: "/portfolio/shop-project",
      content: <p>یک پلتفرم کامل فروشگاهی با قابلیت پرداخت آنلاین...</p>,
    },
    {
      id: 2,
      title: "Dashboard Admin",
      subtitle: "React, Chart.js",
      badge: "SaaS",
      backgroundImage: "/img/bg.jpg",
      href: "/portfolio/dashboard-app",
      content: <p>پنل ادمین برای مدیریت تراکنش‌های ارزی...</p>,
    },
    {
      id: 3,
      title: "Course Web",
      subtitle: "Next.js, Tailwind, MongoDB",
      badge: "E-Commerce",
      backgroundImage: "/img/about-me.jpg",
      href: "/portfolio/shop-project",
      content: <p>یک پلتفرم کامل فروشگاهی با قابلیت پرداخت آنلاین...</p>,
    },
  ];
  return (
    <ClickSpark
      sparkColor="#0043ff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen">
        <Header />
        <main>
          {/* HOME */}
          <section
            className="relative z-0 flex flex-col items-center justify-center main-bg"
            id="home"
          >
            <div className="absolute w-full vh-100 backdrop-blur-xs"></div>
            <div className="flex relative z-10 flex-col sm:flex-row-reverse items-center justify-around w-full sm:mt-5 lg:mt-15 px-10 sm:px-8 ">
              <div className="flex flex-col items-center justify-center">
                <div
                  className="
      relative 
      rounded-2xl
      p-1
      border-[3px] border-[#0043ff]
      shadow-[0_0_40px_-5px_rgba(0,67,255,1)]
      bg-transparent  
  "
                >
                  <img
                    src="/img/shayan.png"
                    alt="Shayan Profile"
                    className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px] 2xl:w-[470px] 2xl:h-[470px] rounded-xl object-cover"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col">
                <div className="flex flex-col mt-8 lg:mt-10 space-y-10">
                  <div className="text-center flex flex-col space-y-10 md:px-8">
                    <h1>
                      <TypingText
                        delay={0.2}
                        duration={1}
                        fontSize="text-3xl lg:text-5xl xl:text-[65px] 2xl:text-7xl"
                        fontWeight="font-bold"
                        color="text-white"
                        letterSpacing="tracking-wider"
                        align="center"
                      >
                        Hi, I'm Shayan
                      </TypingText>
                    </h1>
                    <div className="relative z-0 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-blue-500">
                      <Typewriter
                        words={[
                          "Front-end Developer",
                          "Back-end Developer",
                          "Web Designer",
                          "Wordpress Developer",
                          "Graphic Artist",
                          "Video Editor",
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
                  <div className="space-y-5 sm:space-y-0 sm:space-x-2 lg:space-x-4 xl:space-x-6 flex flex-col sm:flex-row justify-center items-center sm:me-10">
                    <div>
                      <a href="#sendMessage" className="flex">
                        <button className="px-4 py-3 text-nowrap md:px-6 md:py-4 flex items-center border-2 cursor-pointer hover:bg-[#0043ff] transition text-md md:text-lg xl:text-xl font-bold border-[#0043ff] rounded-lg text-white">
                          <>
                            <LuArrowLeft className="me-2 mt-1" />
                          </>
                          <>Send Message</>
                        </button>
                      </a>
                    </div>
                    <div>
                      <a href="#portfolio" className="flex">
                        <button className="px-4 py-3 md:px-6 md:py-4 flex items-center border cursor-pointer bg-[#0043ff] hover:bg-[#1453ff] text-white transition text-md md:text-lg xl:text-xl font-bold border-[#0043ff] rounded-lg ">
                          <>Portfolio</>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-white flex justify-center me-3 space-x-4 lg:space-x-5 xl:space-x-7 mt-5 sm:mt-10 2xl:mt-14">
                  <div>
                    <Link
                      href={"/instagram"}
                      className="text-4xl xl:text-5xl hover:text-[#1453ff] transition"
                    >
                      <FaInstagram className="fill-current" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"/telegram"}
                      className="text-4xl xl:text-5xl hover:text-[#1453ff] transition
"
                    >
                      <FaTelegram />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"/telegram"}
                      className="text-4xl xl:text-5xl hover:text-[#1453ff] transition"
                    >
                      <FaWhatsapp />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"/telegram"}
                      className="text-4xl xl:text-5xl hover:text-[#1453ff] transition"
                    >
                      <FaLinkedin />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"/telegram"}
                      className="text-4xl xl:text-5xl hover:text-[#2660ff] transition"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          {/* ABOUT ME */}
          <section className="aboutMe-bg lg:h-[40%] py-32" id="aboutMe">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between xl:mx-32 2xl:mx-56 h-full">
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
                <div className="mt-5">
                  <h3 className="text-4xl text-[#0043ff] font-light tracking-wider drop-shadow-[0_0_10px_rgba(0,67,255,0.8)]">
                    [ ShayaN ]
                  </h3>
                </div>
              </div>
              <div className="flex flex-col">
                <h2
                  className="text-5xl lg:text-6xl font-bold text-center my-10 lg:my-0 
    bg-gradient-to-r from-[#4073ff] to-purple-600 
    bg-clip-text text-transparent"
                >
                  ABOUT ME
                  <div className="flex justify-center mt-5">
                    <hr className="border-b-3 w-[150px]" />
                  </div>
                </h2>
                <div className="lg:mt-5">
                  <p className="text-white text-lg lg:w-[585px] mx-5 sm:mx-10 lg:mx-0">
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
              </div>
            </div>
            <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-10 justify-center lg:space-x-20 mt-10">
              <div className="flex flex-col-reverse items-center">
                <p className="text-white mt-1 font-light">Project Completed</p>
                <CountUp value={52} />
              </div>

              <div className="flex flex-col-reverse items-center">
                <p className="text-white mt-1 font-light">
                  Years of Experience
                </p>
                <CountUp value={5} duration={2} />
              </div>

              <div className="flex flex-col-reverse items-center">
                <p className="text-white mt-1 font-light">Happy Clients</p>
                <CountUp value={1024} duration={2.5} />
              </div>

              <div className="flex flex-col-reverse items-center">
                <p className="text-white mt-1 font-light">Coffee Cups</p>
                <span className="text-white text-5xl">∞</span>
              </div>
            </div>
          </section>
          {/* PORTFOLIO */}
          <section
            className="flex flex-col items-center justify-center bg-zinc-900 text-white"
            id="portfolio"
          >
            <div className="pt-30">
              <h2
                className="text-5xl lg:text-6xl font-bold text-center my-10 lg:my-0 
    bg-gradient-to-r from-[#4073ff] to-purple-600 
    bg-clip-text text-transparent"
              >
                Portfolio
                <div className="flex justify-center mt-5">
                  <hr className="border-b-3 w-[150px]" />
                </div>
              </h2>
              <div className="flex flex-col items-center space-y-10 mt-6">
                <div className="mx-2 sm:mx-0">
                  <p className="text-4xl text-center">
                    Dive into my recent projects
                  </p>
                </div>
                <div>
                  <Link
                    href={"/portfolio"}
                    className="px-4 py-3 md:px-6 md:py-4 flex items-center border-2 cursor-pointer hover:bg-[#0043ff] transition text-xl md:text-2xl font-bold border-[#0043ff] rounded-lg text-white"
                  >
                    All Portfolio
                  </Link>
                </div>
              </div>
            </div>
            <ScrollStack
              cards={myProjects}
              cardHeader={true}
              backgroundColor="black"
              onCardClick={(card) => router.push(card.href)}
            />
          </section>
          {/* Skills */}
          <section className="skills-bg lg:h-[40%]" id="skills">
            <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center xl:mx-32 2xl:mx-56 h-full py-40">
              <div className="flex flex-col items-center">
                <h2
                  className="text-5xl lg:text-6xl font-bold text-center my-10 lg:my-0 
    bg-gradient-to-r from-[#4073ff] to-purple-600 
    bg-clip-text text-transparent"
                >
                  SKILLS
                  <div className="flex justify-center mt-5">
                    <hr className="border-b-3 w-[150px]" />
                  </div>
                </h2>
                <div className="ms-2 sm:ms-0 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <InteractiveCard
                    InteractiveColor="#0043ff"
                    className="text-white border-2 border-[#f172ff] rounded-xl p-7 font-semibold text-lg"
                  >
                    <div className="text-[#f172ff]">
                      <Shapes size={80} />
                      <p className="text-2xl ms-2 mt-2">UI UX DESIGN</p>
                      <div className="ms-2 mt-3 flex flex-col space-y-1">
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Interface Design
                        </span>
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Experience Strategy
                        </span>
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Wireframes & Prototypes
                        </span>
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Design Systems
                        </span>
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Responsive Design
                        </span>
                      </div>
                    </div>
                  </InteractiveCard>
                  <InteractiveCard
                    InteractiveColor="#0043ff"
                    className="text-white border-2 border-[#edf500] rounded-xl p-7 font-semibold text-lg"
                  >
                    <div className="text-[#edf500]">
                      <CodeXml size={80} />
                      <p className="text-2xl ms-2 mt-2 text-nowrap">
                        WEB DEVELOPMENT
                      </p>
                      <div className="ms-2 mt-3 flex flex-col space-y-1">
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Interface Design
                        </span>
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Experience Strategy
                        </span>
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Wireframes & Prototypes
                        </span>
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Design Systems
                        </span>
                        <span className="text-[16px] flex items-center gap-x-0.5">
                          <Check size={17} />
                          Responsive Design
                        </span>
                      </div>
                    </div>
                  </InteractiveCard>
                  <InteractiveCard
                    InteractiveColor="#0043ff"
                    className="text-white border-2 rounded-xl p-7 font-semibold text-lg"
                  >
                    <div className="text-white text-2xl">
                      <div>
                        <Layers size={80} />
                        <p className="text-2xl ms-2 mt-2 text-wrap">
                          WORDPRESS DEVELOPMENT
                        </p>
                        <div className="ms-2 mt-3 flex flex-col space-y-2">
                          <span className="text-[16px] flex items-center gap-x-0.5">
                            <Check size={17} />
                            Interface Design
                          </span>
                          <span className="text-[16px] flex items-center gap-x-0.5">
                            <Check size={17} />
                            Experience Strategy
                          </span>
                          <span className="text-[16px] flex items-center gap-x-0.5">
                            <Check size={17} />
                            Wireframes & Prototypes
                          </span>
                          <span className="text-[16px] flex items-center gap-x-0.5">
                            <Check size={17} />
                            Design Systems
                          </span>
                          <span className="text-[16px] flex items-center gap-x-0.5">
                            <Check size={17} />
                            Responsive Design
                          </span>
                        </div>
                      </div>
                    </div>
                  </InteractiveCard>
                </div>
              </div>
            </div>
          </section>
          {/* MESSAGE */}
          <section className="message-bg lg:h-[40%]" id="sendMessage">
            <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center xl:mx-32 2xl:mx-56 h-full py-40">
              <div className="flex flex-col items-center w-full">
                <h2
                  className="text-5xl lg:text-6xl font-bold text-center my-10 lg:my-0 
    bg-gradient-to-r from-[#4073ff] to-purple-600 
    bg-clip-text text-transparent"
                >
                  CONTACT
                </h2>
                <div className="flex justify-center mt-5">
                  <hr className="border-b-3 w-[150px]" />
                </div>
                <form>
                  <div className="flex flex-col lg:flex-row items-center w-full mt-20">
                    <div className="space-y-3 text-center">
                      <input
                        className="border text-white p-3 rounded-md md:w-100 text-lg"
                        type="text"
                        placeholder="Full name"
                      />
                      <input
                        className="border text-white p-3 rounded-md md:w-100 text-lg"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mt-10">
                      <textarea
                        className="text-white p-3 border rounded-md w-75 md:w-100 text-lg"
                        placeholder="your message..."
                        rows={10}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      type="submit"
                      className="w-50 text-lg rounded-md text-white border-2 border-[#0043ff] hover:bg-[#0043ff] transition px-3 py-3 cursor-pointer"
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <hr />
        <Footer />
      </div>
    </ClickSpark>
  );
};

export default Home;
