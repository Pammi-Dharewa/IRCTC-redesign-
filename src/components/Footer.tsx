
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Youtube, Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-irctc-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 - About */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-irctc-blue">IRCTC</span>
              <span className="ml-1 text-sm text-irctc-gray-text italic mt-1">Redesigned</span>
            </Link>
            <p className="text-irctc-gray-text mb-6 max-w-md">
              The Indian Railways Catering and Tourism Corporation is transforming how India travels. Book train tickets, check PNR status, and explore tourism packages with ease.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-irctc-gray text-irctc-gray-text hover:bg-irctc-blue hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-irctc-gray text-irctc-gray-text hover:bg-irctc-blue hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-irctc-gray text-irctc-gray-text hover:bg-irctc-blue hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-irctc-gray text-irctc-gray-text hover:bg-irctc-blue hover:text-white transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trains/search" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  Book Tickets
                </Link>
              </li>
              <li>
                <Link to="/trains/track" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  Track Train
                </Link>
              </li>
              <li>
                <Link to="#" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  PNR Status
                </Link>
              </li>
              <li>
                <Link to="#" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  Fare Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  E-Catering
                </Link>
              </li>
              <li>
                <Link to="#" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  Tourism Packages
                </Link>
              </li>
              <li>
                <Link to="#" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  Retiring Rooms
                </Link>
              </li>
              <li>
                <Link to="#" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  Charter Trains
                </Link>
              </li>
              <li>
                <Link to="#" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  Corporate Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-irctc-blue mr-2 mt-0.5" />
                <a href="mailto:care@irctc.co.in" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  care@irctc.co.in
                </a>
              </li>
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-irctc-blue mr-2 mt-0.5" />
                <a href="tel:0755-6610661" className="text-irctc-gray-text hover:text-irctc-blue transition-colors">
                  0755-6610661
                </a>
              </li>
              <li className="pt-3 text-irctc-gray-text">
                <p>Indian Railway Catering and</p>
                <p>Tourism Corporation Ltd,</p>
                <p>New Delhi, India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-irctc-gray flex flex-col md:flex-row justify-between items-center">
          <p className="text-irctc-gray-text text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IRCTC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-sm text-irctc-gray-text hover:text-irctc-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-irctc-gray-text hover:text-irctc-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-irctc-gray-text hover:text-irctc-blue transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
