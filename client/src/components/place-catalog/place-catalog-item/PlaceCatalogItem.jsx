import { Link } from "react-router";

export default function PlaceCatalogItem({
    id,
    name,
    country,
    category,
    image,
    description,
}) {
    return (
        <div
            className="overflow-hidden rounded-[20px] bg-white shadow-xl transition duration-300 hover:-translate-y-2"
        >
            {/* Place Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

                <span className="absolute right-3 top-3 rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#7337FF] shadow">
                    {category}
                </span>
            </div>

            {/* Place Information */}
            <div className="p-5">

                <h3 className="mb-1 text-2xl font-bold text-gray-800">
                    {name}
                </h3>

                <p className="mb-3 text-sm font-semibold text-[#7337FF]">
                    📍 {country}
                </p>

                <p className="mb-5 text-sm leading-6 text-gray-600">
                    {description}
                </p>

                {/* View Details */}
                <Link
                    to={`/place/${id}`}
                    className="inline-block rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] px-8 py-2.5 text-white shadow-md shadow-blue-950 hover:opacity-90"
                >
                    View Details
                </Link>

            </div>
        </div>
    );
}