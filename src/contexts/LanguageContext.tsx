import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.whyUs': 'Neden Biz',
    'nav.services': 'Hizmetler',
    'nav.references': 'Referanslar',
    'nav.faq': 'SSS',
    'nav.contact': 'İletişim',

    // Hero
    'hero.title': 'İhtiyacınız Olan Her Konuda',
    'hero.titleBold': 'Ase Güvenlik Sistemleri',
    'hero.titleEnd': 'Yanınızda!',
    'hero.subtitle': 'Antalya ve çevresinde profesyonel güvenlik çözümleri',
    'hero.ctaWhatsapp': 'WhatsApp\'tan Yaz',
    'hero.ctaServices': 'Hizmetler',

    // Why Us
    'whyUs.title': 'Neden Ase Güvenlik Sistemleri?',
    'whyUs.expert.title': 'Uzman Kurulum',
    'whyUs.expert.desc': 'Deneyimli teknisyenlerle profesyonel kurulum hizmeti',
    'whyUs.support.title': 'Hızlı Destek',
    'whyUs.support.desc': '7/24 teknik destek ve müdahale hizmeti',
    'whyUs.cost.title': 'Uygun Maliyet',
    'whyUs.cost.desc': 'Kaliteli hizmet, rekabetçi fiyatlar',
    'whyUs.enterprise.title': 'Kurumsal Çözüm',
    'whyUs.enterprise.desc': 'Büyük ve küçük projelerde güvenilir çözümler',

    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Güvenlik sistemleri konusunda kapsamlı çözümler sunuyoruz',
    'services.intrusion': 'Hırsız Alarm Sistemleri',
    'services.fire': 'Yangın Alarm Sistemleri',
    'services.barrier': 'Bariyer Geçiş Sistemleri',
    'services.fastAccess': 'Hızlı Geçiş Sistemleri',
    'services.autoDoor': 'Otomatik Kapı Sistemleri',
    'services.accessControl': 'Geçiş Kontrol Sistemleri',
    'services.lpr': 'Plaka Tanıma Sistemleri',
    'services.cctv': 'Kamera Sistemleri',
    'services.intercom': 'Diafon Sistemleri',

    // References
    'references.title': 'Referanslarımız',
    'references.residential': 'Konut',
    'references.complex': 'Site & Apartman',
    'references.sme': 'KOBİ',
    'references.industrial': 'Endüstriyel Tesis',
    'references.mall': 'AVM',
    'references.public': 'Kamu',
    'references.contractor': 'Müteahhitlik Projeleri',

    // FAQ
    'faq.title': 'Sık Sorulan Sorular',
    'faq.survey.q': 'Keşif süreci nasıl ilerliyor?',
    'faq.survey.a': 'Uzman ekibimiz ücretsiz keşif yapar ve size en uygun çözümü sunar.',
    'faq.installation.q': 'Kurulum süresi nedir?',
    'faq.installation.a': 'Proje büyüklüğüne göre 1-5 gün arasında değişmektedir.',
    'faq.warranty.q': 'Garanti ve destek sağlıyor musunuz?',
    'faq.warranty.a': 'Evet, tüm sistemlerimiz için garanti ve 7/24 destek hizmeti sunuyoruz.',
    'faq.coverage.q': 'Hangi bölgelerde hizmet veriyorsunuz?',
    'faq.coverage.a': 'Öncelikle Antalya ve çevresinde hizmet vermekteyiz.',
    'faq.payment.q': 'Ödeme seçenekleri neler?',
    'faq.payment.a': 'Nakit, kredi kartı ve taksitli ödeme seçenekleri mevcuttur.',

    // Contact
    'contact.title': 'İletişim',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.address': 'Adres',
    'contact.workingHours': 'Çalışma Saatleri',
    'contact.workingTime': 'Pzt–Cmt 09:00–19:00',
    'contact.addressText': 'Siteler Mh. Gülveren Sitesi C. Blok 6/7a, Konyaaltı, Antalya',

    // Footer
    'footer.description': 'Antalya\'da profesyonel güvenlik ve geçiş sistemleri çözümleri.',
    'footer.menu': 'Menü',
    'footer.services': 'Hizmetler',
    'footer.contact': 'İletişim',
    'footer.copyright': '© 2025 Ase Güvenlik Sistemleri – Tüm Hakları Saklıdır.',
    'footer.kvkk': 'KVKK Aydınlatma Metni',

    // Common
    'common.whatsapp': 'WhatsApp\'tan Yaz'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.whyUs': 'Why Us',
    'nav.services': 'Services',
    'nav.references': 'References',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'For All Your Needs,',
    'hero.titleBold': 'Ase Güvenlik Sistemleri',
    'hero.titleEnd': 'Is With You!',
    'hero.subtitle': 'Professional security solutions in and around Antalya',
    'hero.ctaWhatsapp': 'Message on WhatsApp',
    'hero.ctaServices': 'Services',

    // Why Us
    'whyUs.title': 'Why Ase Güvenlik Sistemleri?',
    'whyUs.expert.title': 'Expert Installation',
    'whyUs.expert.desc': 'Professional installation service with experienced technicians',
    'whyUs.support.title': 'Fast Support',
    'whyUs.support.desc': '24/7 technical support and intervention service',
    'whyUs.cost.title': 'Cost-Effective',
    'whyUs.cost.desc': 'Quality service at competitive prices',
    'whyUs.enterprise.title': 'Enterprise-grade',
    'whyUs.enterprise.desc': 'Reliable solutions for large and small projects',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer comprehensive solutions in security systems',
    'services.intrusion': 'Intrusion Alarm Systems',
    'services.fire': 'Fire Alarm Systems',
    'services.barrier': 'Barrier Access Systems',
    'services.fastAccess': 'Fast Access Systems',
    'services.autoDoor': 'Automatic Door Systems',
    'services.accessControl': 'Access Control Systems',
    'services.lpr': 'License Plate Recognition',
    'services.cctv': 'CCTV & IP Camera Systems',
    'services.intercom': 'Intercom Systems',

    // References
    'references.title': 'Our References',
    'references.residential': 'Residential',
    'references.complex': 'Housing Complex',
    'references.sme': 'SME',
    'references.industrial': 'Industrial Facility',
    'references.mall': 'Shopping Mall',
    'references.public': 'Public Sector',
    'references.contractor': 'Contractor Projects',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.survey.q': 'How does the site survey work?',
    'faq.survey.a': 'Our expert team conducts a free survey and offers you the most suitable solution.',
    'faq.installation.q': 'How long does installation take?',
    'faq.installation.a': 'It varies between 1-5 days depending on the project size.',
    'faq.warranty.q': 'Do you provide warranty & support?',
    'faq.warranty.a': 'Yes, we provide warranty and 24/7 support service for all our systems.',
    'faq.coverage.q': 'Which areas do you cover?',
    'faq.coverage.a': 'We primarily serve in Antalya and surrounding areas.',
    'faq.payment.q': 'What are the payment options?',
    'faq.payment.a': 'Cash, credit card and installment payment options are available.',

    // Contact
    'contact.title': 'Contact',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.workingHours': 'Working Hours',
    'contact.workingTime': 'Mon–Fri 09:00–19:00',
    'contact.addressText': 'Siteler Mh. Gülveren Sitesi C. Blok 6/7a, Konyaaltı, Antalya',

    // Footer
    'footer.description': 'Professional security and access systems in Antalya.',
    'footer.menu': 'Menu',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Ase Güvenlik Sistemleri – All Rights Reserved.',
    'footer.kvkk': 'Privacy Policy',

    // Common
    'common.whatsapp': 'Message on WhatsApp'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  useEffect(() => {
    const stored = localStorage.getItem('language') as Language;
    if (stored && (stored === 'tr' || stored === 'en')) {
      setLanguage(stored);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}