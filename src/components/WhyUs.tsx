import { useLanguage } from '@/contexts/LanguageContext';
import { Settings, Headphones, DollarSign, Building } from 'lucide-react';

export function WhyUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Settings,
      title: t('whyUs.expert.title'),
      description: t('whyUs.expert.desc'),
      color: 'text-primary'
    },
    {
      icon: Headphones,
      title: t('whyUs.support.title'),
      description: t('whyUs.support.desc'),
      color: 'text-accent-cyan'
    },
    {
      icon: DollarSign,
      title: t('whyUs.cost.title'),
      description: t('whyUs.cost.desc'),
      color: 'text-accent-magenta'
    },
    {
      icon: Building,
      title: t('whyUs.enterprise.title'),
      description: t('whyUs.enterprise.desc'),
      color: 'text-primary'
    }
  ];

  return (
    <section id="why-us" className="py-4 lg:py-12 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-12 scroll-reveal">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold text-foreground mb-6">
            {t('whyUs.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg card-hover scroll-reveal text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-xl flex items-center justify-center">
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="font-inter font-semibold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}