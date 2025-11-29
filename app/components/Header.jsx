"use client";
import HamburgerMenuOverlay from "@/src/components/lightswind/hamburger-menu-overlay";
import { Home, Search, User, Settings } from "lucide-react";
import React, { useEffect, useState } from "react";

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
  <HamburgerMenuOverlay items={menuItems} />;

  return (
    <header className="hidden md:fixed inset-x-0 top-0 mt-5 md:flex md:justify-center md:items-center h-20 bg-transparent z-[9999] pointer-events-auto">
      <nav
        className="
            flex items-center bg-white/12 backdrop-blur-sm text-white shadow-2xl ring-1 ring-black/10
                px-5 py-3 relative rounded-2xl border border-white/30 transition-all duration-500"
      >
        <ul className="flex space-x-6">
          <li className="rounded-xl py-2 px-4 hover:bg-[#0043ff]  transition">
            <a href="/">Home</a>
          </li>
          <li className="rounded-xl py-2 px-4 hover:bg-[#0043ff]  transition">
            <a href="#aboutMe">About me</a>
          </li>
          <li className="rounded-xl py-2 px-4 hover:bg-[#0043ff]  transition">
            <a href="portfolio">Portfolio</a>
          </li>
          <li className="rounded-xl py-2 px-4 hover:bg-[#0043ff]  transition">
            <a href="message">Message</a>
          </li>
        </ul>
      </nav>
      <div className="flex md:hidden">
        <HamburgerMenuOverlay
          items={menuItems}
          overlayBackground="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          fontSize="xl"
          enableBlur={true}
          menuAlignment="center"
          animationDuration={2}
        />
        <HamburgerMenuOverlay
          items={menuItems}
          buttonTop="30px"
          buttonLeft="30px"
          buttonColor="#22c55e"
          overlayBackground="#22c55e"
          onOpen={() => console.log("Menu opened")}
          onClose={() => console.log("Menu closed")}
        />
      </div>
    </header>
  );
};

export default Header;
