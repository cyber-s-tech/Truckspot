import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";

import {
  MapPin,
  Clock,
  Star,
  Navigation,
  ArrowUpRight,
  LocateFixed,
} from "lucide-react";

import { trucks } from "../data/trucks";


// Map Location Controller

const MapController = ({ selectedTruck }) => {

  const map = useMap();

  if (selectedTruck) {

    map.flyTo(
      [
        selectedTruck.latitude,
        selectedTruck.longitude,
      ],
      16,
      {
        duration: 1.2,
      }
    );

  }

  return null;

};


// Main Component

const MapSection = () => {

  const [selectedTruck, setSelectedTruck] = useState(null);

  const defaultPosition = [22.5726, 88.3639];


  return (

    <section
      id="map"
      className="py-24 bg-white scroll-mt-20"
    >

      <div className="max-w-7xl mx-auto px-5 lg:px-8">


        {/* Section Heading */}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

          <div>

            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">

              Explore Nearby

            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#24211e] mt-4">

              Find Your Next

              <br />
               <span className="text-orange-500">
                Food Adventure.
              </span>
            </h2>
            <p className="text-stone-500 mt-5 max-w-xl leading-7">
              Discover amazing food trucks around your location.
              Explore menus, check operating hours and find
              your favorite street food.
            </p>
          </div>

          {/* Location Badge */}
          <div className="flex items-center gap-3 bg-orange-50 border border-orange-100 px-5 py-4 rounded-2xl">
            <div className="w-11 h-11 bg-orange-500 text-white rounded-xl flex items-center justify-center">
              <LocateFixed size={22} />
            </div>
            <div>
              <p className="font-bold text-stone-800">
                Explore Nearby Trucks
              </p>
              <p className="text-xs text-stone-500 mt-1">
                {trucks.length} Sample Food Trucks
              </p>
            </div>
          </div>
        </div>

        {/* Map Layout */}
        <div className="grid lg:grid-cols-12 gap-7">

          {/* LEFT SIDE - FOOD TRUCK LIST */}
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold text-stone-900">
                Nearby Food Trucks
              </h3>
              <span className="text-sm text-orange-500 font-semibold">
                {trucks.length} Found
              </span>
            </div>

            <div className="space-y-4">
              {trucks.map((truck) => (
                <button
                  key={truck.id}
                  onClick={() => setSelectedTruck(truck)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                    selectedTruck?.id === truck.id
                      ? "border-orange-400 bg-orange-50 shadow-md"
                      : "border-stone-100 bg-[#fffaf5] hover:border-orange-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex gap-4">
                    {/* Truck Image */}
                    <img
                      src={truck.image}
                      alt={truck.name}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />

                    {/* Truck Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-stone-900">
                          {truck.name}
                        </h4>
                        <ArrowUpRight
                          size={17}
                          className="text-orange-500 shrink-0"
                        />
                      </div>

                      <p className="text-xs text-stone-500 mt-1">
                        {truck.category}
                      </p>

                      <div className="flex items-center gap-1 mt-3">
                        <Star
                          size={13}
                          fill="#F59E0B"
                          color="#F59E0B"
                        />
                        <span className="text-xs font-bold">
                          {truck.rating}
                        </span>
                        <span className="text-xs text-stone-400 ml-2">
                          {truck.distance}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Opening Status */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
                    <span className="flex items-center gap-2 text-xs font-semibold text-green-600">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      {truck.status}
                    </span>
                    <span className="text-xs text-stone-500">
                      {truck.hours}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - INTERACTIVE MAP */}
          <div className="lg:col-span-8">
            <div className="h-[550px] rounded-[28px] overflow-hidden border border-stone-200 shadow-lg relative">
              <MapContainer
                center={defaultPosition}
                zoom={14}
                scrollWheelZoom={false}
                className="w-full h-full"
              >
                {/* OpenStreetMap Tiles */}
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Selected Location Controller */}
                <MapController
                  selectedTruck={selectedTruck}
                />

                {/* Food Truck Markers */}
                {trucks.map((truck) => (
                  <CircleMarker
                    key={truck.id}
                    center={[
                      truck.latitude,
                      truck.longitude,
                    ]}
                    radius={
                      selectedTruck?.id === truck.id
                        ? 14
                        : 10
                    }
                    pathOptions={{
                      color: "#ffffff",
                      fillColor: "#f97316",
                      fillOpacity: 1,
                      weight: 3,
                    }}
                    eventHandlers={{
                      click: () => setSelectedTruck(truck),
                    }}
                  >
                    <Popup>
                      <div className="min-w-[160px]">
                        <h3 className="font-bold text-base">
                          {truck.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {truck.category}
                        </p>
                        <p className="text-sm text-green-600 mt-2">
                          {truck.status}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {truck.hours}
                        </p>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>

              {/* Map Overlay Label */}
              <div className="absolute top-5 left-5 z-[400] bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-orange-500"
                />
                <span className="text-sm font-bold text-stone-800">
                  Food Truck Locations
                </span>
              </div>
            </div>

            {/* Map Bottom Information */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
                Food Truck Location
              </div>
              <p className="text-xs text-stone-400">
                Demo locations · Kolkata, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MapSection;
 