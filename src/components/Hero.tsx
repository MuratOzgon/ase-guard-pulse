import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function Hero() {
  const { language, t } = useLanguage();

  const whatsappLink = language === 'tr' 
    ? 'https://wa.me/905306823077?text=Merhaba%20Ase%20G%C3%BCvenlik%20Sistemleri%2C%20Antalya%27da%20hizmet%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.'
    : 'https://wa.me/905306823077?text=Hello%20Ase%20Guvenlik%2C%20I%27d%20like%20info%20for%20a%20security%20solution%20in%20Antalya.';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-3 py-2 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 scroll-reveal">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-inter font-bold text-foreground leading-tight">
                {t('hero.title')}{' '}
                <span className="text-primary">{t('hero.titleBold')}</span>{' '}
                {t('hero.titleEnd')}
              </h1>
              <p className="text-lg text-muted-foreground font-inter">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="whatsapp-gradient hover:opacity-90 transition-opacity">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('hero.ctaWhatsapp')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#services">
                  {t('hero.ctaServices')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end scroll-reveal">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-primary/10 to-accent-cyan/10 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-card shadow-2xl flex items-center justify-center">
                  <div className="space-y-6 text-center">
                    <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xl">🛡️</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-inter font-semibold text-lg text-primary">
                        Güvenlik Sistemleri
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Modern Teknoloji
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-cyan/20 rounded-xl flex items-center justify-center animate-pulse">
                <span className="text-2xl">📹</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-magenta/20 rounded-xl flex items-center justify-center animate-pulse">
                <span className="text-2xl">🚨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}