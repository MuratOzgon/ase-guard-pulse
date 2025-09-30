import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = language === 'tr' 
    ? 'https://wa.me/905306823077?text=Merhaba%20Ase%20G%C3%BCvenlik%20Sistemleri%2C%20Antalya%27da%20hizmet%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.'
    : 'https://wa.me/905306823077?text=Hello%20Ase%20Guvenlik%2C%20I%27d%20like%20info%20for%20a%20security%20solution%20in%20Antalya.';

  const navigation = [
    { href: '#home', label: t('nav.home') },
    { href: '#why-us', label: t('nav.whyUs') },
    { href: '#services', label: t('nav.services') },
    { href: '#references', label: t('nav.references') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-card/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-1 overflow-hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-[20px] h-[20px] rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="/logo.png" alt="Ase Güvenlik Sistemleri" className="w-full h-full object-contain logo-constraint align-middle" style={{ maxWidth: '20px', maxHeight: '20px', verticalAlign: 'middle' }} />
              </div>
              <span className="font-inter font-semibold text-[16px] text-foreground leading-none">
                Ase Güvenlik Sistemleri
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-inter text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Language Switcher & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setLanguage('tr')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'tr' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  EN
                </button>
              </div>
              <Button asChild className="whatsapp-gradient hover:opacity-90 transition-opacity">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('common.whatsapp')}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-foreground hover:text-primary transition-colors ml-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border bg-card/95 backdrop-blur-sm shadow-lg z-[110]">
              <nav className="flex flex-col space-y-3 mt-4">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-inter text-foreground hover:text-primary transition-colors duration-200 py-2 px-4"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border mx-4">
                <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setLanguage('tr')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      language === 'tr' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    TR
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>
                <Button asChild size="sm" className="whatsapp-gradient">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t('common.whatsapp')}
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-[90] lg:hidden">
        <Button asChild size="lg" className="whatsapp-gradient rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-6 h-6" />
          </a>
        </Button>
      </div>
    </>
  );
}