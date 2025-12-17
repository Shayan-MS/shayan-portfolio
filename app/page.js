"use client";
import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

import {
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
import ClickSpark from "@/components/ClickSpark";

import { InteractiveCard } from "@/src/components/lightswind/interactive-card";
import { Check, CodeXml, Layers, Shapes } from "lucide-react";
import Footer from "./components/home/Footer";
import { CountUp } from "@/src/components/lightswind/count-up";
import { StickyScroll } from "@/src/components/ui/sticky-scroll-reveal";
import { InfiniteMovingCards } from "@/src/components/ui/infinite-moving-cards";

const Home = () => {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
      href: "/portfolio1",
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
      href: "/portfolio2",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
      href: "/portfolio3",
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
      href: "/portfolio4",
    },
  ];
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
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
              </div>
              <div className="flex flex-col">
                <h2
                  className="text-5xl lg:text-6xl font-bold text-center my-10 lg:my-0 
    bg-gradient-to-r from-[#4073ff] to-purple-600 
    bg-clip-text text-transparent"
                >
                  ABOUT ME
                  <div className="flex justify-center mt-5">
                    <hr className="border-1 w-[70px]" />
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
            className="flex flex-col items-center justify-center h-[100vh] bg-[#101010] text-white"
            id="portfolio"
          >
            <div className="w-full">
              <StickyScroll content={content} />
            </div>
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
                    <hr className="border-1 w-[70px]" />
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
          {/* USER REVIEW */}
          <section className="message-bg lg:h-[40%]">
            {/* INFINITE MOVING CARDS */}
            <div className="pt-40">
              <h2
                className="text-5xl lg:text-6xl font-bold text-center
    bg-gradient-to-r from-[#4073ff] to-purple-600 
    bg-clip-text text-transparent"
              >
                IN YOUR WORDS
              </h2>
              <div className="flex justify-center mt-5">
                <hr className="border-1 w-[70px]" />
              </div>
            </div>
            <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
            {/* CONTACT */}
            <div
              id="sendMessage"
              className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center xl:mx-32 2xl:mx-56 h-full pt-8 pb-40"
            >
              <div className="flex flex-col items-center w-full">
                <h2
                  className="text-5xl lg:text-6xl font-bold text-center my-3 sm:my-10 lg:my-0 
    bg-gradient-to-r from-[#4073ff] to-purple-600 
    bg-clip-text text-transparent"
                >
                  CONTACT
                </h2>
                <div className="flex justify-center sm:mt-5">
                  <hr className="border w-[70px]" />
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
