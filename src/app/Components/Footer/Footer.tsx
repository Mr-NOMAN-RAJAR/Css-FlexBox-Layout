import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-gray-950 text-center py-2">
      <h1 className="text-gray-200">Home Work Given By : Sir Ali Jawad </h1>
      <h2 className="text-gray-200">Slot Sunday_______ 2pm-to-5pm</h2>
      <h3 className="flex justify-center items-center gap-2 text-gray-200">
        Made By : <span className="font-samibold">NOMAN</span>
        <a href="https://www.linkedin.com/in/noman-rajar-5351bb2b4/">
          <CiLinkedin />
        </a>
        <a href="https://www.instagram.com/noman_rajar10/?__pwa=1">
          <AiOutlineInstagram size={20} />
        </a>
      </h3>
    </footer>
  );
}

export default Footer;
