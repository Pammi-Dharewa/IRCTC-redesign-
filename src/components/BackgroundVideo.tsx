
import React, { useEffect, useRef, useState } from 'react';

interface BackgroundVideoProps {
  src: string;
  opacity?: number;
  fallbackImage?: string;
}

const BackgroundVideo = ({ src, opacity = 0.5, fallbackImage }: BackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset states when src changes
    setIsLoaded(false);
    setHasError(false);

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      console.error("Error loading video:", src);
      setHasError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Load and play the video
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  // Preload images to avoid flashes
  useEffect(() => {
    if (fallbackImage) {
      const img = new Image();
      img.src = fallbackImage;
    }
  }, [fallbackImage]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-10"
        style={{ opacity }}
      />
      
      {/* Fallback image if video fails or while loading */}
      {(hasError || !isLoaded) && fallbackImage && (
        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${fallbackImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1
          }}
        />
      )}
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover scale-105 transform transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
