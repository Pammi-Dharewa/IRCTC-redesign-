
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrainVisualization } from './TrainVisualization';

const LiveTrainMap = () => {
  // Define train routes that were previously used with Mapbox
  const routes = [
    {
      name: "Mumbai to Bangalore",
      fromCity: "Mumbai",
      toCity: "Bangalore",
      color: '#0057FF',
      duration: "16h 35m"
    },
    {
      name: "Delhi to Kolkata",
      fromCity: "Delhi",
      toCity: "Kolkata",
      color: '#00FF57',
      duration: "17h 20m"
    },
    {
      name: "Mumbai to Delhi",
      fromCity: "Mumbai",
      toCity: "Delhi",
      color: '#FF5700',
      duration: "15h 40m"
    }
  ];

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
        <TrainVisualization />
      </div>
      
      <div className="absolute top-4 left-4 right-4 z-10">
        <h3 className="text-xl font-bold text-white mb-4">Popular Train Routes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {routes.map((route, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 text-white p-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: route.color }}></div>
                <p className="font-medium">{route.name}</p>
              </div>
              <div className="text-sm opacity-80 flex justify-between">
                <span>{route.fromCity} → {route.toCity}</span>
                <span>{route.duration}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/20" />
    </div>
  );
};

export default LiveTrainMap;
