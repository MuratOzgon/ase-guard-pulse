import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhyUs } from '@/components/WhyUs';
import SeoVideo from '@/components/SeoVideo';
import { Services } from '@/components/Services';
import { References } from '@/components/References';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function MainContent() {
  useScrollReveal();

  return (
    <div className="font-inter">
      <Header />
      <main>
        <Hero />
        <SeoVideo
          title="Ase Güvenlik Sistemleri Tanıtım"
          description="Antalya ve çevresinde profesyonel güvenlik çözümleri."
          mp4Src="/intro.mp4"
          autoPlay={true}
        />
        <WhyUs />
        <Services />
        <References />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const Index = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default Index;
