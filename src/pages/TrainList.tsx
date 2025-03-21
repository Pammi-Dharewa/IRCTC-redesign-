import React, { useState } from "react";
import { ArrowLeft, Filter, ChevronDown, Train, MapPin, CalendarDays, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import TrainCard from "@/components/TrainCard";

const TrainList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);

  // Sample train data
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
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="inline-flex items-center text-[#0057FF] hover:text-[#003DB3]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <Button 
              variant="outline" 
              className="border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF]/10"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Search Summary */}
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#0057FF]" />
                  <div>
                    <div className="text-white font-medium">New Delhi → Mumbai Central</div>
                    <div className="text-white/70 text-sm">Mon, 12 Apr 2024</div>
                  </div>
                </div>
              </div>
              <div className="text-white/70 text-sm">
                Showing {trains.length} trains
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 space-y-6 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="space-y-6">
                {/* Search Input */}
                <div className="space-y-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search trains..."
                      className="pl-10 bg-[#0f172a] border-white/10 text-white placeholder:text-white/50 focus:border-[#0057FF]"
                    />
                  </div>
                </div>

                {/* Train Classes */}
                <div className="space-y-3">
                  <h4 className="font-medium text-white">Train Classes</h4>
                  <div className="space-y-2">
                    {["Sleeper (SL)", "AC 3 Tier (3A)", "AC 2 Tier (2A)", "AC First Class (1A)"].map((cls) => (
                      <label key={cls} className="flex items-center group cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded mr-2 text-[#0057FF]"
                          checked={selectedClass.includes(cls)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedClass([...selectedClass, cls]);
                            } else {
                              setSelectedClass(selectedClass.filter(c => c !== cls));
                            }
                          }}
                        />
                        <span className="text-white/70 group-hover:text-white">{cls}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <h4 className="font-medium text-white">Price Range</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Under ₹1000", value: "under_1000" },
                      { label: "₹1000 - ₹2000", value: "1000_2000" },
                      { label: "₹2000 - ₹3000", value: "2000_3000" },
                      { label: "Above ₹3000", value: "above_3000" }
                    ].map((range) => (
                      <label key={range.value} className="flex items-center group cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded mr-2 text-[#0057FF]"
                          checked={selectedPriceRange.includes(range.value)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPriceRange([...selectedPriceRange, range.value]);
                            } else {
                              setSelectedPriceRange(selectedPriceRange.filter(r => r !== range.value));
                            }
                          }}
                        />
                        <span className="text-white/70 group-hover:text-white">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Train List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="flex items-center justify-end gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-lg text-xs border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF]/10"
                >
                  Sort by Departure
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-lg text-xs border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF]/10"
                >
                  Sort by Duration
                </Button>
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
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="rounded-xl hover:bg-[#0057FF]/10 hover:text-[#0057FF]" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="rounded-xl bg-[#0057FF]">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="rounded-xl hover:bg-[#0057FF]/10 hover:text-[#0057FF]">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="rounded-xl hover:bg-[#0057FF]/10 hover:text-[#0057FF]">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="rounded-xl hover:bg-[#0057FF]/10 hover:text-[#0057FF]" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainList;
