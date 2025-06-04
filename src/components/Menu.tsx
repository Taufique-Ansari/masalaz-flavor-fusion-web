
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  const categories = [
    { id: "appetizers", label: "Appetizers" },
    { id: "mains", label: "Main Courses" },
    { id: "beverages", label: "Beverages" },
    { id: "desserts", label: "Desserts" },
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Samosas",
        description: "Crispy golden triangles filled with spiced potatoes and peas",
        price: "$8.99",
        spiceLevel: 2,
        dietary: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Chicken Tikka",
        description: "Marinated chicken pieces grilled to perfection in tandoor",
        price: "$12.99",
        spiceLevel: 3,
        dietary: ["Gluten-Free"],
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Paneer Tikka",
        description: "Cubes of cottage cheese marinated in aromatic spices",
        price: "$10.99",
        spiceLevel: 2,
        dietary: ["Vegetarian", "Gluten-Free"],
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    mains: [
      {
        name: "Butter Chicken",
        description: "Tender chicken in rich tomato and cream sauce",
        price: "$18.99",
        spiceLevel: 2,
        dietary: ["Gluten-Free"],
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Lamb Biryani",
        description: "Fragrant basmati rice with tender lamb and aromatic spices",
        price: "$22.99",
        spiceLevel: 3,
        dietary: ["Gluten-Free"],
        image: "https://images.unsplash.com/photo-1563379091339-03246c8238e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Dal Makhani",
        description: "Creamy black lentils slow-cooked with butter and spices",
        price: "$14.99",
        spiceLevel: 1,
        dietary: ["Vegetarian", "Gluten-Free"],
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    beverages: [
      {
        name: "Mango Lassi",
        description: "Traditional yogurt drink blended with fresh mango",
        price: "$4.99",
        spiceLevel: 0,
        dietary: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1568741540563-22dd76f62c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Masala Chai",
        description: "Aromatic tea brewed with cardamom, cinnamon, and ginger",
        price: "$3.99",
        spiceLevel: 1,
        dietary: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    desserts: [
      {
        name: "Gulab Jamun",
        description: "Sweet milk dumplings in cardamom-rose syrup",
        price: "$6.99",
        spiceLevel: 0,
        dietary: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream with cardamom and pistachios",
        price: "$5.99",
        spiceLevel: 0,
        dietary: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ]
  };

  const getSpiceIndicator = (level: number) => {
    return "🌶️".repeat(level) + "○".repeat(3 - level);
  };

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-charcoal mb-6">
            Our Menu
          </h2>
          <p className="text-xl font-open-sans text-charcoal/80 max-w-2xl mx-auto">
            Discover our carefully crafted dishes that celebrate the rich traditions of Indian cuisine
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`font-open-sans font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-paprika hover:bg-paprika/90 text-cream"
                  : "border-paprika text-paprika hover:bg-paprika hover:text-cream"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.dietary.map((diet) => (
                    <Badge key={diet} className="bg-saffron text-charcoal font-open-sans text-xs">
                      {diet}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-inter font-semibold text-charcoal">
                    {item.name}
                  </h3>
                  <span className="text-lg font-inter font-bold text-paprika">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-charcoal/70 font-open-sans mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {item.spiceLevel > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-open-sans text-charcoal/60">Spice Level:</span>
                    <span className="text-sm">{getSpiceIndicator(item.spiceLevel)}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
