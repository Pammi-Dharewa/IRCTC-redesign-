
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Lock, Eye, EyeOff, Mail, ArrowLeft, Smartphone, Train } from "lucide-react";
import { cn } from "@/lib/utils";
import BackgroundVideo from "@/components/BackgroundVideo";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("login");
  const [videoSource, setVideoSource] = useState<string>("https://cdn.coverr.co/videos/coverr-train-journey-through-scenic-mountains-453/1080p.mp4");

  // Alternate video sources for fallbacks
  const videoSources = [
    "https://cdn.coverr.co/videos/coverr-train-journey-through-scenic-mountains-453/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-train-passing-through-mountains-5224/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-train-moving-through-tunnel-369/1080p.mp4"
  ];

  const fallbackImage = "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2084&auto=format&fit=crop";

  // Extract register parameter from URL if present
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("register") === "true") {
      setActiveTab("register");
    }
    
    // Randomly select a video
    const randomVideo = videoSources[Math.floor(Math.random() * videoSources.length)];
    setVideoSource(randomVideo);
  }, [location]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0a0e17]">
      {/* Background Elements */}
      <BackgroundVideo src={videoSource} opacity={0.7} fallbackImage={fallbackImage} />
      
      {/* Animated railtrack */}
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden">
        <div className="train-track w-full h-4 absolute bottom-2"></div>
        <div className="train-animation"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8 relative z-10">
        <Link to="/" className="inline-flex items-center text-white hover:text-[#2179DE] transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="flex flex-col items-center justify-center gap-8 py-4 md:py-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-6 md:mb-8">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <Train className="h-6 w-6 md:h-8 md:w-8 text-[#2179DE] mr-2 animate-float" />
                <span className="text-2xl md:text-3xl font-bold text-white">IRCTC</span>
                <span className="ml-1 text-xs md:text-sm text-gray-300 italic mt-1">Redesigned</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0A4DA6] to-[#2179DE]">
                {activeTab === "login" ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-sm md:text-base text-gray-300 max-w-sm mx-auto">
                {activeTab === "login" 
                  ? "Log in to your account to manage your train tickets and bookings."
                  : "Sign up for a new account to start booking train tickets easily."}
              </p>
            </div>
            
            <Card className="p-4 md:p-6 shadow-glow-blue border-none animate-scale-in overflow-hidden backdrop-blur-md bg-black/40 border border-white/10">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 mb-4 md:mb-6 bg-[#131B2E] text-white">
                  <TabsTrigger value="login" className="data-[state=active]:bg-[#0A4DA6] data-[state=active]:text-white rounded-lg">Login</TabsTrigger>
                  <TabsTrigger value="register" className="data-[state=active]:bg-[#0A4DA6] data-[state=active]:text-white rounded-lg">Register</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="mt-0">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Username or Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input 
                          type="text" 
                          placeholder="Enter your username or email" 
                          className="form-input pl-10 bg-[#131B2E]/70 border-[#374151] text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm font-medium text-gray-300">
                          Password
                        </label>
                        <Link to="#" className="text-xs text-[#2179DE] hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Enter your password" 
                          className="form-input pl-10 pr-10 bg-[#131B2E]/70 border-[#374151] text-white placeholder:text-gray-500"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-[#0A4DA6] rounded border-[#374151] focus:ring-[#0A4DA6] bg-[#131B2E]"
                      />
                      <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                        Remember me
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full h-11 md:h-12 bg-[#0A4DA6] hover:bg-[#083A7F] text-white rounded-xl font-medium transition-all">
                      Sign In
                    </Button>
                    
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-gray-700"></div>
                      <span className="relative px-4 bg-black/40 text-sm text-gray-400">or continue with</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <Button variant="outline" className="border-gray-700 h-10 md:h-11 rounded-xl bg-[#131B2E]/70 text-white hover:bg-[#131B2E]">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31v2.77h3.57C21.08,18.3,22.56,15.57,22.56,12.25Z" fill="#4285F4"/>
                          <path d="M12,23c2.97,0,5.46-.98,7.28-2.66l-3.57-2.77c-.99.66-2.26,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53H2.18v2.84C3.99,20.53,7.7,23,12,23Z" fill="#34A853"/>
                          <path d="M5.84,14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43,8.55,1,10.22,1,12s.43,3.45,1.18,4.93l2.85-2.22.81-.62Z" fill="#FBBC05"/>
                          <path d="M12,5.38c1.62,0,3.06.56,4.21,1.64l3.15-3.15C17.45,2.09,14.97,1,12,1,7.7,1,3.99,3.47,2.18,7.07l3.66,2.84c.87-2.6,3.3-4.53,6.16-4.53Z" fill="#EA4335"/>
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="border-gray-700 h-10 md:h-11 rounded-xl bg-[#131B2E]/70 text-white hover:bg-[#131B2E]">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.59 18.03 20.33 19.6 18.43C21.16 16.53 22 14.08 22 11.56C22 6.53 17.5 2.04 12 2.04Z" fill="#1877F2"/>
                        </svg>
                        Facebook
                      </Button>
                    </div>
                    
                    <p className="text-center text-sm text-gray-400">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        className="text-[#2179DE] hover:underline font-medium"
                        onClick={() => setActiveTab("register")}
                      >
                        Register Now
                      </button>
                    </p>
                  </form>
                </TabsContent>
                
                <TabsContent value="register" className="mt-0">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          First Name
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Enter your first name" 
                          className="form-input bg-[#131B2E]/70 border-[#374151] text-white placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Last Name
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Enter your last name" 
                          className="form-input bg-[#131B2E]/70 border-[#374151] text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="form-input pl-10 bg-[#131B2E]/70 border-[#374151] text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Smartphone className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input 
                          type="tel" 
                          placeholder="Enter your mobile number" 
                          className="form-input pl-10 bg-[#131B2E]/70 border-[#374151] text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Create a password" 
                          className="form-input pl-10 pr-10 bg-[#131B2E]/70 border-[#374151] text-white placeholder:text-gray-500"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Password must be at least 8 characters long with a number and a special character.
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 text-[#0A4DA6] rounded border-[#374151] focus:ring-[#0A4DA6] bg-[#131B2E]"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                        I agree to the{" "}
                        <Link to="#" className="text-[#2179DE] hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="#" className="text-[#2179DE] hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full h-11 md:h-12 bg-[#0A4DA6] hover:bg-[#083A7F] text-white rounded-xl font-medium transition-all">
                      Create Account
                    </Button>
                    
                    <p className="text-center text-sm text-gray-400">
                      Already have an account?{" "}
                      <button
                        type="button"
                        className="text-[#2179DE] hover:underline font-medium"
                        onClick={() => setActiveTab("login")}
                      >
                        Sign In
                      </button>
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
