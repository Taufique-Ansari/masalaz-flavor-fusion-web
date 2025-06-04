
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "food", label: "Food" },
    { id: "interior", label: "Interior" },
    { id: "chef", label: "Chef's Special" },
  ];

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "food",
      title: "Spiced Delicacies",
      description: "A beautiful arrangement of our signature dishes"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "chef",
      title: "Chef's Special Platter",
      description: "Our chef's recommended selection"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "food",
      title: "Paneer Perfection",
      description: "Fresh cottage cheese preparations"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "interior",
      title: "Dining Ambiance",
      description: "Warm and inviting restaurant atmosphere"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "food",
      title: "Butter Chicken",
      description: "Our signature creamy curry"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1563379091339-03246c8238e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "chef",
      title: "Biryani Masterpiece",
      description: "Aromatic rice dish with tender meat"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "food",
      title: "Dal Makhani",
      description: "Creamy lentil curry perfection"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1568741540563-22dd76f62c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "food",
      title: "Refreshing Lassi",
      description: "Traditional yogurt drink"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-charcoal mb-6">
            Gallery
          </h2>
          <p className="text-xl font-open-sans text-charcoal/80 max-w-2xl mx-auto">
            Take a visual journey through our culinary creations and restaurant ambiance
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`font-open-sans font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-paprika hover:bg-paprika/90 text-cream"
                  : "border-paprika text-paprika hover:bg-paprika hover:text-cream"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-cream">
                  <h3 className="font-inter font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="font-open-sans text-sm opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <p className="font-open-sans text-charcoal/70 mb-4">
            Follow us on Instagram for more delicious moments
          </p>
          <Button className="bg-paprika hover:bg-paprika/90 text-cream font-open-sans">
            @masalazonerestaurant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
