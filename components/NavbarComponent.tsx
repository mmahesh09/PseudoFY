"use client";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    { name: "Updates", link: "/updates" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkedinURL = "https://www.linkedin.com/in/maheshbabu23";
  const githubURL = "https://github.com/mmahesh09/PseudoFY";

  return (
    <Navbar className="z-50 fixed top-0 left-0 w-full backdrop-blur-md">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <NavbarButton variant="secondary">LinkedIn</NavbarButton>
          </a>
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <NavbarButton variant="primary">GitHub</NavbarButton>
          </a>
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
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}

          <div className="flex w-full flex-col gap-4 mt-4">
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                LinkedIn
              </NavbarButton>
            </a>
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                GitHub
              </NavbarButton>
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComponent;