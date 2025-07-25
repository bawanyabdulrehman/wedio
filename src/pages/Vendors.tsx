import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useSearchParams } from "react-router-dom";
import { 
  Utensils, 
  Camera, 
  MapPin, 
  Palette, 
  Users, 
  Crown,
  Brush,
  Star,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Vendors = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

  const categories = [
    { id: 'all', name: 'All Vendors', icon: Users, count: 500 },
    { id: 'catering', name: 'Caterers', icon: Utensils, count: 85, emoji: '🍽' },
    { id: 'venues', name: 'Venues', icon: MapPin, count: 120, emoji: '🏛' },
    { id: 'makeup', name: 'Makeup Artists', icon: Brush, count: 95, emoji: '💄' },
    { id: 'wardrobe', name: 'Wardrobe & Designers', icon: Crown, count: 75, emoji: '👗' },
    { id: 'henna', name: 'Henna Mehendi Artists', icon: Palette, count: 60, emoji: '🎨' },
    { id: 'photographers', name: 'Photographers', icon: Camera, count: 65, emoji: '📸' }
  ];

  const vendors = {
    catering: [
      {
        id: 1,
        name: "Traditional Delights Catering",
        description: "From traditional Pakistani cuisine to international menus, we create culinary experiences that delight every palate.",
        location: "Gulshan-e-Iqbal, Karachi",
        rating: 4.8,
        price: "Rs. 2,500/person",
        specialty: "Pakistani & Mughlai Cuisine",
        image: "🍽️"
      },
      {
        id: 2,
        name: "Royal Feast Catering",
        description: "Elegant dining experiences with both local and international cuisine options for your special celebration.",
        location: "PECHS, Karachi",
        rating: 4.9,
        price: "Rs. 3,200/person",
        specialty: "International & Local Fusion",
        image: "👑"
      },
      {
        id: 3,
        name: "Spice Garden Caterers",
        description: "Authentic Pakistani flavors with a modern twist, perfect for traditional wedding celebrations.",
        location: "DHA Phase 5, Karachi",
        rating: 4.7,
        price: "Rs. 2,800/person",
        specialty: "Traditional Pakistani",
        image: "🌶️"
      }
    ],
    venues: [
      {
        id: 1,
        name: "Royal Gardens Banquet Hall",
        description: "Luxurious banquet hall with crystal chandeliers and elegant décor for unforgettable celebrations.",
        location: "Clifton, Karachi",
        rating: 4.8,
        price: "Rs. 2,50,000",
        specialty: "Banquet Halls",
        capacity: "500-800 guests",
        image: "🏰"
      },
      {
        id: 2,
        name: "Seaside Palace",
        description: "Beautiful beachside venue offering stunning ocean views for outdoor wedding ceremonies.",
        location: "DHA Phase 8, Karachi",
        rating: 4.9,
        price: "Rs. 3,50,000",
        specialty: "Beachside Setups",
        capacity: "300-500 guests",
        image: "🌊"
      },
      {
        id: 3,
        name: "Green Valley Farmhouse",
        description: "Spacious farmhouse venue surrounded by lush gardens, perfect for traditional ceremonies.",
        location: "Malir, Karachi",
        rating: 4.6,
        price: "Rs. 1,80,000",
        specialty: "Farmhouses",
        capacity: "400-600 guests",
        image: "🌿"
      }
    ],
    makeup: [
      {
        id: 1,
        name: "Bridal Beauty Studio",
        description: "Professional bridal makeup with traditional and modern looks for your special day.",
        location: "Gulshan-e-Iqbal, Karachi",
        rating: 4.9,
        price: "Rs. 25,000",
        specialty: "Bridal Makeup",
        image: "💄"
      },
      {
        id: 2,
        name: "Glamour Touch",
        description: "Complete beauty packages for bride, family, and wedding party with premium products.",
        location: "Clifton, Karachi",
        rating: 4.7,
        price: "Rs. 30,000",
        specialty: "Party & Family Packages",
        image: "✨"
      }
    ],
    wardrobe: [
      {
        id: 1,
        name: "Elegant Couture",
        description: "Custom wedding outfits and designer collections for rent or purchase.",
        location: "Commercial Area, DHA",
        rating: 4.8,
        price: "Rs. 50,000",
        specialty: "Designer Wedding Outfits",
        image: "👗"
      },
      {
        id: 2,
        name: "Royal Attire",
        description: "Traditional and modern wedding dresses with customization options available.",
        location: "Zamzama, Karachi",
        rating: 4.6,
        price: "Rs. 35,000",
        specialty: "Traditional & Modern",
        image: "👑"
      }
    ],
    henna: [
      {
        id: 1,
        name: "Artistic Mehendi Designs",
        description: "Beautiful customized mehendi designs for brides and wedding parties.",
        location: "Nazimabad, Karachi",
        rating: 4.9,
        price: "Rs. 15,000",
        specialty: "Custom Mehendi Designs",
        image: "🎨"
      },
      {
        id: 2,
        name: "Traditional Henna Art",
        description: "Traditional Pakistani and Arabic henna patterns with modern touches.",
        location: "Korangi, Karachi",
        rating: 4.7,
        price: "Rs. 12,000",
        specialty: "Traditional Patterns",
        image: "🖌️"
      }
    ],
    photographers: [
      {
        id: 1,
        name: "Moments Photography",
        description: "Professional wedding photography capturing every precious moment beautifully.",
        location: "F.B. Area, Karachi",
        rating: 4.8,
        price: "Rs. 80,000",
        specialty: "Wedding Photography",
        image: "📸"
      },
      {
        id: 2,
        name: "Picture Perfect Studios",
        description: "Complete photography and videography packages for your entire wedding celebration.",
        location: "Gulberg, Karachi",
        rating: 4.9,
        price: "Rs. 1,20,000",
        specialty: "Photo & Video Packages",
        image: "🎬"
      }
    ]
  };

  const handleBookNow = () => {
    navigate("/login");
  };

  const getDisplayedVendors = () => {
    if (selectedCategory === 'all') {
      return Object.values(vendors).flat();
    }
    return vendors[selectedCategory as keyof typeof vendors] || [];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-pearl to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-rose-gold mr-3" />
              <span className="text-rose-gold font-medium text-lg">Our Vendor Network</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-8 leading-tight">
              Trusted Wedding
              <span className="block bg-gradient-to-r from-rose-gold to-rose-gold-light bg-clip-text text-transparent">
                Professionals
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover our carefully curated network of verified wedding vendors across Karachi. 
              From caterers to photographers, we've got everything you need for your perfect day.
            </p>
          </div>
        </div>
      </section>

      {/* Vendor Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🤝 Our Vendor Network Includes:
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "hero" : "elegant"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                {category.emoji && <span className="text-lg">{category.emoji}</span>}
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2 bg-white/20">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Vendor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getDisplayedVendors().map((vendor) => (
              <Card key={vendor.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-rose-gold/20 hover:border-rose-gold/40">
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{vendor.image}</div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-rose-gold/10 text-rose-gold">
                      {vendor.specialty}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{vendor.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-rose-gold transition-colors">
                    {vendor.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {vendor.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-rose-gold" />
                      <span className="text-muted-foreground">{vendor.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground">Starting from</p>
                        <p className="text-lg font-bold text-rose-gold">{vendor.price}</p>
                      </div>
                    {'capacity' in vendor && (
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Capacity</p>
                        <p className="text-sm font-medium">{(vendor as any).capacity}</p>
                      </div>
                    )}
                    </div>
                  </div>
                  
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {getDisplayedVendors().length === 0 && (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                No vendors found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category or check back later for new vendors.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-gold to-rose-gold-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Book Your Vendors?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Start booking your favorite vendors today and secure your dream team for your special day.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-rose-gold"
            onClick={handleBookNow}
          >
            Start Booking
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vendors;