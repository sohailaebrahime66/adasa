import React, { useState } from "react";
import DisplayPosts from "../DisplayPosts/DisplayPosts";
import { posts } from "../AllPosts/AllPosts";

export default function Blog() {
  let [active, setActive] = useState("جميع المقالات");
  let [search, setSearch] = useState("");

  let cat = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  const resetFilters = () => {
    setActive("جميع المقالات");
    setSearch("");
  };

  let filteredPosts = posts.filter((post) => {
    let matchesCategory =
      active === "جميع المقالات" || post.category === active;

    let matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <main className="grow pt-20">
        <div className="min-h-screen bg-[#0a0a0a]">
          <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span
                className="
              px-4 py-2 text-sm  font-medium  text-orange-500 rounded-circle  bg-orange-500/10 border border-orange-500/30 rounded-full  mb-8 animate-fade-in
                before:w-1.5 before:h-1.5 before:bg-[#f97316] before:border-4 before:rounded-4xl before:animate-pulse before:duration-200 before:ease-initial inline-flex items-center gap-2 "
              >
                <i className="w-4 h-4 fas fa-newspaper"></i>
                مدونتنا
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                استكشف{" "}
                <span className="bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  مقالاتنا
                </span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                {" "}
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </div>
          <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative w-full md:w-80">
                  <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    id="searchInput"
                    className="w-full px-5 py-3 pr-12 placeholder:text-neutral-400 transition-all duration-300 ease-in-out outline-none bg-[#161616] border border-[#262626] text-white rounded-xl focus:border-orange-500/50 hover:border-orange-500/30"
                    placeholder="ابحث في المقالات..."
                  />
                  <i className="fas fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 "></i>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {cat.map((choseButton) => (
                    <button
                      key={choseButton}
                      onClick={() => setActive(choseButton)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border
                      ${
                        active === choseButton
                          ? "bg-linear-to-r from-orange-500 to-orange-600 text-white border-transparent"
                          : "bg-[#161616] text-neutral-400 border-[#262626] hover:border-orange-500/30 hover:text-white"
                      }`}
                    >
                      {choseButton}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DisplayPosts posts={filteredPosts} onResetFilters={resetFilters} />
        </div>
      </main>
    </>
  );
}
