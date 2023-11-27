"use client";

import Image from "next/image";
import Profile from "./Profile";
import { BsFillBellFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  return (
    <nav style={{ maxHeight: "68px", zIndex: "9999999" }} className="primary-gradient py-3 px-6 flex justify-between items-center sticky top-0 right-0 w-full">
      <Link href="/">
        <Image src="/assets/Logo.svg" height="10" width="160" alt="Xpenser-logo" className="cursor-pointer" />
      </Link>
      <div className="text-3xl font-bold text-white">Hi, Mohit Jeswani</div>
      <div className="flex gap-5">
        {dark ? (
          <span className="h-9 w-9 bg-gray-800 rounded-full cursor-pointer flex justify-center items-center" onClick={() => setDark(!dark)}>
            <IoMoon size={26} className="text-white" />
          </span>
        ) : (
          <span className="h-9 w-9 bg-white rounded-full cursor-pointer flex justify-center items-center" onClick={() => setDark(!dark)}>
            <IoMoon size={26} className="text-gray-800" />
          </span>
        )}
        <span className="h-9 w-9 bg-white rounded-full cursor-pointer flex justify-center items-center ">
          <BsFillBellFill size={22} className="text-gray-800" />
        </span>
        <Profile />
        {/* <span className="h-9 w-9 bg-white rounded-full cursor-pointer overflow-hidden flex justify-center items-center">
          <Image src="/assets/Luffy.jpg" height="100" width="100" alt="Profile" />
        </span> */}
      </div>
    </nav>
  );
}
