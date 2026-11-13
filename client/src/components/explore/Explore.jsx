import { useState } from "react";
import { Link } from "react-router";

import { usePlaces } from "../../api/placeApi";

import Search from "../search/Search";
import Footer from "../footer/Footer";

export default function Explore() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    const { places } = usePlaces();

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

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

                    <Search
                        search={search}
                        setSearch={setSearch}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        places={filteredPlaces}
                    />

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
                                    <Link
                                        to="/place/1"
                                        className="inline-block rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] px-8 py-2.5 text-white shadow-md shadow-blue-950 hover:opacity-90"
                                    >
                                        View Details
                                    </Link>

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
