import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Building2, Factory, ShoppingCart, University, HardHat, Building } from 'lucide-react';

export function References() {
  const { t } = useLanguage();

  const references = [
    { icon: Home, title: t('references.residential'), color: 'text-primary' },
    { icon: Building2, title: t('references.complex'), color: 'text-accent-cyan' },
    { icon: Factory, title: t('references.sme'), color: 'text-accent-magenta' },
    { icon: Building, title: t('references.industrial'), color: 'text-green-500' },
    { icon: ShoppingCart, title: t('references.mall'), color: 'text-purple-500' },
    { icon: University, title: t('references.public'), color: 'text-blue-500' },
    { icon: HardHat, title: t('references.contractor'), color: 'text-orange-500' }
  ];

  return (
    <section id="references" className="py-4 lg:py-12 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-12 scroll-reveal">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold text-foreground mb-4">
            {t('references.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {references.map((reference, index) => {
            const Icon = reference.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg card-hover scroll-reveal text-center border border-border"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${reference.color}`} />
                </div>
                <h3 className="font-inter font-medium text-foreground">
                  {reference.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}