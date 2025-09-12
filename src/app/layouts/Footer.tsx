import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

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
                  <span className="text-background font-bold text-lg">D</span>
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
                <button className="w-12 h-12 rounded-full flex items-center justify-center text-[#b76ec7] hover:bg-[#b76ec7]/25 transition-all duration-200 hover:shadow-[0_0_0_6px_rgba(183,110,199,0.25)] group">
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:info@devteam.ru" className="text-foreground hover:text-primary transition-colors">
                    gurbanovich2014@yandex.ru
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href="tel:+79001234567" className="text-foreground hover:text-primary transition-colors">
                    +7 (900) 123-45-67
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
              <a href="#" className="hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};