import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Appointment from '@/components/Appointment';
import Process from '@/components/Process';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Blog from '@/components/Blog';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Appointment />
      <Process />
      <Team />
      <Testimonials />
      <Stats />
      <Blog />
      <GetInTouch />
      <Footer />
    </main>
  );
}
