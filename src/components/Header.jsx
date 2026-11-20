import { useState } from "react";
import {
    Menu,
    X,
    MapPin,
    ArrowUpRight,
} from "lucide-react";

import logo from '../assets/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Explore Trucks", href: "#trucks" },
        { name: "Live Map", href: "#map" },
        { name: "How It Works", href: "#how-it-works" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#fffaf4]/95 backdrop-blur-xl border-b border-orange-100">

            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="h-[80px] flex items-center justify-between">

                    {/* Logo */}

                    <a
                        href="#home"
                        className="flex items-center gap-2"
                    >

                        <div className="w-15 h-15   flex items-center justify-center text-white  shadow-orange-200">

                            <img src={logo} alt="" />
                        </div>

                        <span className="text-2xl font-extrabold tracking-tight text-[#24211e]">

                            Truck
                            <span className="text-orange-500">Spot.</span>

                        </span>

                    </a>

                    {/* Desktop Navigation */}

                    <nav className="hidden lg:flex items-center gap-9">

                        {navLinks.map((link) => (

                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-stone-600 hover:text-orange-500 transition-colors duration-300"
                            >

                                {link.name}

                            </a>

                        ))}

                    </nav>

                    {/* Desktop CTA */}

                    <a
                        href="#download"
                        className="hidden lg:flex items-center gap-2 bg-[#24211e] hover:bg-orange-500 text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                    >

                        Download App

                        <ArrowUpRight size={17} />

                    </a>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-stone-800"
                        aria-label="Toggle navigation"
                    >

                        {isOpen ? (
                            <X size={27} />
                        ) : (
                            <Menu size={27} />
                        )}

                    </button>

                </div>

                {/* Mobile Navigation */}

                {isOpen && (

                    <div className="lg:hidden border-t border-orange-100 py-6">

                        <nav className="flex flex-col gap-5">

                            {navLinks.map((link) => (

                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-semibold text-stone-700 hover:text-orange-500"
                                >

                                    {link.name}

                                </a>

                            ))}

                            <a
                                href="#download"
                                onClick={() => setIsOpen(false)}
                                className="bg-orange-500 text-white text-center py-3.5 rounded-full font-bold"
                            >

                                Download App

                            </a>

                        </nav>

                    </div>

                )}

            </div>

        </header>
    );
};

export default Header;