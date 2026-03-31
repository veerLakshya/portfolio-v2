import React from "react";
import { socials } from "@/constants/socials";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 gap-10 pt-12 sm:grid-cols-2 lg:pt-0">
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase text-white/40">
          Current Location
        </p>
        <p className="text-base">Bangalore, India</p>
        <div className="mt-1 text-[13px] text-white/40">UTC+5:30</div>
      </div>

      <div>
        {socials.map((social) => (
          <Link
            key={social.name}
            target="_blank"
            rel="noopener noreferrer"
            href={social.href}
            className="mb-3 block text-2xl text-white/70 transition-all duration-300 hover:translate-x-2 hover:text-[#d4b895]"
          >
            {social.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
