import About from '@/components/About';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        
        <Hero />
        <About />
        { /* <Skills />
        <Projects />
        <Contact />
        */ }
      </main>
      <Footer />
    </div>
  );
};

export default Index;