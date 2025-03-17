
import React, { useState } from "react";
import { Search, Train, Clock, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const TrainTrack = () => {
  const [trainNumber, setTrainNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [trainData, setTrainData] = useState<null | {
    trainNumber: string;
    trainName: string;
    status: "Running" | "Delayed" | "On Time";
    delayTime?: string;
    lastStation: string;
    lastStationTime: string;
    nextStation: string;
    nextStationTime: string;
    stations: Array<{
      name: string;
      arrivalTime: string;
      departureTime: string;
      distance: string;
      platform: string;
      status: "Completed" | "Current" | "Upcoming";
    }>;
  }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trainNumber) return;
    
    setIsSearching(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Sample data - in a real app, this would come from an API
      setTrainData({
        trainNumber: "12301",
        trainName: "Howrah Rajdhani",
        status: "Running",
        delayTime: "25 min",
        lastStation: "Ghaziabad",
        lastStationTime: "17:25",
        nextStation: "Kanpur Central",
        nextStationTime: "20:50",
        stations: [
          {
            name: "New Delhi",
            arrivalTime: "-",
            departureTime: "16:55",
            distance: "0 km",
            platform: "16",
            status: "Completed"
          },
          {
            name: "Ghaziabad",
            arrivalTime: "17:20",
            departureTime: "17:25",
            distance: "28 km",
            platform: "4",
            status: "Completed"
          },
          {
            name: "Kanpur Central",
            arrivalTime: "20:50",
            departureTime: "20:55",
            distance: "440 km",
            platform: "1",
            status: "Current"
          },
          {
            name: "Allahabad Jn",
            arrivalTime: "23:05",
            departureTime: "23:15",
            distance: "640 km",
            platform: "5",
            status: "Upcoming"
          },
          {
            name: "Gaya Jn",
            arrivalTime: "03:12",
            departureTime: "03:15",
            distance: "990 km",
            platform: "2",
            status: "Upcoming"
          },
          {
            name: "Dhanbad Jn",
            arrivalTime: "05:05",
            departureTime: "05:10",
            distance: "1158 km",
            platform: "3",
            status: "Upcoming"
          },
          {
            name: "Howrah Jn",
            arrivalTime: "10:00",
            departureTime: "-",
            distance: "1450 km",
            platform: "9",
            status: "Upcoming"
          }
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Running":
        return "text-blue-600 bg-blue-50";
      case "Delayed":
        return "text-red-600 bg-red-50";
      case "On Time":
        return "text-green-600 bg-green-50";
      case "Completed":
        return "text-gray-600 bg-gray-100";
      case "Current":
        return "text-blue-600 bg-blue-50";
      case "Upcoming":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Track Your Train</h1>
        
        {/* Search Form */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  value={trainNumber}
                  onChange={(e) => setTrainNumber(e.target.value)}
                  placeholder="Enter Train Number (e.g. 12301)"
                  className="w-full h-12"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSearching || !trainNumber}
                className="bg-irctc-blue hover:bg-irctc-blue-dark h-12"
              >
                {isSearching ? "Searching..." : "Track Train"}
                {!isSearching && <Search className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {isSearching ? (
          <div className="space-y-4">
            <Skeleton className="h-40 w-full rounded-xl" />
            <Skeleton className="h-[30rem] w-full rounded-xl" />
          </div>
        ) : trainData ? (
          <>
            {/* Train Info Card */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="h-5 w-5 text-irctc-blue" />
                  {trainData.trainNumber} - {trainData.trainName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <div className={`text-xs px-2 py-1 rounded-md mr-2 font-medium ${getStatusColor(trainData.status)}`}>
                      {trainData.status}
                    </div>
                    {trainData.delayTime && (
                      <div className="flex items-center text-irctc-gray-text">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Delayed by {trainData.delayTime}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="text-sm text-irctc-gray-text">Last Station Passed</div>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 text-irctc-gray-text mr-1" />
                      {trainData.lastStation} ({trainData.lastStationTime})
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="text-sm text-irctc-gray-text">Next Station</div>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 text-irctc-gray-text mr-1" />
                      {trainData.nextStation} ({trainData.nextStationTime})
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Journey Progress */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Journey Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative pt-4">
                  {trainData.stations.map((station, index) => {
                    const isFirst = index === 0;
                    const isLast = index === trainData.stations.length - 1;
                    const isCurrent = station.status === "Current";
                    
                    return (
                      <div key={index} className="flex mb-8 relative">
                        {/* Line connecting stations */}
                        {!isLast && (
                          <div className={`absolute left-4 top-4 bottom-0 w-0.5 ${
                            station.status === "Completed" ? "bg-green-500" : "bg-gray-200"
                          }`} />
                        )}
                        
                        {/* Station marker */}
                        <div className={`relative z-10 rounded-full h-8 w-8 flex items-center justify-center mr-4 ${
                          isCurrent ? "bg-blue-500" : 
                          station.status === "Completed" ? "bg-green-500" : "bg-gray-200"
                        }`}>
                          <div className="h-3 w-3 bg-white rounded-full" />
                        </div>
                        
                        {/* Station info */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                              <h3 className={`font-medium ${isCurrent ? "text-blue-600" : ""}`}>
                                {station.name}
                              </h3>
                              <div className="text-sm text-irctc-gray-text">
                                {isFirst ? "Started from here" : `Distance: ${station.distance}`} • Platform: {station.platform}
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <div className="flex items-center gap-2">
                                <div className="text-sm">
                                  <span className="text-irctc-gray-text mr-1">Arr:</span>
                                  {station.arrivalTime}
                                </div>
                                <div className="text-sm">
                                  <span className="text-irctc-gray-text mr-1">Dep:</span>
                                  {station.departureTime}
                                </div>
                                <div className={`text-xs px-2 py-0.5 rounded-md font-medium ${getStatusColor(station.status)}`}>
                                  {station.status}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Schedule Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Complete Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Station</TableHead>
                        <TableHead>Arrival</TableHead>
                        <TableHead>Departure</TableHead>
                        <TableHead>Distance</TableHead>
                        <TableHead>Platform</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {trainData.stations.map((station, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{station.name}</TableCell>
                          <TableCell>{station.arrivalTime}</TableCell>
                          <TableCell>{station.departureTime}</TableCell>
                          <TableCell>{station.distance}</TableCell>
                          <TableCell>{station.platform}</TableCell>
                          <TableCell>
                            <div className={`text-xs px-2 py-0.5 rounded-md font-medium inline-block ${getStatusColor(station.status)}`}>
                              {station.status}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="text-center py-12 bg-gray-50">
            <div className="flex flex-col items-center justify-center">
              <Train className="h-16 w-16 text-irctc-gray mb-4" />
              <h2 className="text-xl font-semibold mb-2">Enter Train Number to Track</h2>
              <p className="text-irctc-gray-text max-w-md mx-auto">
                Get real-time information about the current location, running status and complete schedule of your train.
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TrainTrack;
