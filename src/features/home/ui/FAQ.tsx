import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../const/faqData';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Временные данные для демонстрации (заменить на импорт из faqData)

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о нашей работе и процессах разработки
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-gray-300 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span
                    className={`text-lg font-medium transition-colors duration-200 ${
                      activeIndex === index 
                        ? 'text-[#b76ec7]' 
                        : 'text-foreground group-hover:text-[#b76ec7]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-200 ${
                      activeIndex === index
                        ? 'transform rotate-180 text-[#b76ec7]'
                        : 'text-muted-foreground group-hover:text-[#b76ec7]'
                    }`}
                  />
                </button>
                
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};