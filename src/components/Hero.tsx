
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.7), rgba(231, 111, 81, 0.7)), url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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

      <div className="container mx-auto px-4 text-center text-cream relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold mb-4 md:mb-6 leading-tight">
            Masalaz <span className="text-saffron">One</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-open-sans mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Authentic Flavors, Modern Experience
          </p>
          <p className="text-base md:text-lg font-open-sans mb-8 md:mb-12 max-w-3xl mx-auto opacity-90 px-4">
            Experience the rich tapestry of Indian cuisine where traditional recipes meet contemporary presentation. Every dish tells a story of heritage, passion, and culinary excellence.
          </p>
          
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
              className="border-cream text-cream hover:bg-cream hover:text-charcoal font-open-sans font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Book Table
            </Button>
          </div>
        </div>

        {/* Floating info cards - positioned absolute within Hero section only */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
              <div className="bg-cream/20 backdrop-blur-sm rounded-lg p-3 md:p-4 animate-float border border-cream/30">
                <h3 className="font-inter font-semibold text-saffron mb-1 md:mb-2 text-sm md:text-base">Hours</h3>
                <p className="font-open-sans text-xs md:text-sm text-cream">Daily: 11:30 AM - 10:00 PM</p>
              </div>
              <div className="bg-cream/20 backdrop-blur-sm rounded-lg p-3 md:p-4 animate-float border border-cream/30" style={{ animationDelay: '1s' }}>
                <h3 className="font-inter font-semibold text-saffron mb-1 md:mb-2 text-sm md:text-base">Location</h3>
                <p className="font-open-sans text-xs md:text-sm text-cream">123 Spice Street, Flavor District</p>
              </div>
              <div className="bg-cream/20 backdrop-blur-sm rounded-lg p-3 md:p-4 animate-float border border-cream/30" style={{ animationDelay: '2s' }}>
                <h3 className="font-inter font-semibold text-saffron mb-1 md:mb-2 text-sm md:text-base">Phone</h3>
                <p className="font-open-sans text-xs md:text-sm text-cream">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
