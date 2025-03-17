
import React from "react";
import { ArrowRight, Clock, CalendarDays, TrendingUp, MapPin, Zap } from "lucide-react";
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
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-medium", className)}>
      <div className="p-6">
        {/* Train Info */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-irctc-blue-light text-irctc-blue text-xs font-medium px-2.5 py-0.5 rounded">
                {trainNumber}
              </span>
              <h3 className="font-semibold text-lg md:text-xl">{trainName}</h3>
            </div>
            <div className="flex items-center text-irctc-gray-text text-sm gap-4 mt-1">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>Daily</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-xl border-irctc-blue text-irctc-blue hover:bg-irctc-blue-light"
              onClick={onCheckFare}
            >
              Check Fare
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-xl bg-irctc-blue hover:bg-irctc-blue-dark"
              onClick={onBook}
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Journey Details */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="flex items-center gap-6 md:gap-12">
            {/* Departure */}
            <div>
              <p className="text-2xl font-semibold">{departureTime}</p>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="h-4 w-4 text-irctc-gray-text" />
                <p className="text-sm text-irctc-gray-text">{from}</p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col items-center">
              <div className="text-xs text-irctc-gray-text-light bg-irctc-gray rounded-full px-2 py-0.5">
                {duration}
              </div>
              <div className="relative w-16 my-2">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-irctc-gray-dark"></div>
                <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-irctc-blue transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-irctc-blue transform -translate-y-1/2"></div>
              </div>
              <div className="text-xs text-irctc-gray-text-light">Direct</div>
            </div>

            {/* Arrival */}
            <div>
              <p className="text-2xl font-semibold">{arrivalTime}</p>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="h-4 w-4 text-irctc-gray-text" />
                <p className="text-sm text-irctc-gray-text">{to}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center text-irctc-gray-text text-sm gap-4 mt-6 md:mt-0">
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4 text-irctc-blue" />
              <span>Fastest Route</span>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-4">
          <p className="text-sm font-medium mb-3">Availability:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {availability.map((item, index) => (
              <div
                key={index}
                className="border border-irctc-gray rounded-lg p-3 flex flex-col"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{item.class}</span>
                  <span className="text-sm text-irctc-gray-text">₹{item.fare}</span>
                </div>
                <div className={cn("text-xs px-2 py-1 rounded-md mt-1 font-medium", getStatusColor(item.status))}>
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
