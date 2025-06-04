
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-charcoal mb-8">
              Our Story
            </h2>
            <div className="space-y-6 font-open-sans text-charcoal/80 leading-relaxed">
              <p className="text-lg">
                Founded in 2015 by Chef Rajesh Kumar, Masalaz One began as a dream to bring authentic Indian flavors to the heart of our community. Drawing from his grandmother's recipes and years of culinary training in Mumbai, Chef Kumar created a menu that honors tradition while embracing innovation.
              </p>
              <p className="text-lg">
                Our name "Masalaz" reflects our passion for the perfect blend of spices – the soul of Indian cuisine. Each dish is crafted with carefully sourced ingredients and time-honored techniques passed down through generations.
              </p>
              <p className="text-lg">
                Today, we're proud to be recognized as one of the city's premier Indian restaurants, serving families and food enthusiasts who appreciate the artistry of authentic Indian cooking.
              </p>
            </div>

            {/* Awards */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-cream rounded-lg">
                <h4 className="font-inter font-bold text-paprika text-2xl">2023</h4>
                <p className="font-open-sans text-charcoal/70 text-sm">Best Indian Restaurant</p>
              </div>
              <div className="text-center p-4 bg-cream rounded-lg">
                <h4 className="font-inter font-bold text-paprika text-2xl">5★</h4>
                <p className="font-open-sans text-charcoal/70 text-sm">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right side - Images */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <img
                // src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Chef preparing dishes"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                // src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Restaurant interior"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                // src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Fresh spices"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                // src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Traditional cooking"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-inter font-bold text-charcoal text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-saffron rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h4 className="text-xl font-inter font-semibold text-charcoal mb-3">
                Fresh Ingredients
              </h4>
              <p className="font-open-sans text-charcoal/70">
                We source the finest, freshest ingredients daily to ensure every dish meets our high standards.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-paprika rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h4 className="text-xl font-inter font-semibold text-charcoal mb-3">
                Authentic Recipes
              </h4>
              <p className="font-open-sans text-charcoal/70">
                Every recipe is rooted in tradition, passed down through generations of culinary masters.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-saffron rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
              <h4 className="text-xl font-inter font-semibold text-charcoal mb-3">
                Made with Love
              </h4>
              <p className="font-open-sans text-charcoal/70">
                Each dish is prepared with passion and care, creating memorable dining experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
