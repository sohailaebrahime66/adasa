import React from "react";
import Posts from '../Posts/Posts';
import { Link } from 'react-router-dom';




export default function Home() {

  


  
  return (
    <>
      <main className="grow pt-14">
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
          <div
            className="absolute inset-0
           bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)]
            bg-size-[60px_60px]"
          ></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob duration-[-2s]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div
                className="  px-4 py-2 text-sm  font-medium  text-orange-500 rounded-circle  bg-orange-500/10 border border-orange-500/30 rounded-full inline-flex items-center gap-2 mb-8 animate-fade-in
                before:w-1.5 before:h-1.5 before:bg-[#f97316] before:border-4 before:rounded-4xl before:animate-pulse before:duration-200 before:ease-initial "
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-neutral-300">
                  مرحباً بك في عدسة
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6  ">
                استكشف{"  "}
                <span className="bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  فن
                </span>
                <br></br>
                التصوير الفوتوغرافي
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto ">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Link
                  to="/blog"
                  className=" r px-8 py-4 font-semibold text-white  transition-all duration-300  rounded-full
                  bg-linear-to-br from-orange-500 to-orange-600 inline-flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>استكشف المقالات</span>
                  <i className=" fas fa-arrow-right w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"></i>
                </Link>
                <Link
                  to="/about"
                  className=" inline-flex items-center justify-center px-8 py-4  font-semibold  text-white
                    transition-all duration-300 bg-transparent border border-neutral-700 rounded-full  gap-2 cursor-pointer
                    hover:bg-[#f973161a] hover:border-[#f97316] hover:text-[#f97316]"
                >
                  <i className="fas fa-circle-exclamation"></i>
                  <span>اعرف المزيد</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto" >
                <div className="bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300 delay-0 rounded-3xl">
                  <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                  <p className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">+50</p>
                  <p className="text-neutral-500 text-sm">مقالة</p>
                </div>
                <div className="bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300 delay-0 rounded-3xl">
                  <i className="fas fa-users text-2xl text-orange-500 mb-1"></i>
                  <p className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">+10ألف</p>
                  <p className="text-neutral-500 text-sm">قارئ</p>
                </div>
                <div className="bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300 delay-0 rounded-3xl">
                  <i className="fas fa-folder-open text-2xl text-orange-500 mb-1"></i>
                  <p className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">4</p>
                  <p className="text-neutral-500 text-sm">تصنيفات</p>
                </div>
                <div className="bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300 delay-0 rounded-3xl">
                  <i className="fas fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                  <p className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">6</p>
                  <p className="text-neutral-500 text-sm">كاتب</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Posts />
      </main>
    </>
  );
}
