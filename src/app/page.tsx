import EventSection from '../components/home/EventSection';
import HeroSection from '../components/home/HeroSection'
import IntroductionSection from '../components/home/IntroductionSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <EventSection />
    </main>
  );
}
