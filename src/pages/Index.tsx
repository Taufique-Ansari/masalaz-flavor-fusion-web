
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream relative">
      {/* Global food illustration background */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-32 left-8 text-4xl animate-float">🍅</div>
        <div className="absolute top-64 right-12 text-3xl animate-float" style={{ animationDelay: '2s' }}>🥒</div>
        <div className="absolute top-96 left-16 text-5xl animate-float" style={{ animationDelay: '4s' }}>🫛</div>
        <div className="absolute top-[32rem] right-8 text-4xl animate-float" style={{ animationDelay: '1s' }}>🌽</div>
        <div className="absolute top-[40rem] left-12 text-3xl animate-float" style={{ animationDelay: '3s' }}>🥕</div>
        <div className="absolute top-[48rem] right-16 text-4xl animate-float" style={{ animationDelay: '5s' }}>🧅</div>
        <div className="absolute top-[56rem] left-8 text-3xl animate-float" style={{ animationDelay: '2.5s' }}>🥬</div>
        <div className="absolute top-[64rem] right-12 text-5xl animate-float" style={{ animationDelay: '4.5s' }}>🍆</div>
        <div className="absolute top-[72rem] left-16 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>🫑</div>
        <div className="absolute top-[80rem] right-8 text-3xl animate-float" style={{ animationDelay: '3.5s' }}>🌶️</div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
