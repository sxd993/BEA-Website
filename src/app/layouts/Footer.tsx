import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

export const Footer = () => {


  return (
    <footer id="contact" className="bg-background border-t">
      {/* CTA Section */}
      <div className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Давайте обсудим ваши идеи и создадим что-то великолепное вместе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-lg px-8 lg-button">
              Рассчитать стоимость
            </button>
            <button className="text-lg px-8 border border-outline rounded-lg">
              <Mail className="mr-2 h-5 w-5" />
              Написать нам
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">D</span>
                </div>
                <span className="text-xl font-semibold">DevTeam</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональная команда разработчиков, создающая современные цифровые решения для вашего бизнеса.
              </p>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full hover:bg-accent transition-colors">
                  <Github className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-accent transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Мобильные приложения</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">UI/UX дизайн</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">DevOps</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Консультации</a></li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-semibold mb-4">Технологии</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">React / Next.js</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Node.js / Python</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">React Native</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">AWS / Docker</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">PostgreSQL</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@devteam.ru" className="hover:text-foreground transition-colors">
                    info@devteam.ru
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+79001234567" className="hover:text-foreground transition-colors">
                    +7 (900) 123-45-67
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4" />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Bottom */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 DevTeam. Все права защищены.
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
}