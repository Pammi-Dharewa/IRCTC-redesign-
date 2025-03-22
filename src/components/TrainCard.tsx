
import React from "react";
import { CalendarDays, TrendingUp, MapPin, Zap, Train, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      return "text-amber-600 bg-amber-50";
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
  // Generate gradients using our new color palette
  const gradients = [
    "from-irctc-medium to-irctc-dark",
    "from-irctc-regular to-irctc-medium",
    "from-irctc-light to-irctc-regular",
    "from-irctc-lightest to-irctc-light",
    "from-irctc-dark to-irctc-darkest"
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-medium border-none relative group",
        className
      )}
    >
      {/* Decorative header strip with gradient */}
      <div className={`h-2 w-full bg-gradient-to-r ${randomGradient}`}></div>
      
      <div className="p-6 relative">
        {/* Train illustration decorative element */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Train size={120} strokeWidth={1} />
        </div>
        
        {/* Modern train track decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-irctc-dark-light opacity-10"></div>
        
        {/* Train Info */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`bg-gradient-to-r ${randomGradient} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                {trainNumber}
              </span>
              <h3 className="font-semibold text-lg md:text-xl">{trainName}</h3>
            </div>
            <div className="flex items-center text-gray-400 text-sm gap-4 mt-1">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>Daily</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-green-500 font-medium">Superfast</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-xl border-irctc-medium text-irctc-medium hover:bg-irctc-blue-light group-hover:translate-x-1 transition-all"
              onClick={onCheckFare}
            >
              Check Fare
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className={`rounded-xl bg-gradient-to-r ${randomGradient} hover:opacity-90 group-hover:scale-105 transition-all text-white`}
              onClick={onBook}
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Journey Details with enhanced visual design */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white/5 p-4 rounded-xl border border-white/10 shadow-sm text-white">
          <div className="flex items-center gap-6 md:gap-12">
            {/* Departure with enhanced styling */}
            <div className="relative">
              <div className="absolute -left-2 top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-irctc-regular to-irctc-light transform -translate-y-1/2 animate-pulse-gentle"></div>
              <p className="text-2xl font-semibold ml-4">{departureTime}</p>
              <div className="flex items-center gap-1 mt-1 ml-4">
                <MapPin className="h-4 w-4 text-gray-300" />
                <p className="text-sm text-gray-300">{from}</p>
              </div>
            </div>

            {/* Duration with animated train track */}
            <div className="flex flex-col items-center">
              <div className="text-xs font-medium text-white bg-irctc-regular/30 rounded-full px-3 py-0.5">
                {duration}
              </div>
              <div className="relative w-24 my-2">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-irctc-regular/30"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-irctc-regular to-irctc-light animate-pulse-gentle"></div>
                
                {/* Animated mini train */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-[train-move_15s_linear_infinite]">
                  <div className="h-2 w-2 bg-irctc-light rounded-full"></div>
                </div>
              </div>
              <div className="text-xs text-gray-300">Direct</div>
            </div>

            <div className="relative">
              <div className="absolute -left-2 top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-irctc-medium to-irctc-regular transform -translate-y-1/2 animate-pulse-gentle"></div>
              <p className="text-2xl font-semibold ml-4">{arrivalTime}</p>
              <div className="flex items-center gap-1 mt-1 ml-4">
                <MapPin className="h-4 w-4 text-gray-300" />
                <p className="text-sm text-gray-300">{to}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center text-gray-300 text-sm gap-4 mt-6 md:mt-0">
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4 text-irctc-light" />
              <span>Fastest Route</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium mb-3 flex items-center text-white">
            <span className="bg-irctc-medium/20 text-irctc-light text-xs font-medium px-2 py-0.5 rounded mr-2">
              Seats
            </span>
            Availability
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {availability.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border rounded-lg p-3 flex flex-col transition-all hover:shadow-sm group/seat",
                  item.status === "available" ? "border-green-500/30 bg-green-500/5" : "border-gray-500/20 bg-white/5"
                )}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-white">{item.class}</span>
                  <span className="text-sm font-medium text-irctc-light group-hover/seat:scale-110 transition-transform">₹{item.fare}</span>
                </div>
                <div className={cn("text-xs px-2 py-1 rounded-md mt-1 font-medium flex items-center justify-center", getStatusColor(item.status))}>
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
