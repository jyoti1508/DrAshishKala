import Navbar from '@/components/Navbar';
import SubBanner from '@/components/SubBanner';
import About from '@/components/About';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <SubBanner 
        title="About Us" 
        description="Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore fugiat nulla pariatur" 
      />
      <About />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}
