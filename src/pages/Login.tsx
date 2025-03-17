
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Lock, Eye, EyeOff, Mail, ArrowLeft, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("login");

  // Extract register parameter from URL if present
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("register") === "true") {
      setActiveTab("register");
    }
  }, [location]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-irctc-blue-light/30">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link to="/" className="inline-flex items-center text-irctc-gray-text hover:text-irctc-blue transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 py-8">
          <div className="lg:w-1/2 max-w-md">
            <div className="text-center lg:text-left mb-8">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <span className="text-3xl font-bold text-irctc-blue">IRCTC</span>
                <span className="ml-1 text-sm text-irctc-gray-text italic mt-1">Redesigned</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {activeTab === "login" ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-irctc-gray-text">
                {activeTab === "login" 
                  ? "Log in to your account to manage your train tickets and bookings."
                  : "Sign up for a new account to start booking train tickets easily."}
              </p>
            </div>
            
            <Card className="p-6 shadow-medium border-none animate-scale-in overflow-hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="login" className="rounded-lg">Login</TabsTrigger>
                  <TabsTrigger value="register" className="rounded-lg">Register</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="mt-0">
                  <form className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-irctc-gray-text mb-1">
                        Username or Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-irctc-gray-text" />
                        </div>
                        <Input 
                          type="text" 
                          placeholder="Enter your username or email" 
                          className="form-input pl-10"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm font-medium text-irctc-gray-text">
                          Password
                        </label>
                        <Link to="#" className="text-xs text-irctc-blue hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-irctc-gray-text" />
                        </div>
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Enter your password" 
                          className="form-input pl-10 pr-10"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-irctc-gray-text" />
                          ) : (
                            <Eye className="h-5 w-5 text-irctc-gray-text" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-irctc-blue rounded border-irctc-gray focus:ring-irctc-blue"
                      />
                      <label htmlFor="remember" className="ml-2 block text-sm text-irctc-gray-text">
                        Remember me
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full h-12 bg-irctc-blue hover:bg-irctc-blue-dark text-white rounded-xl font-medium transition-all">
                      Sign In
                    </Button>
                    
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-irctc-gray"></div>
                      <span className="relative px-4 bg-white text-sm text-irctc-gray-text">or continue with</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="border-irctc-gray h-11 rounded-xl">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31v2.77h3.57C21.08,18.3,22.56,15.57,22.56,12.25Z" fill="#4285F4"/>
                          <path d="M12,23c2.97,0,5.46-.98,7.28-2.66l-3.57-2.77c-.99.66-2.26,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53H2.18v2.84C3.99,20.53,7.7,23,12,23Z" fill="#34A853"/>
                          <path d="M5.84,14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43,8.55,1,10.22,1,12s.43,3.45,1.18,4.93l2.85-2.22.81-.62Z" fill="#FBBC05"/>
                          <path d="M12,5.38c1.62,0,3.06.56,4.21,1.64l3.15-3.15C17.45,2.09,14.97,1,12,1,7.7,1,3.99,3.47,2.18,7.07l3.66,2.84c.87-2.6,3.3-4.53,6.16-4.53Z" fill="#EA4335"/>
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="border-irctc-gray h-11 rounded-xl">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.59 18.03 20.33 19.6 18.43C21.16 16.53 22 14.08 22 11.56C22 6.53 17.5 2.04 12 2.04Z" />
                        </svg>
                        Facebook
                      </Button>
                    </div>
                    
                    <p className="text-center text-sm text-irctc-gray-text">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        className="text-irctc-blue hover:underline font-medium"
                        onClick={() => setActiveTab("register")}
                      >
                        Register Now
                      </button>
                    </p>
                  </form>
                </TabsContent>
                
                <TabsContent value="register" className="mt-0">
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-irctc-gray-text mb-1">
                          First Name
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Enter your first name" 
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-irctc-gray-text mb-1">
                          Last Name
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Enter your last name" 
                          className="form-input"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-irctc-gray-text mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-irctc-gray-text" />
                        </div>
                        <Input 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="form-input pl-10"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-irctc-gray-text mb-1">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Smartphone className="h-5 w-5 text-irctc-gray-text" />
                        </div>
                        <Input 
                          type="tel" 
                          placeholder="Enter your mobile number" 
                          className="form-input pl-10"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-irctc-gray-text mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-irctc-gray-text" />
                        </div>
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Create a password" 
                          className="form-input pl-10 pr-10"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-irctc-gray-text" />
                          ) : (
                            <Eye className="h-5 w-5 text-irctc-gray-text" />
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-irctc-gray-text mt-1">
                        Password must be at least 8 characters long with a number and a special character.
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 text-irctc-blue rounded border-irctc-gray focus:ring-irctc-blue"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-irctc-gray-text">
                        I agree to the{" "}
                        <Link to="#" className="text-irctc-blue hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="#" className="text-irctc-blue hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full h-12 bg-irctc-blue hover:bg-irctc-blue-dark text-white rounded-xl font-medium transition-all">
                      Create Account
                    </Button>
                    
                    <p className="text-center text-sm text-irctc-gray-text">
                      Already have an account?{" "}
                      <button
                        type="button"
                        className="text-irctc-blue hover:underline font-medium"
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
          
          {/* Right Side Illustration */}
          <div className="lg:w-1/2 hidden lg:block">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto relative z-10">
                <div className="bg-irctc-blue text-white p-6 rounded-xl mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm opacity-80">Boarding From</p>
                      <p className="font-medium">New Delhi</p>
                    </div>
                    <ArrowRight className="h-5 w-5 mx-4" />
                    <div>
                      <p className="text-sm opacity-80">Destination</p>
                      <p className="font-medium">Mumbai Central</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm opacity-80">Date</p>
                      <p className="font-medium">22 Jul, 2023</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Passengers</p>
                      <p className="font-medium">2 Adults</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-lg">Rajdhani Express</p>
                      <p className="text-sm text-irctc-gray-text">Train No. 12951</p>
                    </div>
                    <div className="bg-irctc-blue-light/40 text-irctc-blue text-xs font-medium px-2.5 py-1 rounded">
                      E-Ticket
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-2xl font-semibold">16:35</p>
                      <p className="text-sm text-irctc-gray-text">NDLS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center px-4">
                      <div className="text-xs text-irctc-gray-text-light">15h 35m</div>
                      <div className="relative w-20 my-2">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-irctc-gray-dark"></div>
                        <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-irctc-blue transform -translate-y-1/2"></div>
                        <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-irctc-blue transform -translate-y-1/2"></div>
                      </div>
                      <div className="text-xs text-irctc-gray-text-light">Non-stop</div>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">08:10</p>
                      <p className="text-sm text-irctc-gray-text">CSMT</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-b border-irctc-gray py-4 my-2">
                    <div className="flex justify-between mb-2">
                      <p className="text-sm text-irctc-gray-text">Coach & Seat</p>
                      <p className="font-medium">A1 - 24, 25</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-irctc-gray-text">PNR Number</p>
                      <p className="font-medium">4528167390</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <p className="text-sm text-irctc-gray-text">Amount Paid</p>
                    <p className="font-semibold">₹3,240</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-irctc-blue-light rounded-full -z-10"></div>
              <div className="absolute -top-8 -left-8 h-24 w-24 bg-irctc-blue opacity-10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
