"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#101010", "#202020", "#303030", "#404040"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col md:flex-row h-[30rem] md:justify-between md:space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="flex flex-col mt-20">
        <div>
          <h2
            className="text-5xl lg:text-6xl font-bold text-center my-10 lg:my-0 
    bg-gradient-to-r from-[#4073ff] to-purple-600 
    bg-clip-text text-transparent"
          >
            PORTFOLIO
          </h2>
        </div>
        <div className="text-white w-[170px] mt-7">
          <Link
            href="/portfolio"
            className="px-4 py-3 text-nowrap md:px-6 md:py-4 flex items-center border-2 cursor-pointer hover:bg-[#0043ff] transition text-md md:text-lg xl:text-xl font-bold border-[#0043ff] rounded-lg text-white"
          >
            All Portfolio
          </Link>
        </div>
      </div>
      <div className="div relative flex items-start">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <a href={item.href} key={index}>
              <div
                key={item.title + index}
                className="my-20 border border-gray-500 hover:border-gray-200 py-5 px-10 lg:px-15 lg:py-7 rounded-md transform-scale"
              >
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg mt-10 max-w-sm text-slate-300"
                >
                  {item.description}
                </motion.p>
                {/* <a
                  href={item.href}
                  className="px-4 py-2 w-30 text-nowrap mt-3 mb-0 flex items-center border-2 cursor-pointer hover:bg-[#0043ff] transition font-bold border-[#0043ff] rounded-lg text-white"
                >
                  View Page
                </a> */}
              </div>
            </a>
          ))}
          <div className="h-20" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
