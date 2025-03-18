
import React from 'react';

interface BackgroundVideoProps {
  src: string;
  opacity?: number;
}

const BackgroundVideo = ({ src, opacity = 0.5 }: BackgroundVideoProps) => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10"
        style={{ opacity }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
