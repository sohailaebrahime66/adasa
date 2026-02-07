import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DisplayPosts({ posts, onResetFilters }) {
  let [currentPage, setCurrentPage] = useState(1);
  let postsInPage = 6;
  let indexOfLastPost = currentPage * postsInPage;
  let indexOfFirstPost = indexOfLastPost - postsInPage;
  let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  let totalPages = Math.ceil(posts.length / postsInPage);

  let goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  let goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  let goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let [view, setView] = useState("grid");

  let buttons = [];

  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => goToPage(i)}
        className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300
        bg-[#161616] text-neutral-400 border border-[#262626]
        hover:border-orange-500/50 hover:text-white
        ${currentPage === i ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : ""}`}
      >
        {i}
      </button>,
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض
            <span className="font-bold text-white"> {posts.length} </span>
            مقالات
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded-lg transition-all duration-300
                ${view === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
              >
                <i className="w-5 h-5 fas fa-border-all"></i>
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded-lg transition-all duration-300
                  ${view === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
              >
                <i className="w-5 h-5 fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
        {currentPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="w-12 h-12 text-5xl text-neutral-500 fas fa-face-frown"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              لا توجد مقالات
            </h3>
            <p className="text-neutral-400 mb-6">
              حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
            </p>
            <button
              onClick={() => {
                onResetFilters();
                setCurrentPage(1);
              }}
              className="px-5 py-2.5 rounded-full text-sm font-medium hover:transition hover:duration-300
                   hover:-translate-y-0.5 bg-linear-to-r from-orange-500 to-orange-600 text-white inline-flex items-center gap-2"
            >
              <i className="fas fa-arrows-rotate w-5 h-5"></i>
              إعادة تعيين الفلاتر
            </button>
          </div>
        ) : (
          <div
            className={`gap-8 ${
              view === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3"
                : "flex flex-wrap"
            }`}
          >
            {currentPosts.map((onepost) => (
              <article
                key={onepost.id}
                className="bg-[#161616] border border-[#262626] rounded-3xl overflow-hidden 
                transition-all duration-500 ease-in-out 
                hover:border-orange-500/30 hover:shadow-lg delay-0 group hover:-translate-y-4 "
              >
                <Link
                  to={`/blog/${onepost.slug}`}
                  className={`group block ${
                    view === "list" ? "md:flex md:items-stretch gap-6" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      view === "list" ? "w-full h-52 md:h-auto" : "h-52"
                    }`}
                  >
                    <img
                      src={onepost.image}
                      alt={onepost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                        {onepost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <i className="fas fa-clock w-4 h-4"></i>
                        {onepost.readTime}
                      </span>
                      <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      <span> {onepost.date} </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                      {onepost.title}
                    </h3>

                    <p className="text-neutral-400 mb-5 line-clamp-2 text-sm ">
                      {onepost.content}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                      <div className="flex items-center gap-3">
                        <img
                          src={onepost.author.avatar}
                          alt={onepost.author.name}
                          className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        />
                        <div>
                          <p className="text-sm font-medium text-white">
                            {onepost.author.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {onepost.author.role}
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                        <i className="fas fa-angle-right w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
          >
            <i className="fas fa-angle-right w-5 h-5 "></i>
          </button>

          <div className="flex items-center gap-1">
            {/* {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className=
                {`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white ${currentPage === i + 1 ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : ""}`}
              >
                {i + 1}
              </button>
            ))} */}
            {buttons}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
          >
            <i className="fas fa-angle-left w-5 h-5 "></i>
          </button>
        </div>
        <p className="text-center text-neutral-500 mt-4 text-sm">
          صفحة {currentPage} من {totalPages}
        </p>
      </div>
    </>
  );
}
