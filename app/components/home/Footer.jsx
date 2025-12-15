import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#000715] flex flex-col space-y-7 md:flex-row md:space-y-0 items-center justify-between text-white py-5 px-15">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-start">
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
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </div>
        </div>
        <div className="text-[#0043ff] font-bold">Shayan Masourians</div>
      </div>
      <div>
        © 2025 - Designed by{" "}
        <a
          href="/"
          className="font-bold 
    bg-gradient-to-r from-[#4073ff] to-purple-600 
    bg-clip-text text-transparent font-bold"
        >
          SHAYAN
        </a>
      </div>
      <div className="text-white flex space-x-3">
        <div>
          <Link
            href={"/instagram"}
            className="text-xl hover:text-[#1453ff] transition"
          >
            <FaInstagram className="fill-current" />
          </Link>
        </div>
        <div>
          <Link
            href={"/telegram"}
            className="text-xl hover:text-[#1453ff] transition
"
          >
            <FaTelegram />
          </Link>
        </div>
        <div>
          <Link
            href={"/telegram"}
            className="text-xl hover:text-[#1453ff] transition"
          >
            <FaWhatsapp />
          </Link>
        </div>
        <div>
          <Link
            href={"/telegram"}
            className="text-xl hover:text-[#1453ff] transition"
          >
            <FaLinkedin />
          </Link>
        </div>
        <div>
          <Link
            href={"/telegram"}
            className="text-xl hover:text-[#2660ff] transition"
          >
            <FaGithub />
          </Link>
        </div>
      </div>{" "}
    </footer>
  );
};

export default Footer;
