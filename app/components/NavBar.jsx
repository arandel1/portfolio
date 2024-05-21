import Link from "next/link";
import React from "react";

const NavBar = () => {
  return(
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={'/'} className="text-5xl text-black font-semibold">
          LOGO
        </Link>
      <div className='menu hidden md:block md:w-auto' id="navbar"></div>
        <ul>
          <li><Link href={"#about"} className="block py-2 pl-3 pr-3 text-black sm:text-xl rounded md:p-0 hover:text-sky-700">About</Link></li>
        </ul>
    </div></nav>
  )
}

export default NavBar