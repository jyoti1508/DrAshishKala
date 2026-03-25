import Navbar from '@/components/Navbar';
import SubBanner from '@/components/SubBanner';
import Appointment from '@/components/Appointment';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <SubBanner 
        title="Contact Us" 
        description="Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore fugiat nulla pariatur" 
      />
      <Appointment />
      <Footer />
    </main>
  );
}
