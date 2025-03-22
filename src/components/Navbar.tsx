
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Train } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-gradient-to-r from-irctc-darkest/95 to-irctc-dark/95 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="relative">
              <Train className="h-6 w-6 text-irctc-light mr-2" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-irctc-light rounded-full animate-pulse"></span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-irctc-regular to-irctc-lightest">IRCTC</span>
            <span className="ml-1 text-xs md:text-sm text-gray-300 italic mt-1">Redesigned</span>
          </Link>

          <motion.nav
            className="hidden md:flex items-center space-x-6"
            variants={listVariants}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/trains/search", label: "Book Tickets" },
              { path: "/trains/track", label: "Track Train" }
            ].map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-gray-300 hover:text-irctc-lightest transition-colors relative",
                    isActive(item.path) && "text-irctc-lightest font-medium"
                  )}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-irctc-lightest"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-irctc-lightest transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/login">
              <Button variant="outline" className="border-irctc-regular text-irctc-regular hover:bg-irctc-regular/10">
                Login
              </Button>
            </Link>
            <Link to="/login?register=true">
              <Button variant="default" className="bg-irctc-regular hover:bg-irctc-medium text-white">
                Register
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-2 text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 space-y-4 bg-gradient-to-r from-irctc-darkest/95 to-irctc-dark/95 backdrop-blur-md rounded-xl border border-irctc-dark-medium/30 shadow-lg"
          >
            {[
              { path: "/", label: "Home" },
              { path: "/trains/search", label: "Book Tickets" },
              { path: "/trains/track", label: "Track Train" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block px-6 py-3 text-gray-300 hover:text-irctc-lightest hover:bg-irctc-darkest/70",
                  isActive(item.path) && "text-irctc-lightest font-medium bg-irctc-darkest/50"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-irctc-dark-medium/30 px-6 flex items-center space-x-4">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full border-irctc-regular text-irctc-regular hover:bg-irctc-regular/10">
                  Login
                </Button>
              </Link>
              <Link to="/login?register=true" className="flex-1">
                <Button variant="default" className="w-full bg-irctc-regular hover:bg-irctc-medium text-white">
                  Register
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
