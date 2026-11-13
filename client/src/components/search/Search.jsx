export default function Search({ 
    search, 
    setSearch, 
    selectedCategory, 
    setSelectedCategory,
    places,
}) {
    const categories = [
        "All",
        "Nature",
        "Beach",
        "Mountain",
        "City",
        "Historical",
    ];
    
    return (
        <>
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
                    {places.length} Places
                </span>
            </div>
        </>
    );
}