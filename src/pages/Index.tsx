
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Train, 
  Search, 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Zap, 
  Clock3,
  PhoneCall,
  HeadphonesIcon
} from "lucide-react";

const Index = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gradient-to-b from-white to-irctc-blue-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <span className="inline-block text-sm font-medium text-irctc-blue bg-irctc-blue-light px-4 py-1 rounded-full">
                Simplify Your Journey
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-irctc-black tracking-tight">
                Experience Seamless <br className="hidden md:inline" />
                <span className="text-irctc-blue">Train Travel</span>
              </h1>
              <p className="text-lg text-irctc-gray-text">
                Book tickets, check train status, and explore tourism packages with our modern redesigned interface.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/trains/search">
                  <Button className="btn-primary h-12 px-6 rounded-xl">
                    Book Tickets
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/trains/track">
                  <Button variant="outline" className="btn-secondary h-12 px-6 rounded-xl">
                    Track Train
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-irctc-gray animate-fade-in">
                <h3 className="text-xl font-semibold mb-6">Search Trains</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-irctc-gray-text mb-1">From</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-irctc-gray-text" />
                        </div>
                        <input 
                          type="text" 
                          placeholder="Enter city or station" 
                          className="form-input pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-irctc-gray-text mb-1">To</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-irctc-gray-text" />
                        </div>
                        <input 
                          type="text" 
                          placeholder="Enter city or station" 
                          className="form-input pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-irctc-gray-text mb-1">Date of Journey</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-irctc-gray-text" />
                        </div>
                        <input 
                          type="date" 
                          className="form-input pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-irctc-gray-text mb-1">Travel Class</label>
                      <select className="form-input">
                        <option>All Classes</option>
                        <option>Sleeper (SL)</option>
                        <option>AC 3 Tier (3A)</option>
                        <option>AC 2 Tier (2A)</option>
                        <option>AC First Class (FC)</option>
                        <option>Chair Car (CC)</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full h-12 bg-irctc-blue hover:bg-irctc-blue-dark text-white rounded-xl font-medium transition-all">
                    <Search className="h-4 w-4 mr-2" /> Search Trains
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-irctc-gray">
                  <p className="text-sm text-irctc-gray-text text-center">Popular routes: Delhi-Mumbai, Chennai-Bangalore, Kolkata-Delhi</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-irctc-blue-light rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-irctc-blue opacity-10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Book With Us</h2>
            <p className="text-irctc-gray-text max-w-2xl mx-auto">
              Experience the future of train ticket booking with our redesigned platform offering seamless services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 text-center border-none shadow-card hover:shadow-medium transition-all">
              <div className="h-14 w-14 bg-irctc-blue-light text-irctc-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Booking</h3>
              <p className="text-irctc-gray-text">
                Book your tickets in under a minute with our streamlined process.
              </p>
            </Card>
            
            {/* Feature 2 */}
            <Card className="p-6 text-center border-none shadow-card hover:shadow-medium transition-all">
              <div className="h-14 w-14 bg-irctc-blue-light text-irctc-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-irctc-gray-text">
                Your payment information is always safe with our secure gateways.
              </p>
            </Card>
            
            {/* Feature 3 */}
            <Card className="p-6 text-center border-none shadow-card hover:shadow-medium transition-all">
              <div className="h-14 w-14 bg-irctc-blue-light text-irctc-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
              <p className="text-irctc-gray-text">
                Stay informed with real-time train status and delay notifications.
              </p>
            </Card>
            
            {/* Feature 4 */}
            <Card className="p-6 text-center border-none shadow-card hover:shadow-medium transition-all">
              <div className="h-14 w-14 bg-irctc-blue-light text-irctc-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <HeadphonesIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-irctc-gray-text">
                Our customer service team is available around the clock to assist you.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Popular Routes Section */}
      <section className="py-20 bg-irctc-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Routes</h2>
              <p className="text-irctc-gray-text max-w-2xl">
                Discover the most traveled routes across India with best-in-class trains.
              </p>
            </div>
            <Link to="/trains/search" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-irctc-blue text-irctc-blue hover:bg-irctc-blue-light rounded-xl">
                View All Routes
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Route Card 1 */}
            <Card className="overflow-hidden hover:shadow-medium transition-all">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-xl font-semibold">Delhi</span>
                      <ArrowRight className="h-5 w-5" />
                      <span className="text-xl font-semibold">Mumbai</span>
                    </div>
                    <p className="text-sm mt-2 opacity-90">19 Daily Trains</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">Rajdhani Express</h3>
                    <p className="text-sm text-irctc-gray-text">Premium Service</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">4.8</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm">
                    <p className="text-irctc-gray-text">Starting from</p>
                    <p className="font-semibold text-lg">₹1,800</p>
                  </div>
                  <div className="text-sm text-right">
                    <p className="text-irctc-gray-text">Duration</p>
                    <p className="font-medium">15h 35m</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Route Card 2 */}
            <Card className="overflow-hidden hover:shadow-medium transition-all">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-xl font-semibold">Chennai</span>
                      <ArrowRight className="h-5 w-5" />
                      <span className="text-xl font-semibold">Bengaluru</span>
                    </div>
                    <p className="text-sm mt-2 opacity-90">24 Daily Trains</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">Shatabdi Express</h3>
                    <p className="text-sm text-irctc-gray-text">Fast Service</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">4.7</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm">
                    <p className="text-irctc-gray-text">Starting from</p>
                    <p className="font-semibold text-lg">₹950</p>
                  </div>
                  <div className="text-sm text-right">
                    <p className="text-irctc-gray-text">Duration</p>
                    <p className="font-medium">6h 15m</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Route Card 3 */}
            <Card className="overflow-hidden hover:shadow-medium transition-all">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-600 relative">
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-xl font-semibold">Kolkata</span>
                      <ArrowRight className="h-5 w-5" />
                      <span className="text-xl font-semibold">Delhi</span>
                    </div>
                    <p className="text-sm mt-2 opacity-90">11 Daily Trains</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">Duronto Express</h3>
                    <p className="text-sm text-irctc-gray-text">Non-stop Service</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">4.6</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm">
                    <p className="text-irctc-gray-text">Starting from</p>
                    <p className="font-semibold text-lg">₹2,100</p>
                  </div>
                  <div className="text-sm text-right">
                    <p className="text-irctc-gray-text">Duration</p>
                    <p className="font-medium">17h 20m</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-irctc-blue to-blue-600 rounded-2xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download the IRCTC App</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Get the best train booking experience on your mobile with our official app.
              Book tickets, check PNR status, and get real-time updates on the go.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="h-14 px-6 bg-white text-irctc-blue hover:bg-gray-100 rounded-xl font-medium">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9,19.9l-5.4,2.9c-0.4,0.2-0.9,0.2-1.4,0L5.7,19.9c-0.3-0.2-0.5-0.5-0.5-0.8v-14c0-0.3,0.2-0.7,0.5-0.8 l5.4-2.9c0.4-0.2,0.9-0.2,1.4,0l5.4,2.9c0.3,0.2,0.5,0.5,0.5,0.8v14C18.4,19.4,18.2,19.7,17.9,19.9z M12.1,22.9 c0.9,0,1.8-0.2,2.6-0.7l5.4-2.9c0.9-0.5,1.4-1.4,1.4-2.4v-14c0-1-0.5-1.9-1.4-2.4l-5.4-2.9c-0.8-0.4-1.7-0.7-2.6-0.7 s-1.8,0.2-2.6,0.7l-5.4,2.9c-0.9,0.5-1.4,1.4-1.4,2.4v14c0,1,0.5,1.9,1.4,2.4l5.4,2.9C10.3,22.7,11.2,22.9,12.1,22.9z"/>
                </svg>
                Google Play
              </Button>
              <Button className="h-14 px-6 bg-white text-irctc-blue hover:bg-gray-100 rounded-xl font-medium">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.3,10.9c0-3.2,2.6-4.8,2.7-4.8c-1.5-2.2-3.8-2.5-4.6-2.5c-2-0.2-3.8,1.2-4.8,1.2c-1,0-2.5-1.2-4.1-1.1 C3.6,3.7,1.9,4.8,1,6.5c-1.7,3-0.4,7.4,1.2,9.8c0.8,1.2,1.8,2.5,3,2.4c1.2-0.1,1.7-0.8,3.1-0.8c1.4,0,1.9,0.8,3.1,0.7 c1.3-0.1,2.1-1.2,2.9-2.4c0.9-1.3,1.3-2.6,1.3-2.7C15.6,13.6,16.3,12.5,16.3,10.9z M13.7,3.3c0.7-0.8,1.1-1.9,1-3 c-1,0-2.1,0.7-2.8,1.5c-0.6,0.7-1.1,1.9-1,3C11.9,4.9,13,4.1,13.7,3.3z"/>
                </svg>
                App Store
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-irctc-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-irctc-gray-text max-w-2xl mx-auto">
              Hear from travelers who love our redesigned booking experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
              </div>
              <p className="text-irctc-gray-text mb-6">
                "The new IRCTC interface is so much cleaner and faster. I booked my ticket in less than 30 seconds. Great improvement!"
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">Aarav Patel</p>
                  <p className="text-sm text-irctc-gray-text">Mumbai</p>
                </div>
              </div>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
              </div>
              <p className="text-irctc-gray-text mb-6">
                "I love how easy it is to track my train now. The live updates feature is a game-changer for planning my arrival."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">Priya Singh</p>
                  <p className="text-sm text-irctc-gray-text">Bengaluru</p>
                </div>
              </div>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400" />
              </div>
              <p className="text-irctc-gray-text mb-6">
                "The seat availability view is so intuitive now. I can easily compare different trains and classes before booking."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">Vikram Reddy</p>
                  <p className="text-sm text-irctc-gray-text">Chennai</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
