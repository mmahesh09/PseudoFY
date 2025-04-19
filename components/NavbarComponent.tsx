"use client";

import React, { useState } from "react";
import Link from "next/link"; // ✅ Correct import for Next.js
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const NavbarComponent = () => {
  const navItems = [
    { name: "About", link: "/about" },
    { name: "PseudoFY", link: "/pseudofy" },
    { name: "Feedback", link: "/feedback" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="z-50 fixed top-0 left-0 w-full backdrop-blur-md">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="secondary">Linkedin</NavbarButton>
          <NavbarButton variant="primary">GitHub</NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}

          <div className="flex w-full flex-col gap-4 mt-4">
            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
              Linkedin
            </NavbarButton>
            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
              GitHub
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComponent;
