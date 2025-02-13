'use client'

import { NAV_LINKS } from "../constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" width={150} height={24} alt="logo" />
      </Link>
      
      {/* Desktop Menu */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regularr-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login Button (Desktop Only) */}
      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile Menu Icon */}
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-0 bg-green-500 p-6 w-64 rounded lg:hidden">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regularr-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                onClick={() => setMenuOpen(false)} // Close the menu after selection
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="mt-6">
            <Button 
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
