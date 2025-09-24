import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.survey.q'),
      answer: t('faq.survey.a')
    },
    {
      question: t('faq.installation.q'),
      answer: t('faq.installation.a')
    },
    {
      question: t('faq.warranty.q'),
      answer: t('faq.warranty.a')
    },
    {
      question: t('faq.coverage.q'),
      answer: t('faq.coverage.a')
    },
    {
      question: t('faq.payment.q'),
      answer: t('faq.payment.a')
    }
  ];

  return (
    <section id="faq" className="py-4 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-12 scroll-reveal">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold text-foreground mb-4">
            {t('faq.title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="scroll-reveal">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-inter font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}