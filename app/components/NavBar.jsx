"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Scroll from 'react-scroll/modules';

const navLinks = [
  {
    title: "About",
    path: "#about",
    id: "about",
  },
  {
    title: "Projects",
    path: "#projects",
    id: "projects",
  },
  {
    title: "Contact",
    path: "#contact",
    id: "contact",
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return(
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={'/'}
          className="text-lg md:text-5xl text-black font-semibold"
        >
          LOGO
        </Link>
        <div className=" mobile-menu block md:hidden">
          { 
            !navbarOpen ? (
              <button
                onClick={() =>  setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded text-slate-400 
                border-white hover:text-sky-300 hover:border-sky-300">
                  <Bars3Icon className="h-5 w-5"/>

              </button>
            ) : (
              <button
                onClick={() =>  setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded text-slate-400 
                border-white  hover:text-sky-300
                hover:border-sky-300">
                  <XMarkIcon className="h-5 w-5"/>
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index, id) => (
              <li key = {index}>
                <NavLink
                  href = {link.path}
                  title = {link.title} 
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar;