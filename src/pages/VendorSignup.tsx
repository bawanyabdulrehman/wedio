import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";
import { 
  Heart, 
  Mail, 
  Lock, 
  Building2,
  User,
  Phone,
  MapPin,
  Eye,
  EyeOff,
  ArrowLeft,
  Check
} from "lucide-react";

const VendorSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    ownerName: "",
    cnic: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
    serviceCategories: [] as string[],
    termsAccepted: false
  });

  const serviceCategories = [
    { id: "venues", name: "Venues", emoji: "🏛️", description: "Wedding halls, outdoor venues, farmhouses" },
    { id: "catering", name: "Catering", emoji: "🍽️", description: "Food services, menu planning, staff" },
    { id: "photography", name: "Photography", emoji: "📸", description: "Wedding photography, videography" },
    { id: "makeup", name: "Makeup Artists", emoji: "💄", description: "Bridal makeup, party makeup" },
    { id: "wardrobe", name: "Wardrobe", emoji: "👗", description: "Wedding dresses, designer outfits" },
    { id: "henna", name: "Henna Artists", emoji: "🎨", description: "Mehendi designs, traditional art" },
    { id: "decoration", name: "Decoration", emoji: "✨", description: "Wedding décor, floral arrangements" },
    { id: "music", name: "Music & Entertainment", emoji: "🎵", description: "Live music, DJ services" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFormData(prev => ({
      ...prev,
      serviceCategories: prev.serviceCategories.includes(categoryId)
        ? prev.serviceCategories.filter(id => id !== categoryId)
        : [...prev.serviceCategories, categoryId]
    }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.businessName || !formData.businessType || !formData.ownerName || !formData.cnic || !formData.email || !formData.phone || !formData.address || !formData.city) {
        toast.error("Please fill in all required fields");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (formData.serviceCategories.length === 0) {
        toast.error("Please select at least one service category");
        return;
      }
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    if (!formData.termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setIsLoading(true);

    // Simulate vendor registration process
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success("Vendor account created successfully! Welcome to Aasaan Shaadi!");
    setIsLoading(false);
    
    // Redirect to vendor dashboard after successful registration
    setTimeout(() => {
      navigate("/vendor-dashboard");
    }, 1000);
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="businessName" className="text-foreground">Business Name *</Label>
          <Input
            id="businessName"
            name="businessName"
            placeholder="Enter your business name"
            value={formData.businessName}
            onChange={handleInputChange}
            className="border-rose-gold/30 focus:border-rose-gold"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessType" className="text-foreground">Business Type *</Label>
          <Input
            id="businessType"
            name="businessType"
            placeholder="e.g., Venue, Catering, Photography"
            value={formData.businessType}
            onChange={handleInputChange}
            className="border-rose-gold/30 focus:border-rose-gold"
            required
          />
        </div>
      </div>

             <div className="space-y-2">
         <Label htmlFor="ownerName" className="text-foreground">Owner/Manager Name *</Label>
         <div className="relative">
           <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
           <Input
             id="ownerName"
             name="ownerName"
             placeholder="Enter owner/manager name"
             value={formData.ownerName}
             onChange={handleInputChange}
             className="pl-10 border-rose-gold/30 focus:border-rose-gold"
             required
           />
         </div>
       </div>

       <div className="space-y-2">
         <Label htmlFor="cnic" className="text-foreground">CNIC Number *</Label>
         <Input
           id="cnic"
           name="cnic"
           placeholder="00000-0000000-0"
           value={formData.cnic}
           onChange={handleInputChange}
           className="border-rose-gold/30 focus:border-rose-gold"
           required
         />
       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Business Email *</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter business email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 border-rose-gold/30 focus:border-rose-gold"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="pl-10 border-rose-gold/30 focus:border-rose-gold"
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-foreground">Business Address *</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="address"
            name="address"
            placeholder="Enter business address"
            value={formData.address}
            onChange={handleInputChange}
            className="pl-10 border-rose-gold/30 focus:border-rose-gold"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="city" className="text-foreground">City *</Label>
        <Input
          id="city"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleInputChange}
          className="border-rose-gold/30 focus:border-rose-gold"
          required
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Select Your Service Categories</h3>
        <p className="text-muted-foreground">Choose the services you want to offer to customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {serviceCategories.map((category) => (
          <div
            key={category.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              formData.serviceCategories.includes(category.id)
                ? 'border-rose-gold bg-rose-gold/5'
                : 'border-rose-gold/20 hover:border-rose-gold/40'
            }`}
            onClick={() => handleCategoryToggle(category.id)}
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{category.emoji}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{category.name}</h4>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              {formData.serviceCategories.includes(category.id) && (
                <div className="bg-rose-gold text-white p-1 rounded-full">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Selected: <span className="font-semibold text-rose-gold">{formData.serviceCategories.length}</span> categories
        </p>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password" className="text-foreground">Create Password *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleInputChange}
            className="pl-10 pr-10 border-rose-gold/30 focus:border-rose-gold"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-rose-gold"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="pl-10 pr-10 border-rose-gold/30 focus:border-rose-gold"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-rose-gold"
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.termsAccepted}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked as boolean }))}
          className="border-rose-gold/30 data-[state=checked]:bg-rose-gold data-[state=checked]:border-rose-gold"
        />
        <label htmlFor="terms" className="text-sm text-muted-foreground">
          I agree to the{" "}
          <button type="button" className="text-rose-gold hover:underline">
            Terms of Service
          </button>{" "}
          and{" "}
          <button type="button" className="text-rose-gold hover:underline">
            Privacy Policy
          </button>
        </label>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-background to-blush flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative w-full max-w-2xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")} 
          className="mb-6 text-muted-foreground hover:text-rose-gold"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Logo & Welcome */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-rose-gold to-rose-gold-light p-3 rounded-full group-hover:shadow-lg transition-all duration-300">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-gold to-rose-gold-dark bg-clip-text text-transparent">
              Aasaan Shaadi
            </span>
          </Link>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <Building2 className="h-5 w-5 text-rose-gold" />
            <span className="text-lg font-semibold text-foreground">Vendor Registration</span>
          </div>
          <p className="text-muted-foreground mt-3">
            Join our vendor network and start offering your services to customers
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Step {step} of 3</span>
            <span className="text-sm text-muted-foreground">
              {step === 1 ? "Business Information" : step === 2 ? "Service Categories" : "Account Setup"}
            </span>
          </div>
          <div className="w-full bg-rose-gold/20 rounded-full h-2">
            <div 
              className="bg-rose-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Registration Card */}
        <Card className="border-rose-gold/20 shadow-2xl backdrop-blur-sm bg-white/95">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              {step === 1 ? "Business Information" : step === 2 ? "Service Categories" : "Create Account"}
            </CardTitle>
            <CardDescription>
              {step === 1 
                ? "Tell us about your business" 
                : step === 2 
                ? "Select the services you offer" 
                : "Set up your account credentials"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                {step > 1 && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handlePrevStep}
                    className="border-rose-gold/30 hover:border-rose-gold"
                  >
                    Previous
                  </Button>
                )}
                
                {step < 3 ? (
                  <Button 
                    type="button" 
                    variant="hero" 
                    onClick={handleNextStep}
                    className="ml-auto"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="ml-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating Account...
                      </>
                    ) : (
                      "Create Vendor Account"
                    )}
                  </Button>
                )}
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have a vendor account?{" "}
                <Link to="/vendor-login" className="text-rose-gold hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorSignup;
