import React from 'react';
import { Card } from '@/components/ui/card';
import TrainVisualization from './TrainVisualization';

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
    <div className="space-y-6">
      {/* Popular Train Routes Section */}
      <div className="w-full rounded-xl overflow-hidden shadow-xl bg-[#0a0e17] border border-white/5 p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#0EA5E9] mb-4 md:mb-6">
          Popular Train Routes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {routes.map((route, index) => (
            <Card key={index} className="bg-[#0f172a]/50 backdrop-blur-sm border border-white/10 text-white p-4 md:p-5 hover:bg-[#0f172a]/70 transition-colors duration-300">
              <div className="flex items-center mb-2 md:mb-3">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full mr-3" style={{ backgroundColor: route.color }}></div>
                <p className="font-medium text-base md:text-lg">{route.name}</p>
              </div>
              <div className="text-sm md:text-base opacity-80 flex justify-between">
                <span>{route.fromCity} → {route.toCity}</span>
                <span>{route.duration}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Train Visualization Section */}
      <div className="w-full rounded-xl overflow-hidden shadow-xl bg-[#0a0e17] border border-white/5">
        <div className="h-[300px] md:h-[400px]">
          <TrainVisualization />
        </div>
      </div>
    </div>
  );
};

export default LiveTrainMap;
