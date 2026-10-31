export default function ShareLocation() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex min-h-screen items-center justify-center px-4 py-10">

                <div className="flex flex-col items-center space-y-6">

                    {/* Share Location Form */}
                    <div
                        className="w-full max-w-lg rounded-[20px] bg-white p-8"
                        style={{
                            boxShadow: "#00000057 1px 3px 4px",
                        }}
                    >
                        {/* Heading */}
                        <h1
                            className="mb-2 text-center text-3xl font-bold text-black"
                            style={{
                                textShadow: "#00000063 0px 3px 5px",
                            }}
                        >
                            Share a Place
                        </h1>

                        <p className="mb-6 text-center text-sm text-gray-500">
                            Discover something amazing? Share it with the world!
                        </p>

                        <form>

                            <div className="space-y-4">

                                {/* Place Name */}
                                <input
                                    type="text"
                                    placeholder="Place Name"
                                    required
                                    className="w-full rounded-md bg-[#E9EFF6] p-3 placeholder:text-[#000000]"
                                    style={{
                                        boxShadow: "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                    }}
                                />

                                {/* Country and City */}
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        required
                                        className="w-full rounded-md bg-[#E9EFF6] p-3 placeholder:text-[#000000]"
                                        style={{
                                            boxShadow: "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                        }}
                                    />

                                    <input
                                        type="text"
                                        placeholder="City"
                                        required
                                        className="w-full rounded-md bg-[#E9EFF6] p-3 placeholder:text-[#000000]"
                                        style={{
                                            boxShadow: "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                        }}
                                    />
                                </div>

                                {/* Category */}
                                <select
                                    required
                                    defaultValue=""
                                    className="w-full rounded-md bg-[#E9EFF6] p-3 text-gray-700"
                                    style={{
                                        boxShadow: "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                    }}
                                >
                                    <option value="" disabled>
                                        Select Category
                                    </option>
                                    <option value="nature">Nature</option>
                                    <option value="beach">Beach</option>
                                    <option value="mountain">Mountain</option>
                                    <option value="city">City</option>
                                    <option value="historical">Historical Place</option>
                                    <option value="restaurant">Restaurant</option>
                                    <option value="other">Other</option>
                                </select>

                                {/* Image URL */}
                                <input
                                    type="url"
                                    placeholder="Image URL (https://...)"
                                    className="w-full rounded-md bg-[#E9EFF6] p-3 placeholder:text-[#000000]"
                                    style={{
                                        boxShadow: "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                    }}
                                />

                                {/* Description */}
                                <textarea
                                    placeholder="Tell us about this amazing place..."
                                    rows="4"
                                    required
                                    className="w-full resize-none rounded-md bg-[#E9EFF6] p-3 placeholder:text-[#000000]"
                                    style={{
                                        boxShadow: "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                    }}
                                />

                            </div>

                            {/* Share Button */}
                            <div className="mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className="h-11 w-full cursor-pointer rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] font-semibold text-white shadow-md shadow-blue-950 hover:opacity-90"
                                >
                                    Share Location
                                </button>
                            </div>

                        </form>

                        {/* Footer */}
                        <div className="mt-5 text-center">
                            <a
                                href="/"
                                className="text-sm text-[#7337FF] hover:underline"
                            >
                                Back to Home
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}