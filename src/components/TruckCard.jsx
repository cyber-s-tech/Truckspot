import {
  Star,
  MapPin,
  Clock,
  ArrowUpRight,
  Utensils,
} from "lucide-react";
 
const TruckCard = ({ truck }) => {
  // Prevent undefined truck errors
  if (!truck || typeof truck !== "object") {
    return null;
  }
 
  const {
    image = "https://placehold.co/600x400?text=Food+Truck",
    name = "Food Truck",
    category = "Street Food",
    rating = "N/A",
    description = "Explore delicious food from this truck.",
    distance = "Distance unavailable",
    hours = "Hours unavailable",
    status = "Status unavailable",
    menu = [],
  } = truck;
 
  const isOpen = String(status).toLowerCase().includes("open");
 
  const truckMenu = Array.isArray(menu) ? menu : [];
 
  return (
<div className="group bg-white rounded-[24px] border border-stone-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100">
 
      {/* Truck Image */}
<div className="relative h-60 overflow-hidden">
 
        <img
          src={image || "https://placehold.co/600x400?text=Food+Truck"}
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/600x400?text=Food+Truck";
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
 
        {/* Category */}
<div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-xs font-bold text-stone-800 shadow-md">
          {category}
</div>
 
        {/* Rating */}
<div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full flex items-center gap-1 shadow-md">
 
          <Star
            size={14}
            fill="#F59E0B"
            color="#F59E0B"
          />
 
          <span className="text-xs font-bold text-stone-800">
            {rating}
</span>
 
        </div>
 
      </div>
 
      {/* Card Content */}
<div className="p-6">
 
        {/* Truck Name */}
<div className="flex justify-between items-start gap-3">
 
          <div>
 
            <h3 className="text-xl font-extrabold text-[#24211e] group-hover:text-orange-500 transition-colors">
              {name}
</h3>
 
            <p className="text-sm text-stone-500 mt-2">
              {description}
</p>
 
          </div>
 
          <ArrowUpRight
            size={21}
            className="text-orange-500 shrink-0"
          />
 
        </div>
 
        {/* Distance & Opening Hours */}
<div className="flex flex-wrap gap-4 mt-5 text-xs text-stone-500">
 
          <div className="flex items-center gap-1.5">
 
            <MapPin
              size={15}
              className="text-orange-500"
            />
 
            {distance}
 
          </div>
 
          <div className="flex items-center gap-1.5">
 
            <Clock
              size={15}
              className="text-orange-500"
            />
 
            {hours}
 
          </div>
 
        </div>
 
        {/* Status */}
<div className="mt-5">
 
          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
              isOpen
                ? "bg-green-50 text-green-600"
                : "bg-red-50 text-red-500"
            }`}
>
 
            <span
              className={`w-2 h-2 rounded-full ${
                isOpen ? "bg-green-500" : "bg-red-500"
              }`}
            />
 
            {status}
 
          </span>
 
        </div>
 
        {/* Popular Menu */}
<div className="mt-6 pt-5 border-t border-stone-100">
 
          <div className="flex items-center gap-2 mb-3">
 
            <Utensils
              size={16}
              className="text-orange-500"
            />
 
            <h4 className="text-sm font-bold text-stone-800">
              Popular Menu
</h4>
 
          </div>
 
          <div className="space-y-3">
 
            {truckMenu.length > 0 ? (
 
              truckMenu.slice(0, 2).map((item, index) => (
 
                <div
                  key={item.id || index}
                  className="flex justify-between items-center text-sm"
>
 
                  <span className="text-stone-600">
                    {item?.name || "Menu Item"}
</span>
 
                  <span className="font-bold text-stone-900">
                    {item?.price ?? "Price unavailable"}
</span>
 
                </div>
 
              ))
 
            ) : (
 
              <p className="text-sm text-stone-400">
                Menu information coming soon.
</p>
 
            )}
 
          </div>
 
        </div>
 
        {/* Button */}
<a
          href="#map"
          className="mt-6 w-full flex items-center justify-center gap-2 bg-[#fff2e3] hover:bg-orange-500 text-orange-600 hover:text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
>
 
          Find This Truck
 
          <ArrowUpRight size={17} />
 
        </a>
 
      </div>
 
    </div>
  );
};
 
export default TruckCard;