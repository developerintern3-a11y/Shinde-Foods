import { Phone, MapPin, Facebook, Instagram, Send, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-600 via-[#8B1B1F] to-[#A52A2A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20 mb-4 sm:mb-6">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Shinde Foods</h3>
            <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Premium frozen food products including momos, parathas, and vegetables. 
              Export-grade quality with authentic taste, serving retailers, distributors, and HoReCa businesses globally.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                <a href="mailto:info@shindefoods.com" className="hover:text-yellow-200 transition-colors text-sm sm:text-base">
                  info@shindefoods.com
                </a>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                <div className="text-sm sm:text-base">
                  <p>Pabal Futanwadi Road, Pabal,</p>
                  <p>Shirur, Pune, Maharashtra, 412403</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#home" className="hover:text-yellow-200 transition-colors duration-200 inline-block hover:translate-x-1 transform text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-200 transition-colors duration-200 inline-block hover:translate-x-1 transform text-sm sm:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-200 transition-colors duration-200 inline-block hover:translate-x-1 transform text-sm sm:text-base">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-yellow-200 transition-colors duration-200 inline-block hover:translate-x-1 transform text-sm sm:text-base">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          

          {/* Follow Us & Payment Methods */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Follow Us</h3>
            <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
              <a 
                href="#facebook" 
                className="bg-white text-[#8B1B1F] p-2 sm:p-3 rounded-full hover:bg-[#FBE5E5] transform hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
              </a>
              <a 
                href="#instagram" 
                className="bg-white text-[#8B1B1F] p-2 sm:p-3 rounded-full hover:bg-[#FBE5E5] transform hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#telegram" 
                className="bg-white text-[#8B1B1F] p-2 sm:p-3 rounded-full hover:bg-[#FBE5E5] transform hover:scale-110 transition-all duration-200"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#google" 
                className="bg-white text-[#8B1B1F] p-2 sm:p-3 rounded-full hover:bg-[#FBE5E5] transform hover:scale-110 transition-all duration-200"
                aria-label="Google"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>

           
          
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mb-4 sm:mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/95 text-xs sm:text-sm md:text-base">
           © Website Design & Developed By Fox Aircomm Pvt Ltd | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}