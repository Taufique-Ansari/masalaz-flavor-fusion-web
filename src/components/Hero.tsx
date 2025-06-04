
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
      <div className="container mx-auto px-4 text-center text-cream relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-inter font-bold mb-6 leading-tight">
            Masalaz <span className="text-saffron">One</span>
          </h1>
          <p className="text-xl md:text-2xl font-open-sans mb-8 max-w-2xl mx-auto leading-relaxed">
            Authentic Flavors, Modern Experience
          </p>
          <p className="text-lg font-open-sans mb-12 max-w-3xl mx-auto opacity-90">
            Experience the rich tapestry of Indian cuisine where traditional recipes meet contemporary presentation. Every dish tells a story of heritage, passion, and culinary excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-saffron hover:bg-saffron/90 text-charcoal font-open-sans font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              View Menu
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cream text-cream hover:bg-cream hover:text-charcoal font-open-sans font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Book Table
            </Button>
          </div>
        </div>

        {/* Floating info cards */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-4 animate-float">
                <h3 className="font-inter font-semibold text-saffron mb-2">Hours</h3>
                <p className="font-open-sans text-sm">Daily: 11:30 AM - 10:00 PM</p>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                <h3 className="font-inter font-semibold text-saffron mb-2">Location</h3>
                <p className="font-open-sans text-sm">123 Spice Street, Flavor District</p>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-4 animate-float" style={{ animationDelay: '2s' }}>
                <h3 className="font-inter font-semibold text-saffron mb-2">Phone</h3>
                <p className="font-open-sans text-sm">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
