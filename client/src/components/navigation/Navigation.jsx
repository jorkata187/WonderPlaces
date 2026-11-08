import { useContext, useState } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";


export default function Navigation() {
    const { username } = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">

                {/* Logo */}
                <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">
                    WonderPlaces
                </div>

                {/* Hamburger menu for mobile */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                                />
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <div
                    className={`${isOpen ? "flex" : "hidden"
                    } lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 items-center text-xl`}
                    >
                    <Link
                        to="/"
                        className="text-white px-4 py-2 hover:text-orange-600"
                        >
                        Home
                    </Link>

                    <Link
                        to="/explore"
                        className="text-white px-4 py-2 hover:text-orange-600"
                        onClick={() => setIsOpen(false)}
                        >
                        Explore
                    </Link>

                    <Link
                        to="/share"
                        className="text-white px-4 py-2 hover:text-orange-600"
                        onClick={() => setIsOpen(false)}
                        >
                        Share
                    </Link>

                    <Link
                        to="/about"
                        className="text-white px-4 py-2 hover:text-orange-600"
                        onClick={() => setIsOpen(false)}
                        >
                        About
                    </Link>

                    <Link
                        to="/login"
                        className="text-white px-4 py-2 hover:text-orange-600"
                        onClick={() => setIsOpen(false)}
                        >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="text-white px-4 py-2 hover:text-orange-600"
                        onClick={() => setIsOpen(false)}
                        >
                        Register
                    </Link>

                    <Link
                        to="/logout"
                        className="text-white px-4 py-2 hover:text-orange-600"
                        onClick={() => setIsOpen(false)}
                        >
                        Logout
                    </Link>

                        {username && <p className="text-sm">{username}</p>}

                </div>
            </div>
        </nav>
    );
}
