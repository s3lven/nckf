import HeroSection from '@/components/home/HeroSection'
import IntroductionSection from '@/components/home/IntroductionSection';
import FeatureSection from '@/components/home/FeatureSection';
import FAQSection from '@/components/home/FAQSection';
import CallToAction from '@/components/layout/CallToAction';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <FeatureSection />
      <FAQSection />
      <CallToAction />
    </main>
  );
}
