import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className=" relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link to="#" className="flex items-center gap-3 mb-6 group">
                <div className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-xl">ع</span>
                </div>
                <span className="text-xl font-bold text-white">عدسة</span>
              </Link>
              <p className="text-sm text-neutral-500 mb-6 ">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="flex gap-2">
                <Link
                  to="#"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500
                   hover:text-white transition-all duration-300 hover:scale-110"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  to="#"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500
                   hover:text-white transition-all duration-300 hover:scale-110"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </Link>
                <Link
                  to="#"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500
                   hover:text-white transition-all duration-300 hover:scale-110"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link
                  to="#"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500
                   hover:text-white transition-all duration-300 hover:scale-110"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                استكشف
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-neutral-500 hover:text-orange-500
                     transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i
                      className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300
                     text-orange-500 rotate-180 fas fa-angle-right"
                    ></i>
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-neutral-500 hover:text-orange-500
                     transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i
                      className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300
                     text-orange-500 rotate-180 fas fa-angle-right"
                    ></i>
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-neutral-500 hover:text-orange-500
                     transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i
                      className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300
                     text-orange-500 rotate-180 fas fa-angle-right"
                    ></i>
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                التصنيفات
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="#"
                    className="text-sm text-neutral-500 hover:text-orange-500
                     transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i
                      className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300
                     text-orange-500 rotate-180 fas fa-angle-right"
                    ></i>
                    إضاءة
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-neutral-500 hover:text-orange-500
                     transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i
                      className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300
                     text-orange-500 rotate-180 fas fa-angle-right"
                    ></i>
                    بورتريه
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-neutral-500 hover:text-orange-500
                     transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i
                      className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300
                     text-orange-500 rotate-180 fas fa-angle-right"
                    ></i>
                    مناظر طبيعية
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-neutral-500 hover:text-orange-500
                     transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i
                      className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300
                     text-orange-500 rotate-180 fas fa-angle-right"
                    ></i>
                    تقنيات
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                ابقى على اطلاع
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات
              </p>
              <form action="" className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1
                     focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center
                    cursor-pointer
                    px-8 py-4
                    font-semibold
                    text-white
                    transition-all duration-300
                    rounded-full
                    bg-linear-to-br from-orange-500 to-orange-600   text-sm"
                >
                  اشترك
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
