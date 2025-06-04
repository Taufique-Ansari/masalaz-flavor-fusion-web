
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    partySize: "",
    time: "",
    specialRequests: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, date });
    // Handle form submission logic here
  };

  const timeSlots = [
    "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-charcoal mb-6">
            Contact & Reservations
          </h2>
          <p className="text-xl font-open-sans text-charcoal/80 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch or make a reservation today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information & Map */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-inter font-bold text-charcoal mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-charcoal">Phone</h4>
                  <p className="font-open-sans text-charcoal/70">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-paprika rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cream" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-charcoal">Email</h4>
                  <p className="font-open-sans text-charcoal/70">info@masalazonerestaurant.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-charcoal">Address</h4>
                  <p className="font-open-sans text-charcoal/70">
                    123 Spice Street<br />
                    Flavor District, FD 12345
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-paprika rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-cream" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-charcoal">Hours</h4>
                  <p className="font-open-sans text-charcoal/70">
                    Daily: 11:30 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-cream rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-paprika mx-auto mb-4" />
                <p className="font-open-sans text-charcoal/70">
                  Interactive Map Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-inter font-bold text-charcoal mb-8">
              Make a Reservation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-open-sans font-medium text-charcoal mb-2">
                    Name *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    className="font-open-sans"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-open-sans font-medium text-charcoal mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="font-open-sans"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-open-sans font-medium text-charcoal mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className="font-open-sans"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-open-sans font-medium text-charcoal mb-2">
                    Party Size *
                  </label>
                  <Select onValueChange={(value) => handleInputChange("partySize", value)}>
                    <SelectTrigger className="font-open-sans">
                      <SelectValue placeholder="Select party size" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                        <SelectItem key={size} value={size.toString()}>
                          {size} {size === 1 ? "person" : "people"}
                        </SelectItem>
                      ))}
                      <SelectItem value="9+">9+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-open-sans font-medium text-charcoal mb-2">
                    Date *
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-open-sans",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-open-sans font-medium text-charcoal mb-2">
                    Time *
                  </label>
                  <Select onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger className="font-open-sans">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-open-sans font-medium text-charcoal mb-2">
                  Special Requests
                </label>
                <Textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  placeholder="Any special dietary requirements, celebrations, or requests..."
                  className="font-open-sans"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-paprika hover:bg-paprika/90 text-cream font-open-sans font-semibold py-3 text-lg"
              >
                Make Reservation
              </Button>
            </form>

            <div className="mt-8 p-4 bg-cream rounded-lg">
              <p className="font-open-sans text-sm text-charcoal/70 text-center">
                For parties of 9 or more, please call us directly at (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
