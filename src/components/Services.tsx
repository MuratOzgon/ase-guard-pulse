import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Shield, 
  Flame, 
  Construction, 
  Zap, 
  DoorOpen, 
  KeyRound,
  ScanLine,
  Camera,
  Phone,
  MessageCircle
} from 'lucide-react';

export function Services() {
  const { language, t } = useLanguage();

  const whatsappLink = language === 'tr' 
    ? 'https://wa.me/905306823077?text=Merhaba%20Ase%20G%C3%BCvenlik%20Sistemleri%2C%20Antalya%27da%20hizmet%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.'
    : 'https://wa.me/905306823077?text=Hello%20Ase%20Guvenlik%2C%20I%27d%20like%20info%20for%20a%20security%20solution%20in%20Antalya.';

  const services = [
    {
      icon: Shield,
      title: t('services.intrusion'),
      features: [
        'PIR hareket sensörleri',
        'Manyetik kontak sistemleri', 
        'Cam kırılma dedektörleri',
        'Kablosuz alarm sistemleri'
      ],
      color: 'text-primary'
    },
    {
      icon: Flame,
      title: t('services.fire'),
      features: [
        'Duman dedektörleri',
        'Isı dedektörleri',
        'El butonu sistemi',
        'Sprinkler entegrasyonu'
      ],
      color: 'text-red-500'
    },
    {
      icon: Construction,
      title: t('services.barrier'),
      features: [
        'Otopark bariyer sistemleri',
        'Uzaktan kumanda kontrol',
        'Araç sensör sistemi',
        'Manuel açma özelliği'
      ],
      color: 'text-accent-cyan'
    },
    {
      icon: Zap,
      title: t('services.fastAccess'),
      features: [
        'RFID kart okuyucu',
        'Biyometrik tanıma',
        'QR kod sistemi',
        'Hızlı geçiş kontrolü'
      ],
      color: 'text-yellow-500'
    },
    {
      icon: DoorOpen,
      title: t('services.autoDoor'),
      features: [
        'Sürgülü kapı sistemleri',
        'Döner kapı sistemleri',
        'Sensörlü açma/kapama',
        'Manuel geçiş özelliği'
      ],
      color: 'text-accent-magenta'
    },
    {
      icon: KeyRound,
      title: t('services.accessControl'),
      features: [
        'Kartlı geçiş sistemi',
        'Şifreli kapı kilidi',
        'Parmak izi tanıma',
        'Zaman kontrollü erişim'
      ],
      color: 'text-green-500'
    },
    {
      icon: ScanLine,
      title: t('services.lpr'),
      features: [
        'Otomatik plaka okuma',
        'Araç giriş/çıkış kaydı',
        'Blacklist kontrolü',
        'Hızlı geçiş sistemi'
      ],
      color: 'text-purple-500'
    },
    {
      icon: Camera,
      title: t('services.cctv'),
      features: [
        'IP kamera sistemleri',
        'Gece görüş teknolojisi',
        'Uzaktan izleme',
        'Hareket algılama'
      ],
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: t('services.intercom'),
      features: [
        'Görüntülü diafon',
        'Çok daireli sistemler',
        'Uzaktan kapı açma',
        'Sesli iletişim'
      ],
      color: 'text-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-4 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-12 scroll-reveal">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg card-hover scroll-reveal border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4">
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="font-inter font-semibold text-lg text-foreground">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild size="sm" variant="outline" className="w-full">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t('common.whatsapp')}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}