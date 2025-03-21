
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if the current path matches the link
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0a0e17]/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-[#0A4DA6]">IRCTC</span>
            <span className="ml-1 text-xs md:text-sm text-gray-300 italic mt-1">Redesigned</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={cn("nav-link", isActive("/") && "active")}
            >
              Home
            </Link>
            <Link
              to="/trains/search"
              className={cn("nav-link", isActive("/trains/search") && "active")}
            >
              Book Tickets
            </Link>
            <Link
              to="/trains/track"
              className={cn("nav-link", isActive("/trains/track") && "active")}
            >
              Track Train
            </Link>
            <div className="relative group">
              <button className="nav-link flex items-center">
                Services <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#0a0e17]/95 backdrop-blur-md shadow-medium rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2 px-3">
                  <Link to="/trains/search?query=pnr" className="block py-2 px-3 hover:bg-[#131B2E] text-gray-300 hover:text-white rounded-lg transition-colors">
                    PNR Status
                  </Link>
                  <Link to="/trains/search?query=fare" className="block py-2 px-3 hover:bg-[#131B2E] text-gray-300 hover:text-white rounded-lg transition-colors">
                    Fare Enquiry
                  </Link>
                  <Link to="/trains/track" className="block py-2 px-3 hover:bg-[#131B2E] text-gray-300 hover:text-white rounded-lg transition-colors">
                    Train Schedule
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Side - Auth & Search */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/login">
              <Button variant="outline" size="sm" className="rounded-xl border-[#0A4DA6] text-[#0A4DA6] hover:bg-[#0A4DA6]/10 bg-transparent">
                Login
              </Button>
            </Link>
            <Link to="/login?register=true">
              <Button variant="default" size="sm" className="rounded-xl bg-[#0A4DA6] hover:bg-[#083A7F]">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0e17]/95 backdrop-blur-md absolute left-0 right-0 mt-4 px-4 pt-4 pb-6 border-t border-white/10 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={cn(
                  "px-4 py-2 rounded-lg",
                  isActive("/") ? "bg-[#0A4DA6]/20 text-[#2179DE]" : "text-white hover:bg-[#131B2E]/70"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/trains/search"
                className={cn(
                  "px-4 py-2 rounded-lg",
                  isActive("/trains/search") ? "bg-[#0A4DA6]/20 text-[#2179DE]" : "text-white hover:bg-[#131B2E]/70"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Tickets
              </Link>
              <Link
                to="/trains/track"
                className={cn(
                  "px-4 py-2 rounded-lg",
                  isActive("/trains/track") ? "bg-[#0A4DA6]/20 text-[#2179DE]" : "text-white hover:bg-[#131B2E]/70"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Track Train
              </Link>
              <div className="border-t border-white/10 pt-3 mt-2">
                <p className="text-gray-400 text-sm mb-2 px-4">Services</p>
                <Link to="/trains/search?query=pnr" className="px-4 py-2 block text-white hover:bg-[#131B2E]/70 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                  PNR Status
                </Link>
                <Link to="/trains/search?query=fare" className="px-4 py-2 block text-white hover:bg-[#131B2E]/70 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                  Fare Enquiry
                </Link>
                <Link to="/trains/track" className="px-4 py-2 block text-white hover:bg-[#131B2E]/70 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                  Train Schedule
                </Link>
              </div>
              <div className="flex flex-col space-y-2 pt-3 border-t border-white/10">
                <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-[#0A4DA6] text-[#0A4DA6] hover:bg-[#0A4DA6]/10 bg-transparent"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/login?register=true" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="default"
                    className="w-full rounded-xl bg-[#0A4DA6] hover:bg-[#083A7F]"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
