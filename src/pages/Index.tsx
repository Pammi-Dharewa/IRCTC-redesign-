import React from "react";
import { Link } from "react-router-dom";
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
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1472&auto=format&fit=crop",
      trainName: "Rajdhani Express",
      price: "₹1,800",
      duration: "15h 35m"
    },
    {
      from: "Chennai",
      to: "Bengaluru",
      image: "https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?q=80&w=1470&auto=format&fit=crop",
      trainName: "Shatabdi Express",
      price: "₹950",
      duration: "6h 15m"
    },
    {
      from: "Kolkata",
      to: "Delhi",
      image: "https://images.unsplash.com/photo-1516409590604-34b8ebd5a6f1?q=80&w=1374&auto=format&fit=crop",
      trainName: "Duronto Express",
      price: "₹2,100",
      duration: "17h 20m"
    },
    {
      from: "Mumbai",
      to: "Goa",
      image: "https://images.unsplash.com/photo-1591991884048-0c60eae84fbe?q=80&w=1473&auto=format&fit=crop",
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
      
      {/* Hero Section with Video Background - updated with Indian Railway video */}
      <section className="pt-24 md:pt-32 pb-20 relative overflow-hidden min-h-[90vh] md:min-h-screen">
        <BackgroundVideo 
          src="https://player.vimeo.com/progressive_redirect/playback/745598097/rendition/720p/file.mp4?loc=external&signature=48c27c360f5c94ba4c32c1ce3a89ab98c3c30bd3471b0a2f11a85d64eec5cf12"
          opacity={0.7}
          fallbackImage="https://images.unsplash.com/photo-1601629665203-f9f2b8d07424?q=80&w=2084&auto=format&fit=crop"
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#0A4DA6]/20 px-4 py-1 rounded-full animate-pulse-gentle">
                <Sparkles className="h-4 w-4 text-[#0A4DA6]" />
                <span>Indian Railways Reimagined</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0A4DA6] to-[#2179DE]">
                Experience <span className="text-white">Seamless</span> <br className="hidden md:inline" />
                Railway Journey
              </h1>
              
              <p className="text-lg text-gray-300">
                Book tickets, check train status, and explore tourism packages with our modern redesigned interface.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/trains/search">
                  <Button className="h-12 px-6 rounded-xl bg-[#0A4DA6] hover:bg-[#083A7F] text-white shadow-glow-blue">
                    Book Tickets
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/trains/track">
                  <Button variant="outline" className="h-12 px-6 rounded-xl border-[#0A4DA6] text-[#0A4DA6] hover:bg-[#0A4DA6]/10 group">
                    Track Train
                    <Train className="h-4 w-4 ml-2 group-hover:animate-train-move" />
                  </Button>
                </Link>
              </div>
              
              {/* Stats highlights */}
              <div className="flex flex-wrap gap-6 pt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#1F2937] flex items-center justify-center">
                    <Clock3 className="h-4 w-4 text-[#0A4DA6]" />
                  </div>
                  <div>
                    <p className="font-semibold">24/7 Booking</p>
                    <p className="text-gray-400 text-xs">Always available</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#1F2937] flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 text-[#0A4DA6]" />
                  </div>
                  <div>
                    <p className="font-semibold">Secure Payments</p>
                    <p className="text-gray-400 text-xs">100% safe & secure</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#1F2937] flex items-center justify-center">
                    <Award className="h-4 w-4 text-[#0A4DA6]" />
                  </div>
                  <div>
                    <p className="font-semibold">Best Prices</p>
                    <p className="text-gray-400 text-xs">No hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative w-full mt-8 md:mt-0">
              {/* Floating train illustration */}
              <div className="absolute -top-16 -right-10 opacity-10 animate-float hidden md:block">
                <Train size={120} strokeWidth={1} />
              </div>
              
              <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/10 animate-fade-in relative overflow-hidden">
                {/* Decorative blob in the background */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#0A4DA6]/20 to-[#2179DE]/20 rounded-full opacity-50"></div>
                
                <h3 className="text-xl font-semibold mb-6 flex items-center text-white">
                  <Search className="h-5 w-5 mr-2 text-[#0A4DA6]" />
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
                  
                  <Button className="w-full h-12 bg-[#0A4DA6] hover:bg-[#083A7F] text-white rounded-xl font-medium transition-all">
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
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-r from-[#0A4DA6]/30 to-[#2179DE]/30 rounded-full -z-10 animate-pulse-gentle blur-xl"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-gradient-to-r from-[#0A4DA6]/20 to-[#2179DE]/20 rounded-full -z-10 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Indian Railways Featured Video Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#0a0e17]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-medium text-white bg-[#0A4DA6]/20 px-4 py-1 rounded-full">
              Featured Video
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0A4DA6] to-[#2179DE]">
              Experience the Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a virtual tour of our luxury train experience across India's scenic routes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
            
            <BackgroundVideo 
              src="https://player.vimeo.com/progressive_redirect/playback/704122252/rendition/720p/file.mp4?loc=external&signature=00f5ed8e9a5a2ec0ccb557e7d2be5642d9d232e9a1a18e709b159425d2b5f4be"
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
            <Button className="bg-[#0A4DA6] hover:bg-[#083A7F]">
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch More Videos
            </Button>
            <Button variant="outline" className="border-[#0A4DA6] text-[#0A4DA6] hover:bg-[#0A4DA6]/10">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0A4DA6] to-[#2179DE]">
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
          src="https://player.vimeo.com/progressive_redirect/playback/834747046/rendition/720p/file.mp4?loc=external&signature=2b1a9cfce937da76e63c75dd1d7e4b191251eaa8d9de9f76a07f22eeb83cbce0"
          opacity={0.3}
          fallbackImage="https://images.unsplash.com/photo-1600105641896-41b2b9d9de71?q=80&w=1374&auto=format&fit=crop"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0A4DA6] to-[#2179DE]">
                Experience Journey Like Never Before
              </h2>
              <p className="text-gray-300 text-lg">
                Immerse yourself in a revolutionary way of train travel with our cutting-edge booking platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/trains/search">
                  <Button className="bg-[#0A4DA6] hover:bg-[#083A7F] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1656425275056-9de2bb62bdaa?q=80&w=1374&auto=format&fit=crop"
                alt="Indian Railways Luxury Train"
                className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-r from-[#0A4DA6]/30 to-[#2179DE]/30 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section with enhanced visuals */}
      <section className="py-20 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-medium text-white bg-[#0A4DA6]/20 px-4 py-1 rounded-full">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0A4DA6] to-[#2179DE]">

