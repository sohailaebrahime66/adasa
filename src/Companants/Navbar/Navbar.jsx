import React from "react";
import logo from "../../assets/image.png";
import { Link, NavLink } from "react-router-dom";

// import style from "./Navbar.css"
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
          <div className=" mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="Logo flex items-center gap-2 group">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                  <img src={logo} alt="Logo" className="w-full" />
                </div>
                <div className="logo-title">
                  <p className="text-white">عدسة</p>
                  <p className="text-orange-400/80">عالم التصوير الفوتوغرافي</p>
                </div>
              </div>
              <div className="links">
                <div className="hidden md:flex items-center">
                  <div className="flex items-center bg-[#161616] rounded-full p-1.5 border-2 border-[#262626]">
                    <NavLink
                      to="/"
                      className= "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                    >
                      الرئيسية
                    </NavLink>
                    <NavLink
                      to="/blog"
                      className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                    >
                      المدونة
                    </NavLink>
                    <NavLink
                      to="/about"
                      className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                    >
                      من نحن
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <button className="p-3  text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262660]">
                  <i className="fas fa-magnifying-glass"></i>
                </button>
                <Link
                  to="/blog"
                  className="px-5 py-2.5 rounded-full text-sm font-medium hover:transition hover:duration-300
                   hover:-translate-y-0.5 bg-linear-to-r from-orange-500 to-orange-600 text-white"
                >
                  ابدأ القراءة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
