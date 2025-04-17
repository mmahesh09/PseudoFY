import React from "react";
import Image from "next/image"; // ✅ Updated

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left section */}
        <div className="space-y-4">
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
              className="text-blue-400 "
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
        </div>

        {/* Right section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <a href="/about" className="hover:text-blue-400 transition">
              About
            </a>
          </div>
          <div>
            <a href="/pseudofy" className="hover:text-blue-400 transition">
              PseudoFY
            </a>
          </div>
          <div>
            <a href="/feedback" className="hover:text-blue-400 transition">
              Feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
