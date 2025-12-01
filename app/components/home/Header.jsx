"use client";
import HamburgerMenuOverlay from "@/src/components/lightswind/hamburger-menu-overlay";
import { Home, Search, User, Settings } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const menuItems = [
    { label: "Home", icon: <Home size={20} />, href: "/" },
    { label: "Search", icon: <Search size={20} />, href: "/search" },
    {
      label: "Profile",
      icon: <User size={20} />,
      onClick: () => console.log("Profile"),
    },
    { label: "Settings", icon: <Settings size={20} />, href: "/settings" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 mt-5 md:flex md:justify-center md:items-center h-20 bg-transparent z-[9999] pointer-events-auto">
      <nav className="hidden md:flex items-center bg-white/12 backdrop-blur-sm text-white shadow-2xl ring-1 ring-black/10 px-5 py-3 relative rounded-2xl border border-white/30 transition-all duration-500">
        <ul className="flex space-x-6">
          <li className="rounded-xl py-2 px-4 hover:bg-[#0043ff] cursor-pointer transition">
            <Link
              activeClass="active-link"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="rounded-xl py-2 px-4 hover:bg-[#0043ff] cursor-pointer transition">
            <Link
              activeClass="active-link"
              to="aboutMe"
              spy={true}
              smooth={true}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className="rounded-xl py-2 px-4 hover:bg-[#0043ff] cursor-pointer transition">
            <Link
              activeClass="active-link"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex md:hidden z-[99999]">
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
