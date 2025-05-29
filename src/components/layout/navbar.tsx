"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-around h-20 items-center bg-foreground text-background sticky top-0 z-50">
      <div className="">Logo</div>
      <div className=" flex gap-10">
        <Link
          href="/"
          className={`
            ${pathname === "/" ? "underline text-red-500" : ""}`}
        >
          <div>Home</div>
        </Link>
        <Link
          href="/milestone"
          className={`${
            pathname === "/milestone" ? "underline text-red-500" : ""
          }`}
        >
          <div>milestone</div>
        </Link>
        <Link
          href="/milestone-test"
          className={`${
            pathname === "/milestone-test" ? "underline text-red-500" : ""
          }`}
        >
          <div>milestone-test</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
