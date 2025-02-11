"use client";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    "Blog",
    "Phoenix Files",
    "Laravel Bytes",
    "JavaScript Journal",
    "Security",
    "Infra Log",
    "Docs",
    "Community",
    "Status",
    "Pricing",
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={`xl:hidden z-10 ${isOpen && "bg-white rounded-full"} p-1`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      <section
        className={`${
          isOpen ? "backdrop-blur-sm" : "backdrop-blur-0"
        } h-screen flex flex-col gap-4 absolute inset-0 z-0`}
      >
        <nav
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-[100%]"
          } md:max-w-96 w-full h-full p-4 lg:p-10 lg:pt-28 pt-28 flex flex-col transition-transform duration-500 gap-4 bg-white`}
        >
          {nav.map((link) => (
            <a key={`${link.toLowerCase()}`} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
          <button className="lg:hidden text-[#7c3aed] bg-white hover:bg-[#7c3aed]/60 transition-colors shadow py-3 w-36 rounded-lg border border-[#7c3aed]/20">
            Sign In
          </button>
          <button className="lg:hidden bg-[#7c3aed] text-white py-3 w-36 rounded-lg">
            Get Started
          </button>
        </nav>
      </section>
    </>
  );
}
