import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  Palette, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "End-to-End Service",
      description: "Sit back and relax while we handle it all. From planning to execution, we offer a complete wedding management service.",
      icon: Users,
      features: [
        "Complete wedding planning & coordination",
        "Venue bookings & vendor management",
        "Décor design & logistics coordination",
        "Guest management & invitation handling",
        "Timeline planning & day-of coordination",
        "Emergency backup plans & support"
      ],
      price: "Starting from Rs. 2,50,000",
      popular: true
    },
    {
      id: 2,
      title: "Just Book Now Service",
      description: "Easily book your favorite wedding essentials – from venues and caterers to photographers and stylists – all in just a few clicks.",
      icon: Calendar,
      features: [
        "Browse verified vendors instantly",
        "Compare prices & packages easily",
        "Lock your dates hassle-free",
        "Secure online payment options",
        "Direct communication with vendors",
        "Booking confirmation & contracts"
      ],
      price: "5% booking fee only"
    },
    {
      id: 3,
      title: "Customization Services",
      description: "Want a wedding that's uniquely yours? Choose from our flexible, customizable packages tailored to your vision.",
      icon: Palette,
      features: [
        "Traditional Mehndi ceremony packages",
        "Modern Nikah ceremony setups",
        "Barat & Walima celebrations",
        "Custom theme & color coordination",
        "Personalized décor & styling",
        "Flexible budget options"
      ],
      price: "Starting from Rs. 1,50,000"
    }
  ];

  const handleBookNow = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-pearl to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-rose-gold mr-3" />
              <span className="text-rose-gold font-medium text-lg">Our Wedding Services</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
              Making Your Dream Wedding
              <span className="block bg-gradient-to-r from-rose-gold to-rose-gold-light bg-clip-text text-transparent">
                A Reality
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose from our comprehensive wedding services designed to make your special day stress-free, 
              stylish, and truly memorable. Each service is crafted with love and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl group ${
                  service.popular 
                    ? 'border-rose-gold border-2 scale-105 bg-gradient-to-b from-blush to-card' 
                    : 'border-rose-gold/20 hover:border-rose-gold/40'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-rose-gold to-rose-gold-light text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-rose-gold to-rose-gold-light rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-rose-gold transition-colors mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-rose-gold">{service.price}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-rose-gold flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={service.popular ? "hero" : "elegant"}
                    className="w-full group/btn"
                    onClick={handleBookNow}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-b from-background to-pearl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Aasaan Shaadi?
            </h2>
            <p className="text-xl text-muted-foreground">
              We're not just a service provider — we're your wedding partners, dedicated to making your special day perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Verified Vendors",
                description: "All our vendors are thoroughly vetted and verified for quality and reliability.",
                icon: "✓"
              },
              {
                title: "Transparent Pricing",
                description: "No hidden costs. Get clear, upfront pricing for all our services and vendors.",
                icon: "💰"
              },
              {
                title: "24/7 Support",
                description: "Our dedicated team is available round the clock to assist you with any queries.",
                icon: "🕐"
              },
              {
                title: "Digital Experience",
                description: "Seamless digital platform for easy booking, planning, and communication.",
                icon: "📱"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-rose-gold/20 hover:border-rose-gold/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-gold to-rose-gold-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's make your wedding planning journey as beautiful as your special day. 
            Book a consultation with our expert planners today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-rose-gold"
              onClick={handleBookNow}
            >
              Book Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-rose-gold"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;