import { Header } from '../Header';
import { Footer } from '../Footer';
import { HeroSection } from '../Hero';
import { CardsSection } from '../CardSection';
import { ThumbSection } from '../ThumbSection';
import { PreFooterSection } from '../PreFooter';

export function Application() {
  return (
    <>
      <Header />
      <HeroSection />
      <CardsSection />
      <ThumbSection />
      <PreFooterSection />
      <Footer />
    </>
  );
}
