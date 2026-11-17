import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments';

export const useComments = (placeId) => {
    const { request } = useAuth();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `placeId="${placeId}"`
        })

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setComments)
    }, [placeId]);

    return {
        comments,
        setComments,
    }
};

export const useCommentCreate = () => {
    const { request } = useAuth();

    const create = (placeId, username, text) => {
        return request.post(baseUrl, { placeId, username, text });
    }

    return {
        create,
    }
}