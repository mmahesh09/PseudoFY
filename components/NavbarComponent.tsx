"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
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
    { name: "Blog", link: "/blogs" },
    { name: "Updates", link: "/updates" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="z-50 fixed top-0 left-0 w-full backdrop-blur-md">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        
        <div className="flex items-center gap-4">
          {/* Auth buttons for desktop */}
          <SignedOut>
            <SignInButton>
              <NavbarButton variant="secondary">Sign In</NavbarButton>
            </SignInButton>
            <SignUpButton>
              <NavbarButton variant="primary">Sign Up</NavbarButton>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
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

          {/* Auth buttons for mobile */}
          <div className="flex w-full flex-col gap-4 mt-4">
            <SignedOut>
              <SignInButton mode="modal">
                <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="secondary" className="w-full">
                  Sign In
                </NavbarButton>
              </SignInButton>
              <SignUpButton mode="modal">
                <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                  Sign Up
                </NavbarButton>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComponent;
