import { fromIsoDate } from "../../utils/dateUtils";

export default function CommentsShow({
    comments,
}) {
    return (
        <>
            {/* Comments List */}
            <h2 className="mb-5 text-2xl font-bold text-black">
                Comments ({comments.length})
            </h2>

            <div className="space-y-4">

                {comments.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No comments yet. Be the first to comment!
                    </p>
                ) : (
                    comments.map((comment) => (
                        <div
                            key={comment._id}
                            className="rounded-xl bg-[#E9EFF6] p-5"
                        >
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <p className="font-bold text-[#7337FF]">
                                    👤 {comment.username}
                                </p>

                                <span className="text-xs text-gray-500">
                                    {fromIsoDate(comment._createdOn)}
                                </span>
                            </div>

                            <p className="text-sm leading-6 text-gray-700">
                                {comment.text}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}