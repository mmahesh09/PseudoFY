import React from "react";
import Image from "next/image";
import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Branding + Info */}
        <div className="space-y-4 max-w-sm">
          <div className="flex items-center space-x-3">
            <Image
              src="/Py.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <h2 className="text-2xl font-bold">PseudoFY</h2>
          </div>
          <p className="text-sm text-gray-400">
            A product by{" "}
            <a
              href="https://www.linkedin.com/in/maheshbabu23/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              Mahesh Babu
            </a>
          </p>
          <p className="text-sm text-gray-400">
            Building in public at{" "}
            <a
              href="https://github.com/mmahesh09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              @mmahesh09
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-4">
            <a
              href="https://twitter.com/maheshbabu23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/mmahesh09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/maheshbabu23/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Flat Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-sm">
          <a href="/about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="/pseudofy" className="hover:text-blue-400 transition">
            PseudoFY
          </a>
          <a href="/blogs" className="hover:text-blue-400 transition">
            Resources
          </a>
          <a href="/updates" className="hover:text-blue-400 transition">
            Updates
          </a>
          <a href="mailto:teampseudofy@gmail.com" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
