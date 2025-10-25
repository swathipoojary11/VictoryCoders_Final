import { useEffect, useRef, useState } from "react";
import { MapPin, Locate } from "lucide-react";
import { Temple } from "@/data/temples";
import { Button } from "./ui/button";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapViewProps {
  temples: Temple[];
  selectedTemple: Temple | null;
  onTempleSelect: (temple: Temple) => void;
}

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || "pk.eyJ1IjoibG92YWJsZS1kZW1vIiwiYSI6ImNsdm1xYjFrazAyaTAya3BjeGI3bWQ0cjgifQ.placeholder";

const MapView = ({ temples, selectedTemple, onTempleSelect }: MapViewProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Generate marker coordinates from temple location
  const getTempleCoords = (temple: Temple): [number, number] => {
    // For demo, use approximate coordinates based on region
    const baseCoords: Record<string, [number, number]> = {
      Mangalore: [74.856, 12.9141],
      Udupi: [74.7421, 13.3409],
      Kundapura: [74.6897, 13.6281],
    };

    const base = baseCoords[temple.region] || [74.856, 13.0827];
    // Add small random offset for each temple
    const offset = (parseInt(temple.id.slice(-2), 36) / 1000);
    return [base[0] + (offset - 0.05), base[1] + (offset - 0.05)];
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [74.856, 13.0827],
      zoom: 9,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    mapRef.current = map;

    // Add markers for each temple
    temples.forEach((temple) => {
      const coords = getTempleCoords(temple);
      const isSelected = selectedTemple?.id === temple.id;

      // Create a custom marker element
      const el = document.createElement("div");
      el.className = "temple-marker";
      el.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="${
          isSelected ? "hsl(31 92% 45%)" : "hsl(27 96% 61%)"
        }" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      `;
      el.style.cursor = "pointer";
      el.style.transition = "transform 0.2s";

      // Add popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="text-sm">
          <p class="font-semibold text-foreground">${temple.name}</p>
          <p class="text-xs text-muted-foreground">${temple.location}</p>
        </div>
      `);

      // Create marker
      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat(coords)
        .setPopup(popup)
        .addTo(map);

      // Click handler
      el.addEventListener("click", () => {
        onTempleSelect(temple);
      });

      // Hover effects
      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.1)";
        marker.togglePopup();
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        if (!isSelected) {
          marker.togglePopup();
        }
      });

      markersRef.current[temple.id] = marker;
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [temples]);

  // Update markers when selection changes
  useEffect(() => {
    if (!selectedTemple || !mapRef.current) return;

    const coords = getTempleCoords(selectedTemple);
    
    // Fly to selected temple
    mapRef.current.flyTo({
      center: coords,
      zoom: 13,
      duration: 1000,
    });

    // Update marker styles
    Object.entries(markersRef.current).forEach(([id, marker]) => {
      const el = marker.getElement();
      const svg = el.querySelector("svg");
      if (svg) {
        svg.setAttribute(
          "fill",
          id === selectedTemple.id ? "hsl(31 92% 45%)" : "hsl(27 96% 61%)"
        );
        
        if (id === selectedTemple.id) {
          el.style.transform = "scale(1.25)";
        } else {
          el.style.transform = "scale(1)";
        }
      }
    });
  }, [selectedTemple]);

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          
          if (mapRef.current) {
            mapRef.current.flyTo({
              center: [longitude, latitude],
              zoom: 12,
              duration: 1000,
            });

            // Add user location marker
            const el = document.createElement("div");
            el.className = "w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg";
            el.style.animation = "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite";

            new mapboxgl.Marker({ element: el })
              .setLngLat([longitude, latitude])
              .addTo(mapRef.current);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <div className="map-container relative h-full w-full">
      <div ref={mapContainerRef} className="absolute inset-0" />

      <Button
        onClick={handleLocateMe}
        className="absolute bottom-4 left-4 z-10 bg-card text-foreground hover:bg-card/90 shadow-lg"
        size="icon"
        aria-label="Locate me"
      >
        <Locate className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MapView;
