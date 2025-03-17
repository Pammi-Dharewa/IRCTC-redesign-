
import React, { useState } from "react";
import { ArrowLeft, Filter, ChevronDown, Train, Zap, MapPin, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import TrainCard from "@/components/TrainCard";

const TrainList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample train data with corrected status values to match the TrainSeatAvailability type
  const trains = [
    {
      trainNumber: "12301",
      trainName: "Howrah Rajdhani",
      from: "New Delhi",
      to: "Howrah",
      departureTime: "16:55",
      arrivalTime: "10:00",
      duration: "17h 05m",
      date: "Mon, 12 Apr",
      availability: [
        { class: "3A", available: 12, fare: 1745, status: "available" as const },
        { class: "2A", available: 5, fare: 2745, status: "available" as const },
        { class: "1A", available: 2, fare: 4565, status: "available" as const },
        { class: "SL", available: 0, fare: 675, status: "waitlist" as const },
      ],
    },
    {
      trainNumber: "12910",
      trainName: "Mumbai Rajdhani",
      from: "New Delhi",
      to: "Mumbai Central",
      departureTime: "16:35",
      arrivalTime: "08:35",
      duration: "16h 00m",
      date: "Mon, 12 Apr",
      availability: [
        { class: "3A", available: 0, fare: 1720, status: "waitlist" as const },
        { class: "2A", available: 3, fare: 2720, status: "available" as const },
        { class: "1A", available: 1, fare: 4520, status: "available" as const },
        { class: "SL", available: 0, fare: 650, status: "sold" as const },
      ],
    },
    {
      trainNumber: "12952",
      trainName: "New Delhi - Mumbai Rajdhani",
      from: "New Delhi",
      to: "Mumbai Central",
      departureTime: "17:15",
      arrivalTime: "11:10",
      duration: "17h 55m",
      date: "Mon, 12 Apr",
      availability: [
        { class: "3A", available: 25, fare: 1825, status: "available" as const },
        { class: "2A", available: 15, fare: 2825, status: "available" as const },
        { class: "1A", available: 5, fare: 4625, status: "available" as const },
        { class: "SL", available: 35, fare: 695, status: "available" as const },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-20 pb-12">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-r from-irctc-blue to-blue-400 -z-10"></div>
      
      {/* Back button and Search Info */}
      <div className="relative mb-8">
        <Card className="p-6 shadow-medium border-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 text-irctc-blue-light/20">
            <Train size={128} strokeWidth={1} />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Link to="/">
                <Button variant="ghost" size="icon" className="mr-2 rounded-full hover:bg-irctc-blue-light">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold">New Delhi to Mumbai</h1>
                  <div className="w-12 h-1 ml-2 bg-gradient-to-r from-irctc-blue to-blue-400 rounded-full"></div>
                </div>
                <div className="flex items-center mt-1 text-irctc-gray-text gap-3">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>Mon, 12 Apr</span>
                  </div>
                  <div className="h-4 w-px bg-irctc-gray-text/30"></div>
                  <span>3 Passengers</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center px-3 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                <Zap className="h-3.5 w-3.5 mr-1" />
                <span>15 results</span>
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-xl border-irctc-blue text-irctc-blue"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      {isFilterOpen && (
        <Card className="p-6 mb-8 border-none shadow-medium animate-slide-up">
          <h3 className="text-lg font-semibold mb-4">Filter Trains</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-irctc-blue flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-irctc-blue-light flex items-center justify-center">
                  <CalendarDays className="h-4 w-4 text-irctc-blue" />
                </div>
                Departure Time
              </h4>
              <div className="space-y-2 pl-10">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>Early Morning (00:00 - 06:00)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>Morning (06:00 - 12:00)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>Afternoon (12:00 - 18:00)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>Night (18:00 - 00:00)</span>
                </label>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-irctc-blue flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-irctc-blue-light flex items-center justify-center">
                  <Train className="h-4 w-4 text-irctc-blue" />
                </div>
                Train Classes
              </h4>
              <div className="space-y-2 pl-10">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>Sleeper (SL)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>AC 3 Tier (3A)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>AC 2 Tier (2A)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>AC First Class (1A)</span>
                </label>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-irctc-blue flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-irctc-blue-light flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-irctc-blue" />
                </div>
                Journey Duration
              </h4>
              <div className="space-y-2 pl-10">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>Less than 12 hours</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>12 - 18 hours</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>18 - 24 hours</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded mr-2 text-irctc-blue" />
                  <span>More than 24 hours</span>
                </label>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Train Results */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-irctc-gray-text">Showing {trains.length} trains</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-lg text-xs">
              Sort by Departure
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg text-xs">
              Sort by Duration
            </Button>
          </div>
        </div>
        
        {trains.map((train, index) => (
          <TrainCard
            key={index}
            trainNumber={train.trainNumber}
            trainName={train.trainName}
            from={train.from}
            to={train.to}
            departureTime={train.departureTime}
            arrivalTime={train.arrivalTime}
            duration={train.duration}
            date={train.date}
            availability={train.availability}
            onBook={() => console.log("Book clicked for", train.trainNumber)}
            onCheckFare={() => console.log("Check fare clicked for", train.trainNumber)}
            className="animate-fade-in"
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="rounded-xl hover:bg-irctc-blue-light hover:text-irctc-blue" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive className="rounded-xl bg-irctc-blue">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="rounded-xl hover:bg-irctc-blue-light hover:text-irctc-blue">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="rounded-xl hover:bg-irctc-blue-light hover:text-irctc-blue">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="rounded-xl hover:bg-irctc-blue-light hover:text-irctc-blue" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TrainList;
