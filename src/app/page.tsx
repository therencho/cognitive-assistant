import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OurStorySection from '@/components/OurStorySection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
