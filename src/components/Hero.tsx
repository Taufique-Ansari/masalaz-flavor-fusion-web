import { Button } from "@/components/ui/button";
import os from "@/assets/img/outside_structure.jpeg";
import ScrollAnimation from "@/components/ui/scroll-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.7), rgba(231, 111, 81, 0.7)), url(${os})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Food illustrations overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-float">🥘</div>
        <div className="absolute top-20 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>🍛</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-float" style={{ animationDelay: '2s' }}>🌶️</div>
        <div className="absolute bottom-32 right-16 text-5xl animate-float" style={{ animationDelay: '3s' }}>🧄</div>
        <div className="absolute top-1/3 left-1/4 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🥖</div>
        <div className="absolute top-1/2 right-1/3 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>🍯</div>
        <div className="absolute bottom-1/3 left-1/3 text-3xl animate-float" style={{ animationDelay: '2.5s' }}>🫚</div>
        <div className="absolute top-16 left-1/2 text-4xl animate-float" style={{ animationDelay: '3.5s' }}>🌿</div>
      </div>

      <div className="container mx-auto px-4 text-center text-cream relative z-10 pb-32">
        <ScrollAnimation className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold mb-4 md:mb-6 leading-tight">
            Masalaz <span className="text-saffron">One</span>
          </h1>
          <ScrollAnimation delay={200}>
            <p className="text-lg md:text-xl lg:text-2xl font-open-sans mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Authentic Flavors, Modern Experience
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <p className="text-base md:text-lg font-open-sans mb-8 md:mb-12 max-w-3xl mx-auto opacity-90 px-4">
              Experience the rich tapestry of Indian cuisine where traditional recipes meet contemporary presentation. Every dish tells a story of heritage, passion, and culinary excellence.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-saffron hover:bg-saffron/90 text-charcoal font-open-sans font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View Menu
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cream text-black hover:bg-cream hover:text-charcoal font-open-sans font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Book Table
              </Button>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      {/* Floating info cards - positioned at the very bottom of hero section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-charcoal/50 to-transparent pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
            <ScrollAnimation delay={800}>
              <div className="bg-cream/20 backdrop-blur-sm rounded-lg p-3 md:p-4 animate-float border border-cream/30">
                <h3 className="font-inter font-semibold text-saffron mb-1 md:mb-2 text-sm md:text-base">Hours</h3>
                <p className="font-open-sans text-xs md:text-sm text-cream">Daily: 11:30 AM - 10:00 PM</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={1000}>
              <div className="bg-cream/20 backdrop-blur-sm rounded-lg p-3 md:p-4 animate-float border border-cream/30" style={{ animationDelay: '1s' }}>
                <h3 className="font-inter font-semibold text-saffron mb-1 md:mb-2 text-sm md:text-base">Location</h3>
                <p className="font-open-sans text-xs md:text-sm text-cream">Trambakeshwar Rd, opp. Papayas Chowk, Khode Park, Satpur Colony, Nashik, Maharashtra 422007</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={1200}>
              <div className="bg-cream/20 backdrop-blur-sm rounded-lg p-3 md:p-4 animate-float border border-cream/30" style={{ animationDelay: '2s' }}>
                <h3 className="font-inter font-semibold text-saffron mb-1 md:mb-2 text-sm md:text-base">Phone</h3>
                <p className="font-open-sans text-xs md:text-sm text-cream">078209 82492</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
