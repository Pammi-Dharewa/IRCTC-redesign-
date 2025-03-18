
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LiveTrainMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize map (replace with your Mapbox token)
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [78.9629, 20.5937], // India center
      zoom: 4
    });

    // Add train route animation
    map.current.on('load', () => {
      if (!map.current) return;

      map.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [72.8777, 19.0760], // Mumbai
              [77.5946, 12.9716], // Bangalore
            ]
          }
        }
      });

      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#0057FF',
          'line-width': 3,
          'line-dasharray': [2, 2]
        }
      });

      // Animated train marker
      const marker = document.createElement('div');
      marker.className = 'train-marker';
      marker.innerHTML = '🚂';
      marker.style.fontSize = '24px';

      new mapboxgl.Marker(marker)
        .setLngLat([72.8777, 19.0760])
        .addTo(map.current);
    });

    return () => map.current?.remove();
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
    </div>
  );
};

export default LiveTrainMap;
