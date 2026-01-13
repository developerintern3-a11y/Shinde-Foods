import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Download, Phone } from "lucide-react";

import image1 from "../../assets/Homeimg/2148694347.png";
import image2 from "../../assets/Homeimg/pavbhaji.png";
import image3 from "../../assets/Homeimg/82963.jpg";
import image4 from "../../assets/Homeimg/image4.jpg";
import image5 from "../../assets/Homeimg/dalmakhani.png";
import image6 from "../../assets/Homeimg/image6.png";
import image7 from "../../assets/Homeimg/springrolltwo.jpg";
import image8 from "../../assets/Homeimg/image.png";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    { id: 1, image: image8 },
    { id: 2, image: image1 },
    { id: 3, image: image2 },
    { id: 4, image: image3 },
    { id: 5, image: image4 },
    { id: 6, image: image5 },
    { id: 7, image: image6 },
    { id: 8, image: image7 },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/10 to-black/10" />

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="">
                {/* Card */}
                <div className="p-6 sm:p-8 ">
                  
                  {/* Highlighted Brand */}
                  <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-white
                    bg-gradient-to-r from-[#8B1B1F] to-[#c92f34] shadow-md">
                    SHINDE FOODS
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight">
                    Premium Frozen Foods
                  </h1>

                  <p className="mt-5 text-sm sm:text-base text-white">
                    Quality You Can Trust, Taste You Can’t Resist
                  </p>

                  <p className="mt-5 text-xs sm:text-sm text-white">
                    Trusted manufacturer of premium frozen foods for exports,
                    HoReCa, and bulk supply worldwide.
                  </p>

                  {/* Buttons */}
                  <div className="mt-15 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/catalogue.pdf"
                      download
                      className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-lg
                      bg-gradient-to-r from-[#8B1B1F] to-[#b52a2f]
                      hover:brightness-110 transition-all shadow-lg"
                    >
                      <Download className="w-4 h-4" />
                      Download Catalogue
                    </a>

                    <button
                      onClick={() => navigate("/contact")}
                      className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-lg
                      bg-gradient-to-r from-[#22c55e] to-[#16a34a]
                      hover:brightness-110 transition-all shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      Bulk Enquiry
                    </button>
                  </div>
                </div>
                {/* Card End */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-3 h-3 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)] scale-125"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-20 right-6 bg-white/20 text-white px-3 py-1 rounded-full text-xs">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
