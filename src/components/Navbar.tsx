import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#08192D]/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-[#2179DE]">IRCTC</span>
            <span className="ml-1 text-xs md:text-sm text-gray-300 italic mt-1">Redesigned</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            {[
              { path: "/", label: "Home" },
              { path: "/trains/search", label: "Book Tickets" },
              { path: "/trains/track", label: "Track Train" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn("nav-link text-gray-300 hover:text-[#2179DE]", isActive(item.path) && "text-[#2179DE]")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-[#2179DE] transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/login">
              <Button variant="outline" className="border-[#2179DE] text-[#2179DE] hover:bg-[#2179DE]/10">
                Login
              </Button>
            </Link>
            <Link to="/login?register=true">
              <Button variant="default" className="bg-[#2179DE] hover:bg-[#1257A6]">
                Register
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-2 text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;