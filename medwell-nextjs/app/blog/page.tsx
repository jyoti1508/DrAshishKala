import Navbar from '@/components/Navbar';
import SubBanner from '@/components/SubBanner';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <SubBanner 
        title="Our Blogs" 
        description="Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore fugiat nulla pariatur" 
      />
      <Blog />
      <Footer />
    </main>
  );
}
