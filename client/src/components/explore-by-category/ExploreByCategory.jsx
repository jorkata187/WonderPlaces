import { useParams } from "react-router";
import { useState } from "react";

import { useCategoryPlaces } from "../../api/placeApi";
import { parsedCategoryName } from "../../utils/parseUtils";

import Footer from "../footer/Footer";
import PlaceCatalog from "../place-catalog/PlaceCatalog";

export default function ExploreByCategory() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    const { categoryName } = useParams();

    const categoryN = parsedCategoryName(categoryName);

    const { filteredPlaces: places } = useCategoryPlaces(categoryN);

    const [search, setSearch] = useState("");

    const filteredPlaces = places.filter((place) => {
        const matchesSearch =
            place.name.toLowerCase().includes(search.toLowerCase()) ||
            place.country.toLowerCase().includes(search.toLowerCase());

        if (search === "") {
            return true;
        }
        return matchesSearch;
    });

    const resetSearch = () => {
        setSearch("");
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
                            Explore Amazing {categoryName}
                        </h1>

                        <p className="text-lg text-white">
                            Discover Beautiful {categoryName} Shared By People
                            Around The World.
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