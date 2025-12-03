"use client";
import HamburgerMenuOverlay from "@/src/components/lightswind/hamburger-menu-overlay";
import {
  Home,
  Search,
  User,
  Settings,
  Briefcase,
  Wrench,
  Hammer,
  Code,
  CodeXml,
} from "lucide-react";
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const menuItems = [
    { label: "Home", icon: <Home size={20} />, href: "#home" },
    { label: "About Me", icon: <Search size={20} />, href: "#aboutMe" },
    { label: "Portfolio", icon: <User size={20} />, href: "#portfolio" },
    { label: "Skills", icon: <CodeXml size={20} />, href: "#skills" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 mt-5 md:flex md:justify-center md:items-center h-20 bg-transparent z-[9999] pointer-events-auto">
      <nav className="hidden md:flex items-center bg-white/12 backdrop-blur-sm text-white shadow-2xl ring-1 ring-black/10 px-5 py-3 relative rounded-2xl border border-white/30 transition-all duration-500">
        <ul className="flex space-x-6">
          <li className="flex space-x-1 rounded-xl py-2 px-4 hover:bg-[#0043ff] cursor-pointer transition">
            <Link
              activeClass="active-link"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div className="flex gap-x-1">
                <>
                  <Home />
                </>
                <>Home</>
              </div>
            </Link>
          </li>
          <li className="flex space-x-1 rounded-xl py-2 px-4 hover:bg-[#0043ff] cursor-pointer transition">
            <Link
              activeClass="active-link"
              to="aboutMe"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div className="flex gap-x-1">
                <>
                  <User />
                </>
                <>About Me</>
              </div>
            </Link>
          </li>
          <li className="flex space-x-1 rounded-xl py-2 px-4 hover:bg-[#0043ff] cursor-pointer transition">
            <Link
              activeClass="active-link"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div className="flex gap-x-1">
                <>
                  <Briefcase />
                </>
                <>Portfolio</>
              </div>
            </Link>
          </li>
          <li className="flex space-x-1 rounded-xl py-2 px-4 hover:bg-[#0043ff] cursor-pointer transition">
            <Link
              activeClass="active-link"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div className="flex gap-x-1">
                <>
                  <CodeXml />
                </>
                <>Skills</>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex md:hidden">
        <HamburgerMenuOverlay
          items={menuItems}
          overlayBackground="#0043ff"
          fontSize="lg"
          enableBlur={true}
          className="w-full h-full"
          menuAlignment="center"
          animationDuration={1}
        />
      </div>
    </header>
  );
};

export default Header;
