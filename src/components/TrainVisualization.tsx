
import React, { useEffect, useRef } from 'react';

const TrainVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to parent size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Train track points
    const tracks = [
      { points: [[0, canvas.height * 0.6], [canvas.width, canvas.height * 0.4]], color: '#0057FF' },
      { points: [[0, canvas.height * 0.4], [canvas.width, canvas.height * 0.7]], color: '#00FF57' },
      { points: [[0, canvas.height * 0.8], [canvas.width, canvas.height * 0.5]], color: '#FF5700' }
    ];
    
    // Train properties
    const trains = tracks.map((track) => ({
      position: 0,
      speed: 0.5 + Math.random() * 1.5,
      color: track.color,
      trackIndex: tracks.indexOf(track)
    }));
    
    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw tracks
      tracks.forEach(track => {
        ctx.beginPath();
        ctx.strokeStyle = track.color + '50'; // semi-transparent
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 10]);
        ctx.moveTo(track.points[0][0], track.points[0][1]);
        ctx.lineTo(track.points[1][0], track.points[1][1]);
        ctx.stroke();
      });
      
      // Draw trains
      trains.forEach(train => {
        const track = tracks[train.trackIndex];
        const x1 = track.points[0][0];
        const y1 = track.points[0][1];
        const x2 = track.points[1][0];
        const y2 = track.points[1][1];
        
        // Calculate position along the track
        const x = x1 + (x2 - x1) * train.position;
        const y = y1 + (y2 - y1) * train.position;
        
        // Draw train
        ctx.beginPath();
        ctx.fillStyle = train.color;
        ctx.shadowColor = train.color;
        ctx.shadowBlur = 15;
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Add small trail
        ctx.beginPath();
        ctx.strokeStyle = train.color + '80';
        ctx.lineWidth = 3;
        ctx.setLineDash([]);
        
        const trailLength = 0.05;
        const trailX = x - (x2 - x1) * trailLength;
        const trailY = y - (y2 - y1) * trailLength;
        
        ctx.moveTo(trailX, trailY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Update position
        train.position += 0.002 * train.speed;
        if (train.position > 1) {
          train.position = 0;
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10"></div>
    </div>
  );
};

export default TrainVisualization;
