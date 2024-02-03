"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ModeToggle } from "./theme-toggle";

const Items = {
  "/": {
    name: "home",
    x: 0,
    y: 0,
    w: "64px",
  },
  "/about": {
    name: "about",
    x: 63,
    y: 35,
    w: "65px",
  },
  "/experience": {
    name: "experience",
    x: 127,
    y: 69,
    w: "110px",
  },
  "/projects": {
    name: "projects",
    x: 127 + 107,
    y: 69 + 34,
    w: "90px",
  },
  "/blog": {
    name: "blog",
    x: 217 + 100,
    y: 101 + 34,
    w: "60px",
  },
} as Record<string, { name: string; x: number; y: number; w: string }>;

interface sideBar {
  className: string;
}

export default function Sidebar({ className }: sideBar) {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 z-50">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-4 space-y-10 flex flex-row md:flex-row items-start ">
          <Image
            alt="Logo"
            width={54}
            height={54}
            className="rounded-full"
            src="/img/photo.jpg"
          />

          <ModeToggle />
        </div>
        <nav
          className="relative flex flex-row items-start px-4 pb-0 overflow-hidden md:flex-col md:px-0 fade md:overflow-auto scroll-pr-6 md:relative "
          id="nav"
        >
          <div className="flex flex-row pr-10 mt-2 mb-2 space-x-0 md:flex-col md:mt-0">
            {Items[pathname] ? (
              <>
                <div className="hidden md:block">
                  <motion.div
                    className="absolute bg-neutral-800  h-[34px] rounded-md z-[-1]"
                    layoutId="test2"
                    initial={{ opacity: 0, y: Items[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: Items[pathname].y,
                      width: Items[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                <div className="block md:hidden">
                  <motion.div
                    className="absolute bg-neutral-800  h-[34px] rounded-md z-[-1]"
                    layoutId="test"
                    initial={{ opacity: 0, x: Items[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: Items[pathname].x,
                      width: Items[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}
            {Object.entries(Items).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    "transition-all  text-black  py-[5px] px-[10px]",
                    {
                      "text-neutral-500": !isActive,
                      "font-bold text-white": isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
