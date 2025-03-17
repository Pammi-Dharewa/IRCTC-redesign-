
import React, { useState } from "react";
import { ArrowLeft, Filter, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import TrainCard from "@/components/TrainCard";

const TrainList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
        { class: "3A", available: 12, fare: 1745, status: "available" },
        { class: "2A", available: 5, fare: 2745, status: "available" },
        { class: "1A", available: 2, fare: 4565, status: "available" },
        { class: "SL", available: 0, fare: 675, status: "waitlist" },
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
        { class: "3A", available: 0, fare: 1720, status: "waitlist" },
        { class: "2A", available: 3, fare: 2720, status: "available" },
        { class: "1A", available: 1, fare: 4520, status: "available" },
        { class: "SL", available: 0, fare: 650, status: "sold" },
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
        { class: "3A", available: 25, fare: 1825, status: "available" },
        { class: "2A", available: 15, fare: 2825, status: "available" },
        { class: "1A", available: 5, fare: 4625, status: "available" },
        { class: "SL", available: 35, fare: 695, status: "available" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      {/* Back button and Search Info */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/">
            <Button variant="ghost" size="icon" className="mr-2 rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">New Delhi to Mumbai</h1>
            <p className="text-irctc-gray-text">Mon, 12 Apr • 3 Passengers</p>
          </div>
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

      {/* Filters */}
      {isFilterOpen && (
        <Card className="p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-medium mb-2">Departure Time</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>Early Morning (00:00 - 06:00)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>Morning (06:00 - 12:00)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>Afternoon (12:00 - 18:00)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>Night (18:00 - 00:00)</span>
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Train Classes</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>Sleeper (SL)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>AC 3 Tier (3A)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>AC 2 Tier (2A)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>AC First Class (1A)</span>
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Journey Duration</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>Less than 12 hours</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>12 - 18 hours</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>18 - 24 hours</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span>More than 24 hours</span>
              </label>
            </div>
          </div>
        </Card>
      )}

      {/* Train Results */}
      <div className="space-y-4">
        <p className="text-irctc-gray-text">Showing {trains.length} trains</p>
        
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
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TrainList;
