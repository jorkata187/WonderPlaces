import { useState } from "react";
import Footer from "../footer/Footer";

export default function PlaceDetails() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    // Example place data
    const place = {
        name: "Santorini",
        country: "Greece",
        city: "Oia",
        category: "Beach",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200",
        description:
            "Santorini is one of the most beautiful islands in Greece, famous for its white houses, blue domes, stunning sunsets and crystal-clear waters. It is a perfect destination for anyone who loves beautiful landscapes, amazing architecture and unforgettable experiences.",
        author: "John Smith",
        date: "October 25, 2026",
    };

    // Example comments
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "Emily",
            text: "Absolutely beautiful place! I would love to visit one day.",
            date: "October 26, 2026",
        },
        {
            id: 2,
            author: "Michael",
            text: "I've been there before. The sunsets are incredible!",
            date: "October 27, 2026",
        },
    ]);

    const [newComment, setNewComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newComment.trim()) return;

        const comment = {
            id: Date.now(),
            author: "You",
            text: newComment.trim(),
            date: new Date().toLocaleDateString(),
        };

        setComments([...comments, comment]);
        setNewComment("");
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
                                            👤 {place.author}
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

                                <h2 className="mb-5 text-2xl font-bold text-black">
                                    Comments ({comments.length})
                                </h2>

                                {/* Add Comment */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="mb-8"
                                >
                                    <textarea
                                        value={newComment}
                                        onChange={(e) =>
                                            setNewComment(e.target.value)
                                        }
                                        placeholder="Share your thoughts about this place..."
                                        rows="3"
                                        className="w-full resize-none rounded-md bg-[#E9EFF6] p-4 text-sm outline-none focus:ring-2 focus:ring-[#7336FF]"
                                    />

                                    <button
                                        type="submit"
                                        disabled={!newComment.trim()}
                                        className="mt-3 w-full rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] py-3 font-semibold text-white shadow-md shadow-blue-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-8"
                                    >
                                        Post Comment
                                    </button>
                                </form>

                                {/* Comments List */}
                                <div className="space-y-4">

                                    {comments.length === 0 ? (
                                        <p className="text-center text-gray-500">
                                            No comments yet. Be the first to comment!
                                        </p>
                                    ) : (
                                        comments.map((comment) => (
                                            <div
                                                key={comment.id}
                                                className="rounded-xl bg-[#E9EFF6] p-5"
                                            >
                                                <div className="mb-2 flex items-center justify-between gap-3">
                                                    <p className="font-bold text-[#7337FF]">
                                                        👤 {comment.author}
                                                    </p>

                                                    <span className="text-xs text-gray-500">
                                                        {comment.date}
                                                    </span>
                                                </div>

                                                <p className="text-sm leading-6 text-gray-700">
                                                    {comment.text}
                                                </p>
                                            </div>
                                        ))
                                    )}

                                </div>

                            </div>

                            {/* Back Button */}
                            <div className="mt-10 border-t border-gray-200 pt-6 text-center">
                                <a
                                    href="/explore"
                                    className="inline-block rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] px-8 py-3 font-semibold text-white shadow-md shadow-blue-950 transition hover:opacity-90"
                                >
                                    ← Back to Explore
                                </a>
                            </div>

                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}