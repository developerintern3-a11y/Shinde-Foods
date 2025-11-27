import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Download, Phone, Mail } from 'lucide-react';
import image1 from '../../assets/Homeimg/image1.png';
import image2 from '../../assets/Homeimg/image2.png';
import image3 from '../../assets/Homeimg/image3.png';
import image4 from '../../assets/Homeimg/image4.png';
import image5 from '../../assets/Homeimg/image5.png';
import image6 from '../../assets/Homeimg/image6.png';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Premium Frozen Foods for", 
      highlight: "Export and Retail",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image1
    },
    {
      id: 2,
      title: "Premium Frozen Foods for",
      highlight: "Export and Retail",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image2
    },
    {
      id: 3,
      title: "Premium Frozen Foods for",
      highlight: "Export and Retail",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image3
    },
    {
      id: 4,
      title: "Premium Frozen Foods for",
      highlight: "Export and Retail",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image4
    },
    {
      id: 5,
      title: "Premium Frozen Foods for",
      highlight: "Export and Retail",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image5
    },
    {
      id: 6,
      title: "Premium Frozen Foods for",
      highlight: "Export and Retail",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image6
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center mt-7">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  {/* Subtitle with animation */}
                  <div
                    className={`transform transition-all duration-700 delay-200 ${
                      index === currentSlide
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <span className="inline-block px-4 py-2 bg-[#8B1B1F] text-white text-sm font-semibold rounded-full mb-4">
                      SHINDE FOODS
                    </span>
                  </div>

                  {/* Title with animation - Split into regular and highlighted parts */}
                  <h1
                    className={`text-5xl md:text-6xl font-bold text-white mb-7 leading-tight transform transition-all duration-700 delay-300 ${
                      index === currentSlide
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                  >
                    {slide.title}
                    <br />
                    <span className="text-6xl md:text-6xl font-black bg-gradient-to-r from-[#20bf0f] to-[#0fb54a] bg-clip-text text-transparent drop-shadow-lg" >
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* Subtitle text with animation */}
                  <p
                    className={`text-2xl md:text-2xl text-[#FBE5E5] font-semibold mb-4 transform transition-all duration-700 delay-400 ${
                      index === currentSlide
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                  >
                    {slide.subtitle}
                  </p>

                  {/* Description with animation */}
                  <p
                    className={`text-lg md:text-.5xl text-gray-200 mb-8 transform transition-all duration-700 delay-500 ${
                      index === currentSlide
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Buttons with animation */}
                  <div
                    className={`flex flex-wrap gap-4 transform transition-all duration-700 delay-600 ${
                      index === currentSlide
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <a 
                      href="/catalogue.pdf" 
                      download
                      className="flex items-center gap-2 px-8 py-4 bg-[#8B1B1F] hover:bg-[#6B1519] text-white text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#A52A2A]/50 cursor-pointer"
                    >
                      <Download className="w-5 h-5" />
                      Download Catalogue
                    </a>
                    <button
                      onClick={() => navigate('/contact')}
                      className="flex items-center gap-2 px-8 py-4 bg-[#0d6802] hover:bg-[#188407] text-white text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#20bf0f]/50 cursor-pointer"
                    >
                     
                      <Phone className="w-5 h-5" />
                       Contact for Bulk Order
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-[#8B1B1F]'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-24 right-8 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}