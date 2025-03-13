import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8  mt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and About */}
                <div>
                    <h2 className="text-2xl font-bold">🎬 MovieHub</h2>
                    <p className="text-gray-400 mt-2">
                        Your ultimate destination for movies,<br/> reviews, and entertainment!
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold">Explore</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Trending</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Genres</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">New Releases</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">More</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} MovieHub. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
