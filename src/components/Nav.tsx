"use client";
import { useState } from "react";

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsHovered(false);
  };

  return (
    <ul className="hidden xl:flex gap-2 px-3 nav-glass-bg py-3 justify-center items-center text-sm font-medium">
      <li
        className="relative cursor-pointer px-2 transition duration"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          className={`hover:text-[#7c3aed] ${
            isHovered ? "text-[#7c3aed]" : "text-[#281950]"
          }`}
        >
          Articles
        </span>
        {isDropdownOpen && (
          <div className="navdropdiv">
            <ul className="navdrop">
              <div className="navdrop-top size-4"></div>
              <li className="nav-drop-link">
                <span>Blog</span>
              </li>
              <li className="nav-drop-link">
                <span>Phoenix Files</span>
              </li>
              <li className="nav-drop-link">
                <span>Laravel Bytes</span>
              </li>
              <li className="nav-drop-link">
                <span>Ruby Dispatch</span>
              </li>
              <li className="nav-drop-link">
                <span>Django Beats</span>
              </li>
              <li className="nav-drop-link">
                <span>JavaScript Journal</span>
              </li>
            </ul>
          </div>
        )}
      </li>

      <li className="nav-link">
        <span>Security</span>
      </li>
      <li className="nav-link">
        <span>Infra Log</span>
      </li>
      <li className="nav-link">
        <span>Docs</span>
      </li>
      <li className="nav-link">
        <span>Community</span>
      </li>
      <li className="nav-link">
        <span>Status</span>
      </li>
      <li className="nav-link">
        <span>Pricing</span>
      </li>
    </ul>
  );
}
