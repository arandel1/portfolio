"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  }
]

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

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
            !navBarOpen ? (
              <button className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-sky-500 hover:border-sky-500">
                <Bars3Icon className="h-5 w-5"/>
              </button>
            ) : (
              <button className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-sky-500 hover:border-sky-500">
                <XmarkIcon className="h-5 w-5"/>
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key = {index}>
                <NavLink href = {link.path} title = {link.title}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;