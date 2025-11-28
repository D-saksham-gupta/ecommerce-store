"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const mainBanners = [
    {
      category: "Premium Collection",
      title: "Handcrafted",
      highlight: "Elegance",
      subtitle: "latest Creations",
      image:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-slate-50 via-rose-50 to-pink-100",
      textColor: "text-gray-900",
    },
    {
      category: "New Arrivals",
      title: "Limited",
      highlight: "Edition",
      subtitle: "Exclusive Designs",
      image:
        "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-amber-50 via-orange-50 to-rose-100",
      textColor: "text-gray-900",
    },
  ];

  const sideBanners = [
    {
      label: "Trending Now",
      title: "Modern",
      subtitle: "Minimalist Style",
      image:
        "https://images.pexels.com/photos/6068955/pexels-photo-6068955.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-emerald-50 to-teal-100",
    },
    {
      label: "Best Sellers",
      title: "Timeless",
      subtitle: "Classics",
      image:
        "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-cyan-50 to-blue-100",
    },
  ];

  const currentBanner = mainBanners[activeSlide];

  return (
    <div className="mb-12 md:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div
          className={`lg:col-span-2 bg-gradient-to-br ${currentBanner.gradient} rounded-3xl overflow-hidden relative group`}
        >
          <div className="min-h-96 md:min-h-[420px] flex items-center justify-between p-6 md:p-8 lg:p-12">
            <div className="relative z-10 max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-rose-500" />
                <p className="text-rose-500 text-sm font-semibold uppercase tracking-wider">
                  {currentBanner.category}
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
                {currentBanner.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  {currentBanner.highlight}
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
                {currentBanner.subtitle}
              </p>

              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-rose-500/30 transform hover:scale-105 transition-all duration-300">
                Shop Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-gray-500 text-sm mt-6">
                Limited time offer • Free shipping on orders over $50
              </p>
            </div>

            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 lg:w-96 lg:h-96 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img
                src={currentBanner.image}
                alt="Featured product"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {mainBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeSlide
                    ? "w-8 h-2 bg-rose-500"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 pointer-events-none" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-1 lg:space-y-6">
          {sideBanners.map((banner, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${banner.gradient} rounded-2xl p-4 md:p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden relative`}
            >
              <div className="relative z-10">
                <p className="text-rose-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  {banner.label}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {banner.title}
                </h3>
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  {banner.subtitle}
                </p>
              </div>

              <div className="mt-4 md:mt-6 relative overflow-hidden rounded-xl">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-28 md:h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
