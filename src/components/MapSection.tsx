"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Map, { Marker, NavigationControl } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from "lucide-react";

// TODO: Replace this with your actual Mapbox access token
const MAPBOX_TOKEN = "placeholder_token"; 

export default function MapSection() {
  const [viewState, setViewState] = useState({
    longitude: -74.006,
    latitude: 40.7128,
    zoom: 13,
    pitch: 60, // 3D tilt
    bearing: -20
  });

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--color-renivision-dark)] relative overflow-hidden flex flex-col md:flex-row items-center gap-16 editorial-border border-b border-t border-white/10">
      <div className="w-full md:w-1/2 max-w-xl z-10 max-w-7xl mx-auto md:ml-auto md:mr-0 pl-4 lg:pl-16">
        <AnimatedSection>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block">Available Worldwide</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white leading-tight">
            Renivision Studio
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-md font-sans text-white">
            Based in Westchester, New York, we travel across the globe to document intentional love stories. No destination is too far for your legacy.
          </p>
          <div className="text-white opacity-70 font-sans text-sm uppercase tracking-widest flex flex-col gap-2">
            <p>New York / New Jersey / Connecticut</p>
            <p>Europe / Destinations Worldwide</p>
          </div>
        </AnimatedSection>
      </div>
      
      <div className="w-full md:w-1/2 h-[450px] md:h-[600px] relative pr-4 lg:pr-16">
        <AnimatedSection delay={0.2} className="w-full h-full">
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
            {MAPBOX_TOKEN.includes("placeholder") ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white/50 bg-neutral-900">
                <MapPin className="text-[var(--color-renivision-accent)] w-12 h-12 mb-4 opacity-50 drop-shadow-[0_0_15px_rgba(196,164,130,0.8)]" />
                <p className="font-sans text-sm tracking-widest uppercase text-[var(--color-renivision-accent)] mb-2">Mapbox Setup Required</p>
                <p className="text-xs mt-2 max-w-xs opacity-70">
                  Please open <code className="text-[var(--color-renivision-accent)]">src/components/MapSection.tsx</code> and paste your Mapbox API token at the top of the file to load the 3D map.
                </p>
              </div>
            ) : (
              <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                mapStyle="mapbox://styles/mapbox/dark-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
              >
                <NavigationControl position="bottom-right" />
                
                <Marker longitude={-74.006} latitude={40.7128} anchor="bottom">
                  <div className="flex flex-col items-center">
                    <MapPin className="text-[var(--color-renivision-accent)] w-8 h-8 drop-shadow-[0_0_10px_rgba(196,164,130,0.8)]" />
                    <div className="mt-1 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-sans tracking-widest uppercase whitespace-nowrap border border-[var(--color-renivision-accent)]/30 rounded-full">
                      Renivision Studio
                    </div>
                  </div>
                </Marker>
              </Map>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
