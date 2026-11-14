import PlaceCatalogItem from "./place-catalog-item/PlaceCatalogItem";

export default function PlaceCatalog({
    places,
    reset,
}) {
    return (
        <>
            {/* Results Heading */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                    Discover Places
                </h2>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#7337FF]">
                    {places.length} Places
                </span>
            </div>

            {/* Places Grid */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {places.map(place => <PlaceCatalogItem key={place.id} {...place} />)}
            </div>

            {/* Empty Results */}
            {places.length === 0 && (
                <div className="rounded-[20px] bg-white p-10 text-center shadow-xl">
                    <h3 className="mb-2 text-2xl font-bold text-gray-800">
                        No Places Found
                    </h3>

                    <p className="text-gray-500">
                        Try searching for another place or category.
                    </p>

                    <button
                        onClick={reset}
                        className="mt-5 rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] px-6 py-2 text-white"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </>
    );
}