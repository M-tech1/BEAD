"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Program", href: "#program" },
    { name: "Partners & Sponsors", href: "#sponsorship" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
    // { name: "News", href: "/news" },
  ];

  return (
    <nav className="fixed text-white top-0 left-0 w-full z-50  backdrop-blur-md border-b border-gray-800 mx-auto">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex justify-between items-center h-16 mx-auto">
          <div className="flex items-center md:ml-40 ">
            <Link href="#" className="flex items-center gap-2">
              <Image src={logo} alt="logo" className="w-8 h-8" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-green-400 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfrDiJvnUeLy-G3jSoQ1c_fL2on-E5OGK-pgkkrGkgUIsn5iw/viewform?usp=publish-editor"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              target="_"
            >
              School Registration/Enrollment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-3 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-200 hover:text-green-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfrDiJvnUeLy-G3jSoQ1c_fL2on-E5OGK-pgkkrGkgUIsn5iw/viewform?usp=publish-editor"
              className="block text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              School Registration/Enrollment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
