import { useState } from "react";
import { Link } from "react-router";

const destinations = [
    {
        id: 1,
        name: "Santorini",
        country: "Greece",
        category: "Beach",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
        description: "Discover beautiful white houses and breathtaking sea views.",
    },
    {
        id: 2,
        name: "Swiss Alps",
        country: "Switzerland",
        category: "Mountain",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        description: "Explore magnificent mountains and peaceful landscapes.",
    },
    {
        id: 3,
        name: "Paris",
        country: "France",
        category: "City",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
        description: "Experience the beauty and romance of the City of Light.",
    },
];

const categories = [
    { name: "Beaches", icon: "🏖️" },
    { name: "Mountains", icon: "⛰️" },
    { name: "Cities", icon: "🏙️" },
    { name: "Nature", icon: "🌿" },
];

export default function Home() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    const [search, setSearch] = useState("");

    const filteredDestinations = destinations.filter((place) =>
        `${place.name} ${place.country}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-cover bg-center bg-fixed">

            {/* HERO SECTION */}
            <section
                className="relative flex min-h-screen items-center justify-center bg-fixed bg-cover bg-center px-6 py-24 text-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="max-w-3xl text-white">

                    <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl">
                        Discover Places Worth Sharing
                    </h1>

                    <p className="mx-auto mb-9 max-w-2xl text-lg text-gray-200">
                        Explore beautiful destinations, discover hidden
                        gems and share your favourite places with the world.
                    </p>
                </div>
            </section>

            {/* POPULAR DESTINATIONS */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                            Popular Destinations
                        </h2>

                        <p className="mt-3 text-gray-500">
                            Find inspiration for your next adventure.
                        </p>
                    </div>

                    <Link
                        to="/explore"
                        className="font-semibold text-[#7336FF] transition hover:text-blue-600"
                    >
                        View all places →
                    </Link>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredDestinations.map((place) => (
                        <div
                            key={place.id}
                            className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#7336FF]">
                                    {place.category}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="mb-1 text-xl font-bold text-gray-800">
                                    {place.name}
                                </h3>

                                <p className="mb-3 text-sm text-gray-500">
                                    📍 {place.country}
                                </p>

                                <p className="mb-5 text-gray-600">
                                    {place.description}
                                </p>

                                <Link
                                    to="/explore"
                                    className="font-semibold text-[#7336FF] hover:text-blue-600"
                                >
                                    Discover more →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredDestinations.length === 0 && (
                    <p className="mt-8 text-center text-gray-500">
                        No destinations found. Try another search.
                    </p>
                )}
            </section>

            {/* CATEGORIES */}
            <section className="bg-white px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                            Explore by Category
                        </h2>

                        <p className="mt-3 text-gray-500">
                            What kind of adventure are you looking for?
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                to="/explore"
                                className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition hover:-translate-y-2 hover:border-purple-200 hover:bg-purple-50 hover:shadow-lg"
                            >
                                <span className="mb-4 block text-5xl">
                                    {category.icon}
                                </span>

                                <h3 className="font-bold text-gray-800">
                                    {category.name}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY WANDERLY */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                        More Than Just Travelling
                    </h2>

                    <p className="mt-3 text-gray-500">
                        A community built around discovering and sharing
                        amazing places.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                        <div className="mb-5 text-5xl">🧭</div>
                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                            Discover
                        </h3>
                        <p className="text-gray-500">
                            Find amazing destinations and hidden gems
                            recommended by other explorers.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                        <div className="mb-5 text-5xl">📸</div>
                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                            Share
                        </h3>
                        <p className="text-gray-500">
                            Share your favourite places, experiences
                            and travel memories.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-8 text-center shadow-md">
                        <div className="mb-5 text-5xl">💬</div>
                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                            Connect
                        </h3>
                        <p className="text-gray-500">
                            Connect with fellow travellers, leave comments
                            and inspire each other.
                        </p>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="bg-gradient-to-r from-[#7336FF] to-[#3269FF] px-6 py-20 text-center text-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
                        Have a Favourite Place?
                    </h2>

                    <p className="mb-8 text-lg text-white/90">
                        Share it with the other explorers and inspire
                        someone else's next adventure.
                    </p>

                    <Link
                        to="/share"
                        className="inline-block rounded-lg bg-white px-8 py-4 font-bold text-[#7336FF] shadow-lg transition hover:-translate-y-1 hover:bg-gray-100"
                    >
                        Share a Place
                    </Link>
                </div>
            </section>
        </div>
    );
}

// export default function Home() {
//    return (
//         <section className="w-full">
//             <div
//                 className="w-full h-[775px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center bg-fixed"
//                 style={{
//                     backgroundImage:
//                         "url('https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
//                 }}
//             >
//                 {/* Photo by '@insolitus' on Unsplash */}
//                 <div>
//                     <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold p-2 bg-opacity-40 rounded-sm">
//                         Discover New Places
//                     </h1>
//                 </div>

//                 <div className="w-full mx-auto">
//                     <form>
//                         <div className="xl:w-1/2 lg:w-[60%] sm:w-[70%] w-[90%] mx-auto flex gap-2 md:mt-6 mt-4">
//                             <input
//                                 type="text"
//                                 className="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
//                                 placeholder="Search for a place by country..."
//                             />

//                             <button
//                                 type="submit"
//                                 className="px-[10px] bg-blue-500 text-lg text-white rounded-md font-semibold"
//                             >
//                                 Search
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }