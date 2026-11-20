import { motion } from "framer-motion";

import {

    ArrowRight,

    MapPin,

    Star,

    Apple,

    Play,

    Navigation,

    Truck,

} from "lucide-react";

// Replace with your actual mobile image filename

import mobileImage from "../assets/mobile-app.png";

const HeroBanner = () => {

    return (
        <section

            id="home"

            className="relative overflow-hidden bg-[#fffdf9] min-h-[650px] lg:min-h-[700px]"
        >

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px]" />

                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[100px]" />

                {/* Decorative Map Lines */}
                <div className="absolute inset-0 opacity-[0.035]">
                    <div className="absolute top-0 left-[45%] w-px h-full bg-stone-900 rotate-[25deg]" />
                    <div className="absolute top-0 left-[65%] w-px h-full bg-stone-900 rotate-[-25deg]" />
                    <div className="absolute top-[30%] left-0 w-full h-px bg-stone-900 rotate-[-8deg]" />
                    <div className="absolute top-[70%] left-0 w-full h-px bg-stone-900 rotate-[8deg]" />
                </div>

            </div>


            <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center min-h-[650px] lg:min-h-[700px] py-16 lg:py-10">

                    {/* LEFT CONTENT */}
                    <motion.div

                        initial={{ opacity: 0, x: -40 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.7 }}

                        className="relative z-10 max-w-xl"
                    >

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white border border-orange-100 px-4 py-2 rounded-full mb-7 shadow-sm">

                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />

                            <span className="text-xs font-bold text-stone-700 tracking-wide">

                                LIVE FOOD TRUCK DISCOVERY
                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="text-[46px] sm:text-6xl lg:text-[68px] xl:text-[76px] font-black leading-[1.02] tracking-[-2px] text-[#171717]">

                            Find Your Next

                            <br />

                            Favorite

                            <br />

                            <span className="text-orange-500">

                                Food Truck.
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="text-stone-600 text-base sm:text-lg leading-8 mt-7 max-w-lg">

                            Discover, track, and explore the best food trucks

                            near you — all in one place.

                        </p>


                        {/* Green Accent */}
                        <div className="w-16 h-1.5 bg-green-700 rounded-full mt-7" />


                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mt-8">

                            <a

                                href="#map"

                                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1"
                            >

                                Explore Nearby

                                <ArrowRight size={19} />

                            </a>

                            <a

                                href="#trucks"

                                className="inline-flex items-center gap-2 border border-stone-300 hover:border-orange-400 bg-white text-stone-800 px-7 py-4 rounded-xl font-bold transition-all duration-300"
                            >

                                Find Trucks

                            </a>

                        </div>


                        {/* App Download Buttons */}
                        <div className="mt-9">

                            <p className="text-xs font-semibold text-stone-500 mb-3">

                                DOWNLOAD OUR APP
                            </p>

                            <div className="flex flex-wrap gap-3">

                                {/* App Store */}
                                <a

                                    href="#download"

                                    className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl hover:bg-stone-800 transition-colors"
                                >

                                    <Apple size={27} fill="white" />

                                    <div>
                                        <p className="text-[9px] leading-none text-stone-300">

                                            Download on the
                                        </p>

                                        <p className="text-sm font-bold mt-1">

                                            App Store
                                        </p>
                                    </div>

                                </a>


                                {/* Google Play */}
                                <a

                                    href="#download"

                                    className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl hover:bg-stone-800 transition-colors"
                                >

                                    <Play

                                        size={25}

                                        fill="#22c55e"

                                        color="#22c55e"

                                    />

                                    <div>
                                        <p className="text-[9px] leading-none text-stone-300">

                                            GET IT ON
                                        </p>

                                        <p className="text-sm font-bold mt-1">

                                            Google Play
                                        </p>
                                    </div>

                                </a>

                            </div>

                        </div>

                    </motion.div>


                    {/* RIGHT SIDE - MOBILE APP IMAGE */}
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9, x: 30 }}

                        animate={{ opacity: 1, scale: 1, x: 0 }}

                        transition={{ duration: 0.9 }}

                        className="relative flex items-center justify-center min-h-[450px] lg:min-h-[620px]"
                    >

                        {/* Orange Circle */}
                        <div className="absolute w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] bg-orange-500 rounded-full" />


                        {/* Background Decoration */}
                        <div className="absolute w-[350px] h-[350px] sm:w-[490px] sm:h-[490px] lg:w-[560px] lg:h-[560px] border border-orange-200 rounded-full" />


                        {/* Mobile App Image */}
                        <motion.img

                            src={mobileImage}

                            alt="Truck Spot mobile application"

                            animate={{ y: [0, -10, 0] }}

                            transition={{

                                duration: 4,

                                repeat: Infinity,

                                ease: "easeInOut",

                            }}

                            className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[490px] max-h-[600px] object-contain drop-shadow-2xl"

                        />


                        {/* Floating Location Badge */}
                        <motion.div

                            animate={{ y: [0, -8, 0] }}

                            transition={{

                                duration: 3,

                                repeat: Infinity,

                                ease: "easeInOut",

                            }}

                            className="absolute top-[12%] right-[2%] sm:right-[5%] z-20 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-3"
                        >

                            <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center">

                                <MapPin

                                    size={23}

                                    className="text-orange-500"

                                />

                            </div>

                            <div>
                                <p className="text-xs font-bold text-stone-900">

                                    Nearby Trucks
                                </p>

                                <p className="text-[10px] text-green-600 mt-1">

                                    Explore locations
                                </p>
                            </div>

                        </motion.div>


                        {/* Floating Rating Badge */}
                        <motion.div

                            animate={{ y: [0, 8, 0] }}

                            transition={{

                                duration: 3.5,

                                repeat: Infinity,

                                ease: "easeInOut",

                            }}

                            className="absolute bottom-[15%] left-0 sm:left-[2%] z-20 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
                        >

                            <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center">

                                <Truck

                                    size={23}

                                    className="text-green-600"

                                />

                            </div>

                            <div>

                                <div className="flex items-center gap-1">

                                    <Star

                                        size={13}

                                        fill="#F59E0B"

                                        color="#F59E0B"

                                    />

                                    <span className="text-sm font-bold text-stone-900">

                                        Food Discovery
                                    </span>

                                </div>

                                <p className="text-[10px] text-stone-500 mt-1">

                                    Find your next favorite meal
                                </p>

                            </div>

                        </motion.div>


                        {/* Small Location Marker */}
                        <div className="absolute top-[35%] right-0 z-20 w-12 h-12 bg-orange-500 rounded-full rounded-br-none rotate-45 shadow-lg flex items-center justify-center">

                            <MapPin

                                size={23}

                                color="white"

                                className="-rotate-45"

                            />

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>

    );

};

export default HeroBanner;
