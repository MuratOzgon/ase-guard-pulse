import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const { language, t } = useLanguage();
  const [kvkkOpen, setKvkkOpen] = useState(false);

  const menuLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#why-us', label: t('nav.whyUs') },
    { href: '#services', label: t('nav.services') },
    { href: '#references', label: t('nav.references') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') }
  ];

  const servicesList = [
    t('services.intrusion'),
    t('services.fire'),
    t('services.barrier'),
    t('services.fastAccess'),
    t('services.autoDoor'),
    t('services.accessControl'),
    t('services.lpr'),
    t('services.cctv'),
    t('services.intercom')
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-[20px] h-[20px] rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="/logo.png" alt="Ase Güvenlik" className="w-full h-full object-contain logo-constraint align-middle" style={{ maxWidth: '20px', maxHeight: '20px', verticalAlign: 'middle' }} />
              </div>
              <span className="font-inter font-semibold text-[16px] leading-none">
                Ase Güvenlik
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ase_guvenlik_sistemleri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/erturk.aseguv.sis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-inter font-semibold text-lg mb-6">{t('footer.menu')}</h3>
            <ul className="space-y-3">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-inter font-semibold text-lg mb-6">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {servicesList.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-inter font-semibold text-lg mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  530 682 30 77
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  info@aseguvenlik.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  {t('contact.addressText')}
                </span>
              </div>
              <div className="pt-2">
                <h4 className="font-inter font-medium text-primary-foreground mb-2">
                  {t('contact.workingHours')}
                </h4>
                <span className="text-primary-foreground/80 text-sm">
                  {t('contact.workingTime')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            {t('footer.copyright')}
          </p>
          {language === 'tr' && (
            <Dialog open={kvkkOpen} onOpenChange={setKvkkOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t('footer.kvkk')}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>KVKK Aydınlatma Metni</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm">
                  <p><strong>Veri Sorumlusu:</strong> Ase Güvenlik Sistemleri, Antalya</p>
                  
                  <div>
                    <strong>Kişisel Verilerin İşlenme Amaçları:</strong>
                    <ul className="list-disc ml-5 mt-2">
                      <li>Tekliflendirme süreçlerinin yürütülmesi</li>
                      <li>Müşteri ilişkileri yönetimi</li>
                      <li>Satış sonrası destek hizmetlerinin sunulması</li>
                      <li>İletişim faaliyetlerinin gerçekleştirilmesi</li>
                    </ul>
                  </div>

                  <div>
                    <strong>Hukuki Sebepler:</strong>
                    <ul className="list-disc ml-5 mt-2">
                      <li>Sözleşmenin kurulması ve ifası</li>
                      <li>Meşru menfaat</li>
                      <li>Açık rıza (gerekli hallerde)</li>
                    </ul>
                  </div>

                  <p><strong>Paylaşım:</strong> Kişisel verileriniz yalnızca yasal yükümlülükler kapsamında yetkili kişi ve kuruluşlarla paylaşılır.</p>

                  <p><strong>Saklama Süreleri:</strong> Veriler, işlenme amacının gerektirdiği süre boyunca ve yasal yükümlülükler çerçevesinde saklanır.</p>

                  <div>
                    <strong>KVKK 11. Madde Kapsamındaki Haklarınız:</strong>
                    <ul className="list-disc ml-5 mt-2">
                      <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                      <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                      <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                      <li>Eksik veya yanlış işlenen verilerin düzeltilmesini isteme</li>
                      <li>Verilerin silinmesi veya yok edilmesini isteme</li>
                      <li>İşleme faaliyetlerine itiraz etme</li>
                    </ul>
                  </div>

                  <p>Bu haklarınızı kullanmak için info@aseguvenlik.com adresine başvurabilirsiniz.</p>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </footer>
  );
}