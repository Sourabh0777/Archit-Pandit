"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(true);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`z-50 w-full backdrop-blur-md transition-all ${
        sticky
          ? "sticky top-0 bg-white/80 shadow-md dark:bg-black/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
       
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-wide.png"
              alt="Logo"
              width={140}
              height={30}
              className="dark:hidden"
            />
            <Image
              src="/logo-wide.png"
              alt="Logo"
              width={140}
              height={30}
              className="hidden dark:block"
            />
          </Link>

          
          <button
            onClick={navbarToggleHandler}
            className="z-50 block rounded-md p-2 lg:hidden"
          >
            <div
              className={`h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300 ${
                navbarOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <div
              className={`mt-1 h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`mt-1 h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300 ${
                navbarOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          
          <nav
            className={`absolute right-4 top-20 w-[260px] rounded-lg bg-white p-6 shadow-lg transition-all dark:bg-zinc-900 lg:static lg:top-auto lg:right-auto lg:block lg:w-auto lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
              {menuData.map((menuItem, index) => (
                <li key={index} className="relative group">
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className={`text-base font-medium transition duration-300 hover:text-primary dark:hover:text-white ${
                        pathname === menuItem.path
                          ? "text-primary dark:text-white"
                          : "text-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  ) : (
                    <>
                      <div
                        onClick={() => handleSubmenu(index)}
                        className="flex cursor-pointer items-center justify-between text-base font-medium text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                      >
                        {menuItem.title}
                        <svg
                          className="ml-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M6 8l4 4 4-4" />
                        </svg>
                      </div>
                      <div
                        className={`absolute top-10 left-0 z-40 w-48 rounded-md bg-white p-4 shadow-lg dark:bg-zinc-800 lg:group-hover:block ${
                          openIndex === index ? "block" : "hidden"
                        }`}
                      >
                        {menuItem.submenu?.map((submenu, idx) => (
                          <Link
                            key={idx}
                            href={submenu.path}
                            className="block px-2 py-2 text-sm text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-white"
                          >
                            {submenu.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

         
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/feedback"
              className="rounded-full px-5 py-2 text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >
              Feedback
            </Link>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
