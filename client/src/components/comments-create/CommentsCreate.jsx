import { useState } from "react";
import { useCommentCreate } from "../../api/commentApi";
import { useUserContext } from "../../contexts/UserContext";

export default function CommentsCreate({
    addComment,
    placeId,
}) {
    const { username } = useUserContext();
    const [newComment, setNewComment] = useState("");

    const { create } = useCommentCreate();

    const commentAction = async () => {

        const createdComment = await create(placeId, username, newComment.trim());

        addComment(createdComment);
        setNewComment("");
    };

    return (
        <form
            action={commentAction}
            className="mb-8"
        >
            <textarea
                // value={newComment}
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
    );
}