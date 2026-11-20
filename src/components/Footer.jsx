import {

    MapPin,

    Mail,

    Phone,

    ArrowUpRight,

    Utensils,

} from "lucide-react";

import {

    FaFacebookF,

    FaInstagram,

    FaXTwitter,

} from "react-icons/fa6";

import logo from '../assets/logo.png'

const Footer = () => {

    return (
        <footer className="bg-[#24211e] text-white">

            <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">

                    {/* Brand */}
                    <div>

                        <a href="#home" className="inline-flex items-center gap-3">

                            <div className="w-15 h-15   flex items-center justify-center text-white  shadow-orange-200">

                                <img src={logo} alt="" />
                            </div>


                            <span className="text-2xl font-extrabold tracking-tight">

                                Truck<span className="text-orange-500">Spot.</span>
                            </span>

                        </a>

                        <p className="text-stone-400 text-sm leading-7 mt-6 max-w-xs">

                            Discover amazing food trucks, explore delicious menus

                            and find your next favorite street food experience

                            with Truck Spot.
                        </p>

                        {/* Social Media */}
                        <div className="flex items-center gap-3 mt-7">

                            <a

                                href="https://facebook.com"

                                target="_blank"

                                rel="noreferrer"

                                aria-label="Facebook"

                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors"
                            >
                                <FaFacebookF size={17} />
                            </a>

                            <a

                                href="https://instagram.com"

                                target="_blank"

                                rel="noreferrer"

                                aria-label="Instagram"

                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a

                                href="https://x.com"

                                target="_blank"

                                rel="noreferrer"

                                aria-label="X"

                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors"
                            >
                                <FaXTwitter size={17} />
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>

                        <h3 className="text-lg font-bold mb-7">

                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-sm text-stone-400">

                            <li>
                                <a href="#home" className="hover:text-orange-400 transition-colors">

                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#map" className="hover:text-orange-400 transition-colors">

                                    Explore Map
                                </a>
                            </li>

                            <li>
                                <a href="#trucks" className="hover:text-orange-400 transition-colors">

                                    Food Trucks
                                </a>
                            </li>

                            <li>
                                <a href="#how-it-works" className="hover:text-orange-400 transition-colors">

                                    How It Works
                                </a>
                            </li>

                            <li>
                                <a href="#newsletter" className="hover:text-orange-400 transition-colors">

                                    Newsletter
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* Explore */}
                    <div>

                        <h3 className="text-lg font-bold mb-7">

                            Explore
                        </h3>

                        <ul className="space-y-4 text-sm text-stone-400">

                            <li>
                                <a href="#trucks" className="hover:text-orange-400 transition-colors">

                                    Popular Food Trucks
                                </a>
                            </li>

                            <li>
                                <a href="#map" className="hover:text-orange-400 transition-colors">

                                    Nearby Locations
                                </a>
                            </li>

                            <li>
                                <a href="#trucks" className="hover:text-orange-400 transition-colors">

                                    Popular Menus
                                </a>
                            </li>

                            <li>
                                <a href="#newsletter" className="hover:text-orange-400 transition-colors">

                                    Food Updates
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="text-lg font-bold mb-7">

                            Get In Touch
                        </h3>

                        <ul className="space-y-5 text-sm text-stone-400">

                            <li className="flex items-start gap-3">
                                <MapPin size={19} className="text-orange-400 shrink-0" />

                                <span>

                                    Discover food trucks and local food experiences

                                    around your city.
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail size={19} className="text-orange-400 shrink-0" />

                                <a

                                    href="mailto:hello@truckspot.com"

                                    className="hover:text-orange-400 transition-colors"
                                >

                                    hello@truckspot.com
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone size={19} className="text-orange-400 shrink-0" />

                                <a

                                    href="tel:+911234567890"

                                    className="hover:text-orange-400 transition-colors"
                                >

                                    +91 12345 67890
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

                    <p className="text-sm text-stone-500 text-center md:text-left">
                        © {new Date().getFullYear()} Designed and Developed by{' '}
                        <a
                            href="https://ahaansoftware.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:underline"
                        >
                            Ahaan Software
                        </a>.
                    </p>

                    <a

                        href="#home"

                        className="flex items-center gap-2 text-sm font-semibold text-stone-400 hover:text-orange-400 transition-colors"
                    >

                        Back to Top
                        <ArrowUpRight size={17} />
                    </a>

                </div>

            </div>

        </footer>

    );

};

export default Footer;
