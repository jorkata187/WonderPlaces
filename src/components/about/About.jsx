export default function About() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex min-h-screen items-center justify-center py-10 px-4">

                <div className="flex flex-col items-center space-y-6">

                    {/* About container */}
                    <div
                        className="w-full max-w-xl rounded-[20px] bg-white p-8"
                        style={{
                            boxShadow: "#00000057 1px 3px 4px",
                        }}
                    >
                        {/* Heading */}
                        <h1
                            className="mb-6 text-center text-3xl font-bold text-black"
                            style={{
                                textShadow: "#00000063 0px 3px 5px",
                            }}
                        >
                            About Us
                        </h1>

                        {/* Introduction */}
                        <div className="space-y-4 text-center text-gray-700">

                            <p className="text-lg font-semibold text-[#7337FF]">
                                Welcome to Our Community!
                            </p>

                            <p className="text-sm leading-7">
                                We believe that every place has a story
                                worth sharing. Our platform gives people
                                the opportunity to discover beautiful
                                places around the world and share their
                                favourite locations with others.
                            </p>

                            <p className="text-sm leading-7">
                                Whether it's a hidden beach, a beautiful
                                mountain, a peaceful park, or an amazing
                                city, you can share your discoveries and
                                inspire others to explore new places.
                            </p>

                        </div>

                        {/* Our mission */}
                        <div className="mt-6 rounded-xl bg-[#E9EFF6] p-5">

                            <h2 className="mb-3 text-center text-xl font-bold text-[#7337FF]">
                                Our Mission
                            </h2>

                            <p className="text-center text-sm leading-6 text-gray-700">
                                Our mission is to connect people through
                                amazing places, inspire exploration, and
                                create a community where everyone can
                                share their experiences and discoveries.
                            </p>

                        </div>

                        {/* Features */}
                        <div className="mt-6 space-y-4">

                            <h2 className="text-center text-xl font-bold text-black">
                                What Can You Do?
                            </h2>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🌍</span>
                                <p className="text-sm text-gray-700">
                                    <strong>Discover Places</strong> –
                                    Explore amazing locations around the world.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📍</span>
                                <p className="text-sm text-gray-700">
                                    <strong>Share Locations</strong> –
                                    Add your favourite places and inspire others.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">💬</span>
                                <p className="text-sm text-gray-700">
                                    <strong>Leave Comments</strong> –
                                    Connect with other explorers and share opinions.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-2xl">❤️</span>
                                <p className="text-sm text-gray-700">
                                    <strong>Be Inspired</strong> –
                                    Find new destinations for your next adventure.
                                </p>
                            </div>

                        </div>

                        {/* Footer */}
                        <div className="mt-8 text-center">
                            <p className="mb-4 text-sm text-[#969696]">
                                Thank you for being part of our community!
                            </p>

                            <a
                                href="/explore"
                                className="inline-block rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] px-8 py-2.5 text-white shadow-md shadow-blue-950 hover:opacity-90"
                            >
                                Explore Places
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

