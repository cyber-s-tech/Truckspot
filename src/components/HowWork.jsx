import { motion } from "framer-motion";
 
import {

  Search,

  MapPin,

  Utensils,

  Heart,

  ArrowRight,

} from "lucide-react";
 
const steps = [

  {

    id: "01",

    icon: Search,

    title: "Discover Food Trucks",

    description:

      "Explore a variety of food trucks serving delicious meals around your city.",

  },

  {

    id: "02",

    icon: MapPin,

    title: "Find Nearby Locations",

    description:

      "Use our interactive map to discover food trucks near your current location.",

  },

  {

    id: "03",

    icon: Utensils,

    title: "Explore Their Menus",

    description:

      "Check out popular dishes, explore menus and find something you'll love.",

  },

  {

    id: "04",

    icon: Heart,

    title: "Enjoy Your Food",

    description:

      "Visit your favorite food truck and enjoy freshly prepared street food.",

  },

];
 
const HowWork = () => {

  return (
<section

      id="how-it-works"

      className="relative py-24 md:py-32 bg-white overflow-hidden"
>
 
      {/* Background Decoration */}
<div className="absolute top-20 -left-32 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl" />
 
      <div className="absolute bottom-10 -right-32 w-72 h-72 bg-yellow-100/40 rounded-full blur-3xl" />
 
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
 
        {/* Section Heading */}
<motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}

          className="text-center max-w-2xl mx-auto mb-16"
>
 
          <span className="inline-block text-orange-500 font-bold text-sm uppercase tracking-[3px] mb-4">

            Simple & Easy
</span>
 
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#24211e] leading-tight">

            Your Favorite Food,
<span className="text-orange-500"> Just a Few Clicks Away</span>
</h2>
 
          <p className="text-stone-500 mt-5 leading-relaxed">

            Finding amazing street food has never been easier.

            Follow these simple steps and discover your next favorite meal.
</p>
 
        </motion.div>
 
 
        {/* Steps */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
 
          {steps.map((step, index) => {
 
            const Icon = step.icon;
 
            return (
 
              <motion.div

                key={step.id}

                initial={{ opacity: 0, y: 35 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{

                  duration: 0.5,

                  delay: index * 0.15,

                }}

                className="relative group"
>
 
                {/* Card */}
<div className="h-full bg-[#fffaf5] border border-orange-100/70 rounded-[28px] p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-orange-100/70 hover:-translate-y-2">
 
                  {/* Number */}
<div className="flex justify-between items-center mb-8">
 
                    <span className="text-5xl font-black text-orange-100 group-hover:text-orange-200 transition-colors">

                      {step.id}
</span>
 
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200 group-hover:rotate-6 transition-transform duration-300">
 
                      <Icon size={26} strokeWidth={2} />
 
                    </div>
 
                  </div>
 
                  {/* Content */}
<h3 className="text-xl font-extrabold text-[#24211e] mb-3">

                    {step.title}
</h3>
 
                  <p className="text-sm text-stone-500 leading-7">

                    {step.description}
</p>
 
                  {/* Bottom Decoration */}
<div className="mt-7 flex items-center gap-2 text-orange-500">
 
                    <span className="text-xs font-bold uppercase tracking-wider">

                      Step {index + 1}
</span>
 
                    <ArrowRight

                      size={15}

                      className="group-hover:translate-x-2 transition-transform"

                    />
 
                  </div>
 
                </div>
 
              </motion.div>
 
            );
 
          })}
 
        </div>
 
 
        {/* Bottom CTA */}
<motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}

          className="mt-16 text-center"
>
 
          <a

            href="#map"

            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-orange-200 hover:shadow-orange-300"
>
 
            Find Food Trucks Near You
 
            <ArrowRight size={19} />
 
          </a>
 
        </motion.div>
 
      </div>
 
    </section>

  );

};
 
export default HowWork;
 