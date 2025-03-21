
import React from 'react';
import { Card } from '@/components/ui/card';
import TrainVisualization from './TrainVisualization';
import { motion } from 'framer-motion';

const LiveTrainMap = () => {
  // Define train routes
  const routes = [
    {
      name: "Mumbai to Bangalore",
      fromCity: "Mumbai",
      toCity: "Bangalore",
      color: '#3B82F6',
      duration: "16h 35m"
    },
    {
      name: "Delhi to Kolkata",
      fromCity: "Delhi",
      toCity: "Kolkata",
      color: '#10B981',
      duration: "17h 20m"
    },
    {
      name: "Mumbai to Delhi",
      fromCity: "Mumbai",
      toCity: "Delhi",
      color: '#F59E0B',
      duration: "15h 40m"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Popular Train Routes Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 p-6 md:p-8"
      >
        <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] mb-6">
          Popular Train Routes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-[#1e293b]/80 backdrop-blur-sm border border-white/10 text-white p-5 hover:bg-[#1e293b] transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: route.color }}></div>
                  <p className="font-medium text-lg">{route.name}</p>
                </div>
                <div className="text-base opacity-80 flex justify-between">
                  <span>{route.fromCity} → {route.toCity}</span>
                  <span className="text-[#60A5FA] font-medium">{route.duration}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Train Visualization Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10"
      >
        <div className="h-[300px] md:h-[500px]">
          <TrainVisualization />
        </div>
      </motion.div>
    </div>
  );
};

export default LiveTrainMap;
