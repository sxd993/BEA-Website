import { Mail, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t border-gray-300">

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center">
                  <span className="text-background font-bold text-lg">B</span>
                </div>
                <span className="text-2xl font-semibold">bagsTack</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Профессиональная команда разработчиков, создающая современные цифровые решения для вашего бизнеса.
              </p>
              <div className="flex space-x-3">
                <button className="w-12 h-12 rounded-full flex items-center justify-center text-[#b76ec7] hover:bg-[#b76ec7]/25 transition-all duration-200 hover:shadow-[0_0_0_6px_rgba(183,110,199,0.25)] group">
                  <Github className="h-5 w-5" />
                </button>
                <button className="w-12 h-12 rounded-full flex items-center justify-center text-[#b76ec7] hover:bg-[#b76ec7]/25 transition-all duration-200 hover:shadow-[0_0_0_6px_rgba(183,110,199,0.25)] group">
                  <Linkedin className="h-5 w-5" />
                </button>
                <a 
                  href="https://t.me/sxdddddddddd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#b76ec7] hover:bg-[#b76ec7]/25 transition-all duration-200 hover:shadow-[0_0_0_6px_rgba(183,110,199,0.25)] group"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:gurbanovich2014@yandex.ru" className="text-foreground hover:text-primary transition-colors">
                    gurbanovich2014@yandex.ru
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Telegram SVG Icon */}
                  <svg className="h-5 w-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <a 
                    href="https://t.me/sxdddddddddd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    @sxdddddddddd
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Челябинск, Россия</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-6 border-t border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 bagsTack. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link 
                to="/privacy-policy" 
                className="hover:text-foreground transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link 
                to="/terms-of-service" 
                className="hover:text-foreground transition-colors"
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