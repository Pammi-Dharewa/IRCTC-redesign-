
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Youtube, Mail, PhoneCall, Train, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const footerVariants = {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerVariants}
          className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
        >
          {/* Column 1 - About */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">IRCTC</span>
              <span className="ml-1 text-sm text-gray-400 italic mt-1">Redesigned</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              The Indian Railways Catering and Tourism Corporation is transforming how India travels. Book train tickets, check PNR status, and explore tourism packages with ease.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-[#3B82F6] hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-[#3B82F6] hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-[#3B82F6] hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-[#3B82F6] hover:text-white transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trains/search" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  Book Tickets
                </Link>
              </li>
              <li>
                <Link to="/trains/track" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  Track Train
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  PNR Status
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  Fare Enquiry
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  E-Catering
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  Tourism Packages
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  Retiring Rooms
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  Charter Trains
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#3B82F6] transition-colors flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-[#3B82F6]"></div>
                  Corporate Travel
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#3B82F6] mr-2 mt-0.5" />
                <a href="mailto:care@irctc.co.in" className="text-gray-300 hover:text-[#3B82F6] transition-colors">
                  care@irctc.co.in
                </a>
              </li>
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-[#3B82F6] mr-2 mt-0.5" />
                <a href="tel:0755-6610661" className="text-gray-300 hover:text-[#3B82F6] transition-colors">
                  0755-6610661
                </a>
              </li>
              <li className="flex items-start pt-2">
                <MapPin className="h-5 w-5 text-[#3B82F6] mr-2 mt-0.5" />
                <div className="text-gray-300">
                  <p>Indian Railway Catering and</p>
                  <p>Tourism Corporation Ltd,</p>
                  <p>New Delhi, India</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IRCTC. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link to="#" className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="py-4 flex items-center justify-center">
          <p className="text-sm text-gray-500 flex items-center">
            Made with <Heart size={12} className="mx-1 text-[#3B82F6]" /> for a better railway experience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
