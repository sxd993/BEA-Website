import { AccordionSection } from '../../../shared/ui/AccordionSection';
import { faqData } from '../const/faqData';

export const FAQ = () => {
  

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl shadow-gray-200/20 p-8 md:p-12 hover:shadow-3xl hover:shadow-gray-300/30 transition-all duration-500">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent">
              Часто задаваемые вопросы
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ответы на популярные вопросы о нашей работе и процессах разработки
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionSection key={index} title={item.question} titleClassName="text-base md:text-lg">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};