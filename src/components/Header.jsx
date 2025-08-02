// src/components/Header.jsx
import React from "react";
import Logo from "../assets/header_logo.svg";
import UserDropdown from "./UserDropdown";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="w-full bg-white border border-[#DEDEDE] py-2 md:pt-5 md:pb-6 px-[6px] md:px-[30px] lg:px-[98px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center text-[#1E2A2E]">
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="ZuzuCode Logo"
              className="h-[20px] w-[90px] md:h-[37px] md:w-[168px]"
              loading="lazy"
            />
          </a>

          <nav
            role="navigation"
            aria-label="Main navigation"
            className="block text-sm md:hidden font-poppins font-medium text-[11px] ml-[15px]"
          >
            <UserDropdown userName="Chander" />
          </nav>
        </div>
        <div className="flex md:hidden items-center">
          <CiSearch aria-label="Search" className="mr-[13px]" />
          <a
            href="/login"
            className="text-base font-poppins font-medium text-[11px]"
          >
            Login
          </a>
        </div>

        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden md:flex justify-center align-center font-poppins font-medium text-base text-[#1E2A2E]"
        >
          <a
            href="/my-requests"
            className="border-b-3 border-primary h-[26px] pb-2 mr-2"
          >
            My requests
          </a>
          <UserDropdown userName="Chander" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
