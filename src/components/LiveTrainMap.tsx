
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LiveTrainMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Using a public token for demo purposes - in production, use environment variables
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [78.9629, 20.5937], // India center
      zoom: 4,
      projection: 'globe'
    });

    // Add train route animation
    map.current.on('load', () => {
      if (!map.current) return;

      // Add multiple train routes
      const routes = [
        {
          coordinates: [[72.8777, 19.0760], [77.5946, 12.9716]], // Mumbai to Bangalore
          color: '#0057FF'
        },
        {
          coordinates: [[77.2090, 28.6139], [88.3639, 22.5726]], // Delhi to Kolkata
          color: '#00FF57'
        },
        {
          coordinates: [[72.8777, 19.0760], [77.2090, 28.6139]], // Mumbai to Delhi
          color: '#FF5700'
        }
      ];

      routes.forEach((route, index) => {
        map.current?.addSource(`route-${index}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: route.coordinates
            }
          }
        });

        map.current?.addLayer({
          id: `route-${index}`,
          type: 'line',
          source: `route-${index}`,
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': route.color,
            'line-width': 3,
            'line-dasharray': [2, 2]
          }
        });

        // Animated train marker for each route
        const marker = document.createElement('div');
        marker.className = 'train-marker';
        marker.innerHTML = '🚂';
        marker.style.fontSize = '24px';

        // Fix: Use proper LngLatLike format by destructuring the array coordinates
        const [lng, lat] = route.coordinates[0];
        new mapboxgl.Marker(marker)
          .setLngLat([lng, lat]) // Now correctly passing as [number, number]
          .addTo(map.current);
      });

      // Add glow effect to the map
      map.current.setPaintProperty('water', 'fill-color', '#0057FF20');
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
