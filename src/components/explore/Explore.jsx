import { useState } from "react";
import Footer from "../footer/Footer";

export default function Explore() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    const places = [
        {
            id: 1,
            name: "Santorini",
            country: "Greece",
            category: "Beach",
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
            description:
                "Discover the beautiful white houses and stunning blue waters of Santorini.",
        },
        {
            id: 2,
            name: "Swiss Alps",
            country: "Switzerland",
            category: "Mountain",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
            description:
                "Explore breathtaking mountains and peaceful alpine landscapes.",
        },
        {
            id: 3,
            name: "Paris",
            country: "France",
            category: "City",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
            description:
                "Experience the romantic atmosphere and beautiful architecture of Paris.",
        },
        {
            id: 4,
            name: "Bali",
            country: "Indonesia",
            category: "Nature",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
            description:
                "Enjoy tropical beaches, green rice terraces and incredible scenery.",
        },
        {
            id: 5,
            name: "Rome",
            country: "Italy",
            category: "Historical",
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
            description:
                "Discover ancient history, famous landmarks and Italian culture.",
        },
        {
            id: 6,
            name: "Maldives",
            country: "Maldives",
            category: "Beach",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
            description:
                "Relax in crystal-clear waters and enjoy paradise-like islands.",
        },
    ];

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "Nature",
        "Beach",
        "Mountain",
        "City",
        "Historical",
    ];

    const filteredPlaces = places.filter((place) => {
        const matchesSearch =
            place.name.toLowerCase().includes(search.toLowerCase()) ||
            place.country.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            place.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="min-h-screen bg-black/30 px-4 py-10">

                <div className="mx-auto max-w-7xl">

                    {/* Page Heading */}
                    <div className="mb-8 text-center">
                        <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
                            Explore Amazing Places
                        </h1>

                        <p className="text-lg text-white">
                            Discover beautiful destinations shared by people
                            around the world.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mx-auto mb-8 max-w-2xl">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search places or countries..."
                            className="w-full rounded-xl bg-white p-4 text-gray-800 shadow-lg outline-none focus:ring-2 focus:ring-[#7336FF]"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="mb-10 flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`rounded-full px-5 py-2 font-semibold transition ${selectedCategory === category
                                        ? "bg-gradient-to-br from-[#7336FF] to-[#3269FF] text-white shadow-lg"
                                        : "bg-white text-gray-700 hover:bg-[#E9EFF6]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Results Heading */}
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white">
                            Discover Places
                        </h2>

                        <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#7337FF]">
                            {filteredPlaces.length} Places
                        </span>
                    </div>

                    {/* Places Grid */}
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

                        {filteredPlaces.map((place) => (
                            <div
                                key={place.id}
                                className="overflow-hidden rounded-[20px] bg-white shadow-xl transition duration-300 hover:-translate-y-2"
                            >
                                {/* Place Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={place.image}
                                        alt={place.name}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-110"
                                    />

                                    <span className="absolute right-3 top-3 rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#7337FF] shadow">
                                        {place.category}
                                    </span>
                                </div>

                                {/* Place Information */}
                                <div className="p-5">

                                    <h3 className="mb-1 text-2xl font-bold text-gray-800">
                                        {place.name}
                                    </h3>

                                    <p className="mb-3 text-sm font-semibold text-[#7337FF]">
                                        📍 {place.country}
                                    </p>

                                    <p className="mb-5 text-sm leading-6 text-gray-600">
                                        {place.description}
                                    </p>

                                    {/* View Details */}
                                    <button
                                        onClick={() =>
                                            alert(`Viewing ${place.name}`)
                                        }
                                        className="w-full rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] py-3 font-semibold text-white shadow-md shadow-blue-950 transition hover:opacity-90"
                                    >
                                        View Details
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Empty Results */}
                    {filteredPlaces.length === 0 && (
                        <div className="rounded-[20px] bg-white p-10 text-center shadow-xl">
                            <h3 className="mb-2 text-2xl font-bold text-gray-800">
                                No Places Found
                            </h3>

                            <p className="text-gray-500">
                                Try searching for another place or category.
                            </p>

                            <button
                                onClick={() => {
                                    setSearch("");
                                    setSelectedCategory("All");
                                }}
                                className="mt-5 rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] px-6 py-2 text-white"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                    <Footer />
                </div>
            </div>
        </div>
    );
}
