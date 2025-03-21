import React from "react";
import { Link } from "react-router-dom";
import trainVideo from "../video/trainVideo.mp4";
import vandeBharat from '../images/vandebharat.jpg';
import train from '../images/train.jpg';
import maharaja from '../video/maharaja.mp4';
import banglore_train from '../images/banglore.jpg'

import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import BackgroundVideo from "@/components/BackgroundVideo";
import LiveTrainMap from "@/components/LiveTrainMap";
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
  HeadphonesIcon,
  ChevronRight,
  Sparkles,
  Award,
  PlayCircle
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  // Popular destinations data with Indian locations and updated images
  const popularDestinations = [
    {
      from: "Delhi",
      to: "Mumbai",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop",
      trainName: "Rajdhani Express",
      price: "₹1,800",
      duration: "15h 35m"
    },
    {
      from: "Kolkata",
      to: "Delhi",
      image: "https://images.unsplash.com/photo-1530735606451-8f5f13955328?q=80&w=800&auto=format&fit=crop",
      trainName: "Duronto Express",
      price: "₹2,100",
      duration: "17h 20m"
    },
    {
      from: "Mumbai",
      to: "Goa",
      image: "https://images.unsplash.com/photo-1517427677506-ade074eb1432?q=80&w=800&auto=format&fit=crop",
      trainName: "Jan Shatabdi",
      price: "₹1,100",
      duration: "8h 40m"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The new IRCTC interface is so much cleaner and faster. I booked my ticket in less than 30 seconds. Great improvement!",
      name: "Aarav Patel",
      location: "Mumbai",
      rating: 5
    },
    {
      quote: "I love how easy it is to track my train now. The live updates feature is a game-changer for planning my arrival.",
      name: "Priya Singh",
      location: "Bengaluru",
      rating: 5
    },
    {
      quote: "The seat availability view is so intuitive now. I can easily compare different trains and classes before booking.",
      name: "Vikram Reddy",
      location: "Chennai",
      rating: 5
    }
  ];

  return (
    <div className="page-transition min-h-screen flex flex-col bg-[#0a0e17] text-white">
      <Navbar />
      
      {/* Hero Section with Modern Gradient Background */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-screen">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e17] via-[#0f172a] to-[#1e293b]">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057FF]/10 via-[#0EA5E9]/10 to-[#00FF57]/10 animate-gradient-x"></div>
          {/* Decorative dots pattern */}
          {/* <div className="absolute inset-0 opacity-10 pattern-dots bg-dots-sm"></div> */}
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#0057FF]/20 px-4 py-1 rounded-full animate-pulse-gentle">
                <Sparkles className="h-4 w-4 text-[#0057FF]" />
                <span>Indian Railways Reimagined</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2255b5] to-[#0EA5E9]">
                Experience <span className="text-white">Seamless</span> <br className="hidden md:inline" />
                Railway Journey
              </h1>
              
              <p className="text-lg text-gray-300">
                Book tickets, check train status, and explore tourism packages with our modern redesigned interface.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/trains/search">
                  <Button className="h-12 px-6 rounded-xl bg-[#164094] hover:bg-[#003DB3] text-white shadow-glow-blue">
                    Book Tickets
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/trains/track">
                  <Button variant="outline" className="h-12 px-6 rounded-xl border-[#0057FF] text-[#4f7dfd] hover:bg-[#0057FF]/10 group">
                    Track Train
                    <Train className="h-4 w-4 ml-2 group-hover:animate-train-move" />
                  </Button>
                </Link>
              </div>
              
              {/* Stats highlights */}
              <div className="flex flex-wrap gap-6 pt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#1F2937] flex items-center justify-center">
                    <Clock3 className="h-4 w-4 text-[#0057FF]" />
                  </div>
                  <div>
                    <p className="font-semibold">24/7 Booking</p>
                    <p className="text-gray-400 text-xs">Always available</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#1F2937] flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 text-[#0057FF]" />
                  </div>
                  <div>
                    <p className="font-semibold">Secure Payments</p>
                    <p className="text-gray-400 text-xs">100% safe & secure</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#1F2937] flex items-center justify-center">
                    <Award className="h-4 w-4 text-[#0057FF]" />
                  </div>
                  <div>
                    <p className="font-semibold">Best Prices</p>
                    <p className="text-gray-400 text-xs">No hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              {/* Floating train illustration */}
              <div className="absolute -top-16 -right-10 opacity-10 animate-float">
                {/* <Train size={120} strokeWidth={1} /> */}
              </div>
              
              <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/10 animate-fade-in relative overflow-hidden">
                {/* Decorative blob in the background */}
                {/* <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#0057FF]/20 to-[#0EA5E9]/20 rounded-full opacity-50"></div> */}
                
                <h3 className="text-xl font-semibold mb-6 flex items-center text-white">
                  <Search className="h-5 w-5 mr-2 text-[#0057FF]" />
                  Search Trains
                </h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">From</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          placeholder="Enter city or station" 
                          className="w-full pl-10 bg-[#1F2937] border-[#374151] text-white placeholder:text-gray-500 px-4 py-3 rounded-xl"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">To</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          placeholder="Enter city or station" 
                          className="w-full pl-10 bg-[#1F2937] border-[#374151] text-white placeholder:text-gray-500 px-4 py-3 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Date of Journey</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                          type="date" 
                          className="w-full pl-10 bg-[#1F2937] border-[#374151] text-white px-4 py-3 rounded-xl"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Travel Class</label>
                      <select className="w-full bg-[#1F2937] border-[#374151] text-white px-4 py-3 rounded-xl">
                        <option>All Classes</option>
                        <option>Sleeper (SL)</option>
                        <option>AC 3 Tier (3A)</option>
                        <option>AC 2 Tier (2A)</option>
                        <option>AC First Class (FC)</option>
                        <option>Chair Car (CC)</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full h-12 bg-[#174dba] hover:bg-[#003DB3] text-white rounded-xl font-medium transition-all">
                    <Search className="h-4 w-4 mr-2" /> Search Trains
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-[#374151]">
                  <p className="text-sm text-gray-400 text-center">
                    Popular routes: Delhi-Mumbai, Chennai-Bangalore, Kolkata-Delhi
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              {/* <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-r from-[#0057FF]/30 to-[#0EA5E9]/30 rounded-full -z-10 animate-pulse-gentle blur-xl"></div> */}
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-gradient-to-r from-[#0057FF]/20 to-[#0EA5E9]/20 rounded-full -z-10 blur-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Animated train track */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#3280f5]">
          <div className="train-track">
            <div className="train-animation"></div>
          </div>
        </div>
      </section>
      
      {/* Indian Railways Featured Video Section */}
      <section className="py-20 relative overflow-hidden bg-[#0a0e17]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-medium text-white bg-[#0057FF]/20 px-4 py-1 rounded-full">
              Featured Video
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#0EA5E9]">
              Experience the Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a virtual tour of our luxury train experience across India's scenic routes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
            
            <BackgroundVideo 
              src={maharaja}
              position="relative"
              zIndex={0}
              opacity={0}
              overlay={false}
              controls={true}
              className="w-full aspect-video"
            />
            
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <h3 className="text-white font-semibold">Maharaja Express: A Royal Journey</h3>
                <p className="text-gray-300 text-sm">Experience luxury train travel like never before</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button className="bg-[#0057FF] hover:bg-[#003DB3]">
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch More Videos
            </Button>
            <Button variant="outline" className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF]/10">
              Book a Luxury Trip
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Live Train Map Section with enhanced styling */}
      <section className="py-20 relative overflow-hidden bg-[#0a0e17]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#0EA5E9]">
              Live Train Tracking
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch trains move in real-time across the Indian railway network
            </p>
          </div>
          <LiveTrainMap />
        </div>
      </section>
      
      {/* Indian Railways Journey Showcase */}
      <section className="py-20 relative overflow-hidden">
        <BackgroundVideo 
          src="https://video-previews.elements.envatousercontent.com/h264-video-previews/78e33f7d-d7c6-4c58-aa30-6ed6b8dd6805/39199684.mp4"
          opacity={0.3}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#0EA5E9]">
                Experience Journey Like Never Before
              </h2>
              <p className="text-gray-300 text-lg">
                Immerse yourself in a revolutionary way of train travel with our cutting-edge booking platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/trains/search">
                  <Button className="bg-[#0057FF] hover:bg-[#003DB3] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={vandeBharat}
                alt="Vande Bharat Express"
                className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-r from-[#0057FF]/30 to-[#0EA5E9]/30 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section with enhanced visuals */}
      <section className="py-20 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-medium text-white bg-[#0057FF]/20 px-4 py-1 rounded-full">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#0EA5E9]">Why Book With Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the future of train ticket booking with our redesigned platform offering seamless services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 text-center border-none shadow-glow-blue bg-black/40 backdrop-blur-md border border-white/10 hover:shadow-medium transition-all group">
              <div className="h-14 w-14 bg-gradient-to-r from-[#0057FF] to-[#0EA5E9] text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Fast Booking</h3>
              <p className="text-gray-400">
                Book your tickets in under a minute with our streamlined process.
              </p>
            </Card>
            
            {/* Feature 2 */}
            <Card className="p-6 text-center border-none shadow-glow-blue bg-black/40 backdrop-blur-md border border-white/10 hover:shadow-medium transition-all group">
              <div className="h-14 w-14 bg-gradient-to-r from-[#0057FF] to-[#0EA5E9] text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Secure Payments</h3>
              <p className="text-gray-400">
                Your payment information is always safe with our secure gateways.
              </p>
            </Card>
            
            {/* Feature 3 */}
            <Card className="p-6 text-center border-none shadow-glow-blue bg-black/40 backdrop-blur-md border border-white/10 hover:shadow-medium transition-all group">
              <div className="h-14 w-14 bg-gradient-to-r from-[#0057FF] to-[#0EA5E9] text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <Clock3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Real-time Updates</h3>
              <p className="text-gray-400">
                Stay informed with real-time train status and delay notifications.
              </p>
            </Card>
            
            {/* Feature 4 */}
            <Card className="p-6 text-center border-none shadow-glow-blue bg-black/40 backdrop-blur-md border border-white/10 hover:shadow-medium transition-all group">
              <div className="h-14 w-14 bg-gradient-to-r from-[#0057FF] to-[#0EA5E9] text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <HeadphonesIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">24/7 Support</h3>
              <p className="text-gray-400">
                Our customer service team is available around the clock to assist you.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Popular Routes Section with Carousel - Updated with Indian Railway themed images */}
      <section className="py-20 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0057FF]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0057FF]/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="inline-block text-sm font-medium text-white bg-[#0057FF]/20 px-4 py-1 rounded-full">
                Trending Now
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#0EA5E9]">Popular Destinations</h2>
              <p className="text-gray-400 max-w-2xl">
                Discover the most traveled routes across India with best-in-class trains.
              </p>
            </div>
            <Link to="/trains/list" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF]/10 rounded-xl group">
                View All Routes
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {popularDestinations.map((destination, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 group bg-black/40 backdrop-blur-md border border-white/10">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <img 
                        src={destination.image} 
                        alt={`${destination.from} to ${destination.to}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-xl font-semibold">{destination.from}</span>
                          <ArrowRight className="h-5 w-5" />
                          <span className="text-xl font-semibold">{destination.to}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="font-semibold text-white">{destination.trainName}</h3>
                          <p className="text-sm text-gray-400">Premium Service</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-medium text-white">4.8</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-sm">
                          <p className="text-gray-400">Starting from</p>
                          <p className="font-semibold text-lg text-[#0057FF]">{destination.price}</p>
                        </div>
                        <div className="text-sm text-right">
                          <p className="text-gray-400">Duration</p>
                          <p className="font-medium text-white">{destination.duration}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4 border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF]/10 rounded-lg">
                        View Details
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>
      
      {/* IRCTC App promo section with 3D mockup */}
      <section className="py-20 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots bg-dots-sm opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="bg-gradient-to-r from-[#0057FF]/30 to-[#0EA5E9]/30 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-20 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-20 translate-y-32"></div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#0EA5E9]">Download the IRCTC App</h2>
                <p className="text-lg opacity-90 max-w-lg mb-8">
                  Get the best train booking experience on your mobile with our official app.
                  Book tickets, check PNR status, and get real-time updates on the go.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-14 px-6 bg-[#0057FF] hover:bg-[#003DB3] text-white rounded-xl font-medium">
                    <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.9,19.9l-5.4,2.9c-0.4,0.2-0.9,0.2-1.4,0L5.7,19.9c-0.3-0.2-0.5-0.5-0.5-0.8v-14c0-0.3,0.2-0.7,0.5-0.8 l5.4-2.9c0.4-0.2,0.9-0.2,1.4,0l5.4,2.9c0.3,0.2,0.5,0.5,0.5,0.8v14C18.4,19.4,18.2,19.7,17.9,19.9z M12.1,22.9 c0.9,0,1.8-0.2,2.6-0.7l5.4-2.9c0.9-0.5,1.4-1.4,1.4-2.4v-14c0-1-0.5-1.9-1.4-2.4l-5.4-2.9c-0.8-0.4-1.7-0.7-2.6-0.7 s-1.8,0.2-2.6,0.7l-5.4,2.9c-0.9,0.5-1.4,1.4-1.4,2.4v14c0,1,0.5,1.9,1.4,2.4l5.4,2.9C10.3,22.7,11.2,22.9,12.1,22.9z"/>
                    </svg>
                    Google Play
                  </Button>
                  <Button className="h-14 px-6 bg-[#1F2937] hover:bg-[#2D3748] text-white rounded-xl font-medium">
                    <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.3,10.9c0-3.2,2.6-4.8,2.7-4.8c-1.5-2.2-3.8-2.5-4.6-2.5c-2-0.2-3.8,1.2-4.8,1.2c-1,0-2.5-1.2-4.1-1.1 C3.6,3.7,1.9,4.8,1,6.5c-1.7,3-0.4,7.4,1.2,9.8c0.8,1.2,1.8,2.5,3,2.4c1.2-0.1,1.7-0.8,3.1-0.8c1.4,0,1.9,0.8,3.1,0.7 c1.3-0.1,2.1-1.2,2.9-2.4c0.9-1.3,1.3-2.6,1.3-2.7C15.6,13.6,16.3,12.5,16.3,10.9z M13.7,3.3c0.7-0.8,1.1-1.9,1-3 c-1,0-2.1,0.7-2.8,1.5c-0.6,0.7-1.1,1.9-1,3C11.9,4.9,13,4.1,13.7,3.3z"/>
                    </svg>
                    App Store
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center">
                  <Button variant="outline" size="sm" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Watch Demo
                  </Button>
                  <div className="ml-6 flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-[#0057FF] border-2 border-[#0a0e17]"></div>
                    <div className="h-8 w-8 rounded-full bg-[#0EA5E9] border-2 border-[#0a0e17]"></div>
                    <div className="h-8 w-8 rounded-full bg-[#33C3F0] border-2 border-[#0a0e17]"></div>
                    <div className="h-8 w-8 rounded-full bg-[#D3E4FD] border-2 border-[#0a0e17] flex items-center justify-center text-xs font-bold">+5</div>
                  </div>
                  <span className="ml-2 text-sm text-white/80">1M+ Happy Users</span>
                </div>
              </div>
              
              {/* 3D floating phone mockup */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-64 h-auto animate-float">
                  <div className="absolute inset-0 bg-[#0057FF]/30 blur-xl rounded-3xl transform translate-y-4 scale-90"></div>
                  <img
                    src="https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?q=80&w=512&auto=format&fit=crop"
                    alt="IRCTC Mobile App"
                    className="relative z-10 rounded-3xl border-8 border-[#1F2937] shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Indian Railway Statistics */}
      <section className="py-20 bg-[#0a0e17] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-medium text-white bg-[#0057FF]/20 px-4 py-1 rounded-full">
              IRCTC Statistics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#0EA5E9]">
              India's Railway Network
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The world's fourth largest railway network, covering over 67,000 km
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl text-center">
              <p className="text-4xl font-bold text-[#0057FF]">23M+</p>
              <p className="text-gray-400 mt-2">Passengers Daily</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl text-center">
              <p className="text-4xl font-bold text-[#0057FF]">7,325</p>
              <p className="text-gray-400 mt-2">Stations</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl text-center">
              <p className="text-4xl font-bold text-[#0057FF]">12,617</p>
              <p className="text-gray-400 mt-2">Passenger Trains</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl text-center">
              <p className="text-4xl font-bold text-[#0057FF]">67,415</p>
              <p className="text-gray-400 mt-2">Route Kilometers</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">Electrification Progress</span>
                <span className="text-sm font-medium text-[#0057FF]">84%</span>
              </div>
              <Progress value={84} className="h-2 bg-[#1F2937]" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">Digitization of Bookings</span>
                <span className="text-sm font-medium text-[#0057FF]">92%</span>
              </div>
              <Progress value={92} className="h-2 bg-[#1F2937]" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">On-time Performance</span>
                <span className="text-sm font-medium text-[#0057FF]">78%</span>
              </div>
              <Progress value={78} className="h-2 bg-[#1F2937]" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section with enhanced design */}
      <section className="py-20 bg-[#0a0e17] relative overflow-hidden">
        <div className="curve-bg"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-medium text-white bg-[#0057FF]/20 px-4 py-1 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#0EA5E9]">What Our Users Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from travelers who love our redesigned booking experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-black/40 backdrop-blur-md border border-white/10 hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-400 mb-6 group-hover:text-white transition-colors">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gradient-to-r from-[#0057FF] to-[#0EA5E9] rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
