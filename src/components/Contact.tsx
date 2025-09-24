import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';

export function Contact() {
  const { language, t } = useLanguage();

  const whatsappLink = language === 'tr' 
    ? 'https://wa.me/905306823077?text=Merhaba%20Ase%20G%C3%BCvenlik%20Sistemleri%2C%20Antalya%27da%20hizmet%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.'
    : 'https://wa.me/905306823077?text=Hello%20Ase%20Guvenlik%2C%20I%27d%20like%20info%20for%20a%20security%20solution%20in%20Antalya.';

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '530 682 30 77',
      href: 'tel:+905306823077',
      color: 'text-primary'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'info@aseguvenlik.com',
      href: 'mailto:info@aseguvenlik.com',
      color: 'text-accent-cyan'
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      value: t('contact.addressText'),
      href: 'https://maps.google.com/?q=Siteler+Mh.+Gülveren+Sitesi+C.+Blok+6/7a,+Konyaaltı,+Antalya',
      color: 'text-accent-magenta'
    },
    {
      icon: Clock,
      title: t('contact.workingHours'),
      value: t('contact.workingTime'),
      href: null,
      color: 'text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-4 lg:py-12 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-12 scroll-reveal">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 scroll-reveal">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-lg card-hover">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-inter font-semibold text-lg text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {info.value}
                    </p>
                    {info.href && (
                      <ExternalLink className="w-4 h-4 mt-2 text-muted-foreground" />
                    )}
                  </div>
                </div>
              );

              return info.href ? (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="scroll-reveal">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-2xl text-foreground mb-3">
                    {language === 'tr' ? 'Hemen İletişime Geçin' : 'Get In Touch Now'}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {language === 'tr' 
                      ? 'Güvenlik sistemi ihtiyaçlarınız için ücretsiz danışmanlık alın.'
                      : 'Get free consultation for your security system needs.'
                    }
                  </p>
                </div>
                <Button asChild size="lg" className="whatsapp-gradient hover:opacity-90 transition-opacity w-full">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('common.whatsapp')}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="https://maps.google.com/?q=Siteler+Mh.+Gülveren+Sitesi+C.+Blok+6/7a,+Konyaaltı,+Antalya" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-5 h-5 mr-2" />
                    {language === 'tr' ? 'Haritada Görüntüle' : 'View on Map'}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}