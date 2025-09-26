import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200/50">

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 place-items-center text-center">
            {/* Company Info */}
            <div className="max-w-sm space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl logo-font bg-gradient-to-r from-[#8e24aa] to-[#b76ec7] bg-clip-text text-transparent">bagsTack</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                Профессиональная команда разработчиков, создающая современные цифровые решения для вашего бизнеса.
              </p>
            </div>

            {/* Contact */}
            <div className="max-w-sm space-y-6">
              <h3 className="text-xl font-semibold text-center bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-gray-600" />
                  </div>
                  <a href="mailto:gurbanovich2014@yandex.ru" className="text-gray-700 hover:text-[#8e24aa] transition-colors duration-300">
                    gurbanovich2014@yandex.ru
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    {/* Telegram SVG Icon */}
                    <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <a
                    href="https://t.me/sxdddddddddd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#8e24aa] transition-colors duration-300"
                  >
                    @sxdddddddddd
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-gray-700">Челябинск, Россия</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-8 border-t border-gray-200/50 bg-gradient-to-r from-gray-50/50 to-white/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 text-center">
            <p className="text-sm text-gray-600 order-2 md:order-1">
              © 2025 bagsTack. Все права защищены.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-sm text-gray-600 order-1 md:order-2">
              <Link
                to="/privacy-policy"
                className="hover:text-[#8e24aa] transition-colors duration-300"
              >
                Политика конфиденциальности
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-[#8e24aa] transition-colors duration-300"
              >
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};