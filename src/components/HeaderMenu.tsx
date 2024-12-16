"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    "Blog",
    "Phoenix Files",
    "Laravel Bytes",
    "Ruby Dispatch",
    "Django Beats",
    "JavaScript Journal",
    "Security",
    "Infra Log",
    "Docs",
    "Community",
    "Status",
    "Pricing",
  ];
  return (
    <>
      <button
        className="xl:hidden z-10"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      <nav className="h-screen p-4 pt-28 flex flex-col gap-4 absolute inset-0 bg-white z-0">
        {nav.map((link) => (
          <a key={`${link.toLowerCase()}`} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
    </>
  );
}
