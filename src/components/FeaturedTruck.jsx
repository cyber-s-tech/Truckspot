import { ArrowRight } from "lucide-react";
 
import TruckCard from "./TruckCard";
import { trucks } from "../data/Trucks";
 
const FeaturedTrucks = () => {
 
  // Ensure trucks is always an array
  const truckList = Array.isArray(trucks) ? trucks : [];
 
  return (
<section
      id="trucks"
      className="py-20 md:py-28 bg-[#fffaf5]"
>
 
      <div className="max-w-7xl mx-auto px-5 md:px-8">
 
        {/* Section Heading */}
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
 
          <div>
 
            <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-[3px] mb-4">
              Explore Local Favorites
</span>
 
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#24211e] leading-tight">
              Discover Popular
<span className="text-orange-500"> Food Trucks</span>
</h2>
 
            <p className="text-stone-500 mt-4 max-w-xl leading-relaxed">
              Find your next favorite meal from the best food trucks
              around your neighborhood.
</p>
 
          </div>
 
          <a
            href="#map"
            className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all"
>
            Explore Map
 
            <ArrowRight size={19} />
 
          </a>
 
        </div>
 
        {/* Truck Cards */}
        {truckList.length > 0 ? (
 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
 
            {truckList.map((truck, index) => (
 
              <TruckCard
                key={truck?.id || truck?._id || truck?.name || index}
                truck={truck}
              />
 
            ))}
 
          </div>
 
        ) : (
 
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-100">
 
            <h3 className="text-xl font-bold text-stone-800">
              No Food Trucks Available
</h3>
 
            <p className="text-stone-500 mt-2">
              Please check back later for exciting food trucks.
</p>
 
          </div>
 
        )}
 
      </div>
 
    </section>
  );
};
 
export default FeaturedTrucks;