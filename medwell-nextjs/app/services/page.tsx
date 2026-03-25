import Navbar from '@/components/Navbar';
import SubBanner from '@/components/SubBanner';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <SubBanner 
        title="Our Services" 
        description="Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore fugiat nulla pariatur" 
      />
      <Services />
      <Footer />
    </main>
  );
}
