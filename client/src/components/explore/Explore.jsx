import { useState } from "react";

import { usePlaces } from "../../api/placeApi";

import Search from "../search/Search";
import Footer from "../footer/Footer";
import PlaceCatalog from "../place-catalog/PlaceCatalog";

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

    const resetSearch = () => {
        setSearch("");
        setSelectedCategory("All");
    };

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

                    <PlaceCatalog
                        places={filteredPlaces}
                        reset={resetSearch}
                    />

                    <Footer />
                </div>
            </div>
        </div>
    );
}
