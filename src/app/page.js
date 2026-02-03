import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import NotificationsSection from '@/components/NotificationsSection';
import MiniSection from '@/components/MiniSection';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <NotificationsSection />
        <MiniSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
