import Navbar from '@/components/Navbar';
import SubBanner from '@/components/SubBanner';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function DoctorsPage() {
  return (
    <main>
      <Navbar />
      <SubBanner 
        title="Our Doctors" 
        description="Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore fugiat nulla pariatur" 
      />
      <Team />
      <Footer />
    </main>
  );
}
