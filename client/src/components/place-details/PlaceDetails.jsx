import { Link, useParams } from "react-router";

import { usePlace } from "../../api/placeApi";
import { useComments } from "../../api/commentApi";

import CommentsCreate from "../comments-create/CommentsCreate";
import CommentsShow from "../comments-show/CommentsShow";
import Footer from "../footer/Footer";

export default function PlaceDetails() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    const { placeId } = useParams();

    const { place } = usePlace(placeId);

    const { comments, setComments } = useComments(placeId);

    const addComment = (createdComment) => {
        setComments(state => [...state, createdComment])
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="min-h-screen bg-black/30 px-4 py-10">

                <div className="mx-auto max-w-4xl">

                    {/* Main Container */}
                    <div
                        className="overflow-hidden rounded-[20px] bg-white"
                        style={{
                            boxShadow: "#00000057 1px 3px 4px",
                        }}
                    >

                        {/* Place Image */}
                        <div className="relative h-72 sm:h-96">
                            <img
                                src={place.image}
                                alt={place.name}
                                className="h-full w-full object-cover"
                            />

                            <span className="absolute right-5 top-5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#7337FF] shadow">
                                {place.category}
                            </span>
                        </div>

                        {/* Place Information */}
                        <div className="p-6 sm:p-8">

                            {/* Heading */}
                            <div className="mb-6">
                                <h1
                                    className="mb-2 text-3xl font-bold text-black sm:text-4xl"
                                    style={{
                                        textShadow: "#00000030 0px 3px 5px",
                                    }}
                                >
                                    {place.name}
                                </h1>

                                <p className="text-lg font-semibold text-[#7337FF]">
                                    📍 {place.city}, {place.country}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h2 className="mb-3 text-xl font-bold text-black">
                                    About This Place
                                </h2>

                                <p className="text-sm leading-7 text-gray-600">
                                    {place.description}
                                </p>
                            </div>

                            {/* Author Information */}
                            <div className="mb-8 rounded-xl bg-[#E9EFF6] p-5">

                                <h2 className="mb-3 text-lg font-bold text-[#7337FF]">
                                    Shared By
                                </h2>

                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            👤 {place.username}
                                        </p>

                                        <p className="mt-1 text-xs text-gray-500">
                                            Shared on {place.date}
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#7337FF]">
                                        Explorer
                                    </span>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div>
                                <CommentsCreate
                                    addComment={addComment}
                                    placeId={placeId}
                                />

                                <CommentsShow comments={comments} />
                            </div>

                            {/* Back Button */}
                            <div className="mt-10 border-t border-gray-200 pt-6 text-center">
                                <Link
                                    to="/explore"
                                    className="inline-block rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] px-8 py-3 font-semibold text-white shadow-md shadow-blue-950 transition hover:opacity-90"
                                >
                                    ← Back to Explore
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}