import React from "react";
import { ArrowRight, Clock, CalendarDays, TrendingUp, MapPin, Zap, Train, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type TrainSeatAvailability = {
  class: string;
  available: number;
  fare: number;
  status: "available" | "rac" | "waitlist" | "sold";
};

type TrainCardProps = {
  trainNumber: string;
  trainName: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  date: string;
  availability: TrainSeatAvailability[];
  onBook?: () => void;
  onCheckFare?: () => void;
  className?: string;
};

export function getStatusColor(status: string) {
  switch (status) {
    case "available":
      return "text-green-600 bg-green-50";
    case "rac":
      return "text-orange-600 bg-orange-50";
    case "waitlist":
      return "text-red-600 bg-red-50";
    case "sold":
      return "text-gray-600 bg-gray-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
}

export function getStatusText(status: string, available?: number) {
  switch (status) {
    case "available":
      return `Available ${available ? `(${available})` : ""}`;
    case "rac":
      return "RAC";
    case "waitlist":
      return `WL ${available ? `(${available})` : ""}`;
    case "sold":
      return "Sold Out";
    default:
      return status;
  }
}

const TrainCard = ({
  trainNumber,
  trainName,
  from,
  to,
  departureTime,
  arrivalTime,
  duration,
  date,
  availability,
  onBook,
  onCheckFare,
  className,
}: TrainCardProps) => {
  // Modern gradient combinations
  const gradients = [
    "from-[#0057FF] via-[#0EA5E9] to-[#00FF57]",
    "from-[#FF5700] via-[#FF8C00] to-[#FFD700]",
    "from-[#9C27B0] via-[#E91E63] to-[#FF5722]",
    "from-[#00BCD4] via-[#03A9F4] to-[#2196F3]",
    "from-[#4CAF50] via-[#8BC34A] to-[#CDDC39]"
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-500 hover:shadow-xl border-none relative group bg-white/5 backdrop-blur-sm",
        className
      )}
    >
      {/* Modern gradient header with glow effect */}
      <div className={`h-1 w-full bg-gradient-to-r ${randomGradient} opacity-80 shadow-lg shadow-[#0057FF]/20`}></div>
      
      <div className="p-6 relative">
        {/* Modern decorative elements */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Train size={120} strokeWidth={1} />
        </div>
        
        {/* Modern gradient track */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        {/* Train Info with modern styling */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`bg-gradient-to-r ${randomGradient} text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg shadow-[#0057FF]/20`}>
                {trainNumber}
              </span>
              <h3 className="font-semibold text-lg md:text-xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{trainName}</h3>
            </div>
            <div className="flex items-center text-white/70 text-sm gap-4 mt-1">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4 text-[#0057FF]" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-[#00FF57]" />
                <span>Daily</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-[#FF5700]" />
                <span className="text-[#FF5700] font-medium">Superfast</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-xl border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF]/10 group-hover:translate-x-1 transition-all duration-300"
              onClick={onCheckFare}
            >
              Check Fare
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className={`rounded-xl bg-gradient-to-r ${randomGradient} hover:opacity-90 group-hover:scale-105 transition-all duration-300 shadow-lg shadow-[#0057FF]/20`}
              onClick={onBook}
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Journey Details with modern glassmorphism */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
          <div className="flex items-center gap-6 md:gap-12">
            {/* Departure with modern styling */}
            <div className="relative">
              <div className="absolute -left-2 top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#0057FF] to-[#0EA5E9] transform -translate-y-1/2 animate-pulse-gentle shadow-lg shadow-[#0057FF]/20"></div>
              <p className="text-2xl font-semibold ml-4 text-white">{departureTime}</p>
              <div className="flex items-center gap-1 mt-1 ml-4">
                <MapPin className="h-4 w-4 text-white/70" />
                <p className="text-sm text-white/70">{from}</p>
              </div>
            </div>

            {/* Duration with modern animated track */}
            <div className="flex flex-col items-center">
              <div className="text-xs font-medium text-[#0057FF] bg-[#0057FF]/10 rounded-full px-3 py-0.5">
                {duration}
              </div>
              <div className="relative w-24 my-2">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0057FF] to-[#0EA5E9] animate-pulse-gentle"></div>
                
                {/* Modern animated train */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-[train-move_15s_linear_infinite]">
                  <div className="h-2 w-2 bg-[#0057FF] rounded-full shadow-lg shadow-[#0057FF]/20"></div>
                </div>
              </div>
              <div className="text-xs text-white/50">Direct</div>
            </div>

            {/* Arrival with modern styling */}
            <div className="relative">
              <div className="absolute -left-2 top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#FF5700] to-[#FF8C00] transform -translate-y-1/2 animate-pulse-gentle shadow-lg shadow-[#FF5700]/20"></div>
              <p className="text-2xl font-semibold ml-4 text-white">{arrivalTime}</p>
              <div className="flex items-center gap-1 mt-1 ml-4">
                <MapPin className="h-4 w-4 text-white/70" />
                <p className="text-sm text-white/70">{to}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center text-white/70 text-sm gap-4 mt-6 md:mt-0">
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4 text-[#00FF57]" />
              <span>Fastest Route</span>
            </div>
          </div>
        </div>

        {/* Availability with modern glassmorphism */}
        <div className="space-y-2">
          <p className="text-xs font-medium mb-2 flex items-center text-white/70">
            <span className="bg-[#0057FF]/10 text-[#0057FF] text-xs font-medium px-1.5 py-0.5 rounded mr-2">
              Seats
            </span>
            Availability
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {availability.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border border-white/10 rounded-md p-2 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-[#0057FF]/10 group/seat bg-white/5 backdrop-blur-sm", 
                  item.status === "available" ? "hover:border-[#00FF57]/50" : "hover:border-white/20"
                )}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-white/90">{item.class}</span>
                  <span className="text-xs font-medium text-[#0057FF] group-hover/seat:scale-110 transition-transform">₹{item.fare}</span>
                </div>
                <div className={cn("text-[10px] px-1.5 py-0.5 rounded-md font-medium flex items-center justify-center", getStatusColor(item.status))}>
                  {getStatusText(item.status, item.available)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TrainCard;
