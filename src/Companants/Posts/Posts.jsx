import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { posts } from "../AllPosts/AllPosts";
export default function Posts() {
  // console.log(posts);
  const [posts, setposts] = useState([
    {
      id: 1,
      slug: "mastering-golden-hour-photography",
      title: "إتقان تصوير الساعة الذهبية: دليل شامل",
      excerpt:
        "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
      content:
        "الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.\n\n## لماذا الساعة الذهبية؟\n\nالضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.\n\n## التحضير المسبق\n\nخطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.\n\n## إعدادات الكاميرا\n\nاستخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.\n\n## التكوين الفني\n\nضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.\n\n## الخلاصة\n\nالساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.",
      category: "إضاءة",
      author: {
        name: "سالم أحمد",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "مصور محترف",
      },
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
      date: "2026-01-15",
      readTime: "8 دقائق للقراءة",
      featured: true,
      tags: ["إضاءة", "الساعة الذهبية", "تصوير خارجي"],
    },
    {
      id: 2,
      slug: "portrait-photography-secrets",
      title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
      excerpt:
        "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
      content:
        "تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.\n\n## التواصل مع الموضوع\n\nقبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.\n\n## اختيار العدسة المناسبة\n\nعدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.\n\n## الإضاءة الطبيعية\n\nالنافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.\n\n## التركيز على العيون\n\nالعيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.\n\n## الخلفية والتكوين\n\nاختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.\n\n## الخلاصة\n\nالبورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.",
      category: "بورتريه",
      author: {
        name: "محمد علي",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "مصور بورتريه",
      },
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      date: "2026-01-12",
      readTime: "6 دقائق للقراءة",
      featured: true,
      tags: ["بورتريه", "تصوير أشخاص", "إضاءة طبيعية"],
    },
    {
      id: 3,
      slug: "landscape-photography-guide",
      title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
      excerpt:
        "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
      content:
        "تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.\n\n## المعدات الأساسية\n\nحامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.\n\n## توقيت التصوير\n\nالساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.\n\n## التكوين الفني\n\nابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.\n\n## إعدادات الكاميرا\n\nفتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.\n\n## المعالجة اللاحقة\n\nصور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.\n\n## الخلاصة\n\nتصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.",
      category: "مناظر طبيعية",
      author: {
        name: "إبراهيم حسن",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        role: "مصور طبيعة",
      },
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      date: "2026-01-10",
      readTime: "10 دقائق للقراءة",
      featured: true,
      tags: ["مناظر طبيعية", "تصوير خارجي", "طبيعة"],
    },
  ]);

  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-l from-orange-500/5 to-transparent pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-sm font-medium
               text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full"
              >
                مميز
              </span>
              <h2 className="text-6xl text-white">مقالات مختارة</h2>
              <p className="mt-4 text-lg  text-gray-400 max-w-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600
             text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              عرض الكل
              <i className="fas fa-angle-right w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180"></i>
            </Link>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626]
               hover:border-orange-500/30 transition-all duration-500"
              >
                <Link to="#">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-72 md:h-100 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                          <i className="w-3.5 h-3.5 fas fa-star"></i>
                          مميز
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <i className="fas fa-clock w-4 h-4"></i>
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 ">
                        {post.title}
                      </h2>
                      <p className="text-neutral-400 mb-6 ">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                          />
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {post.date}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          اقرأ المقال
                          <i className="fas fa-arrow-right w-5 h-5 rotate-180"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111111] relative  border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium  text-orange-500
             bg-orange-500/10 border border-orange-500/30 rounded-full
             before:w-1.5 before:h-1.5 before:bg-[#f97316] before:border-4 before:rounded-4xl before:animate-pulse before:duration-200 before:ease-initial"
            >
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              التصنيفات
            </span>
            <h2 className="text-6xl text-white">استكشف حسب الموضوع</h2>
            <p className="text-lg text-neutral-400 mt-4 max-w-lg mx-auto ">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link
              to="#"
              className="group relative block p-6 rounded-2xl bg-[#161616] border
             border-[#262626] overflow-hidden
              hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 delay-0"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div
                  className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300
                 border border-orange-500/20 group-hover:border-transparent"
                >
                  <i className="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  إضاءة
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  3 مقالة
                </p>
                <div
                  className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626]
                 flex items-center justify-center opacity-0 group-hover:opacity-100
                  group-hover:bg-white/20 transition-all duration-300"
                >
                  <i className="w-4 h-4 text-white rotate-180 fas fa-angle-right"></i>
                </div>
              </div>
            </Link>

            <Link
              to="#"
              className="group relative block p-6 rounded-2xl bg-[#161616] border
             border-[#262626] overflow-hidden
              hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 delay-0"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div
                  className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300
                 border border-orange-500/20 group-hover:border-transparent"
                >
                  <i className="fas fa-user text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  بورتريه
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  4 مقالة
                </p>
                <div
                  className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626]
                 flex items-center justify-center opacity-0 group-hover:opacity-100
                  group-hover:bg-white/20 transition-all duration-300"
                >
                  <i className="w-4 h-4 text-white rotate-180 fas fa-angle-right"></i>
                </div>
              </div>
            </Link>

            <Link
              to="#"
              className="group relative block p-6 rounded-2xl bg-[#161616] border
             border-[#262626] overflow-hidden
              hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 delay-0"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div
                  className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300
                 border border-orange-500/20 group-hover:border-transparent"
                >
                  <i className="fas fa-mountain-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  مناظر طبيعية
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  2 مقالة
                </p>
                <div
                  className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626]
                 flex items-center justify-center opacity-0 group-hover:opacity-100
                  group-hover:bg-white/20 transition-all duration-300"
                >
                  <i className="w-4 h-4 text-white rotate-180 fas fa-angle-right"></i>
                </div>
              </div>
            </Link>

            <Link
              to="#"
              className="group relative block p-6 rounded-2xl bg-[#161616] border
             border-[#262626] overflow-hidden
              hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 delay-0"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div
                  className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300
                 border border-orange-500/20 group-hover:border-transparent"
                >
                  <i className="fas fa-sliders text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  تقنيات
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  5 مقالة
                </p>
                <div
                  className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626]
                 flex items-center justify-center opacity-0 group-hover:opacity-100
                  group-hover:bg-white/20 transition-all duration-300"
                >
                  <i className="w-4 h-4 text-white rotate-180 fas fa-angle-right"></i>
                </div>
              </div>
            </Link>

            <Link
              to="#"
              className="group relative block p-6 rounded-2xl bg-[#161616] border
             border-[#262626] overflow-hidden
              hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 delay-0"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div
                  className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300
                 border border-orange-500/20 group-hover:border-transparent"
                >
                  <i className="fa-solid fa-sun text-xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  معدات
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  3 مقالة
                </p>
                <div
                  className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626]
                 flex items-center justify-center opacity-0 group-hover:opacity-100
                  group-hover:bg-white/20 transition-all duration-300"
                >
                  <i className="w-4 h-4 text-white rotate-180 fas fa-angle-right"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full">
                الأحدث
              </span>
              <h2 className="text-6xl text-white">أحدث المقالات</h2>
              <p className="mt-4 text-lg  text-gray-400 max-w-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>

            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            >
              عرض جميع المقالات
              <i className="fas fa-arrow-right rotate-180 transition-transform group-hover:-translate-x-1"></i>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-3xl bg-[#161616] border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full border border-[#333]">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                      <span>{post.readTime}</span>
                      <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-neutral-400 mb-5 line-clamp-2 text-sm ">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-[#262626]">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      />
                      <p className="text-sm font-medium text-white">
                        {post.author.name}
                      </p>
                      ``
                      <p className="text-xs text-neutral-500">{post.date}</p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="w-8 h-8 text-white fas fa-envelope"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في{" "}
              <span className="bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                نشرتنا الإخبارية
              </span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                اشترك الآن
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex">
                  {posts.map((image) => (
                    <img
                      key={image.id}
                      src={image.image}
                      alt={image.title}
                      className="w-8 h-8 rounded-full border-2 border-[#161616] -ml-2 first:ml-0"
                    />
                  ))}
                </div>
                <span>
                  انضم لـ{" "}
                  <span className="text-white font-medium">+10,000</span> مصور
                </span>
              </div>

              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>بدون إزعاج</span>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
