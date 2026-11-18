import { useEffect, useState } from "react";

import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/places';

export const useCreatePlace = () => {
    const { request } = useAuth();

    const create = (placeData) => {
        return request.post(baseUrl, placeData);
    }
    
    return {
        create,
    }
};

export const usePlaces = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        request.get(baseUrl)
            .then(setPlaces)
    }, []);

    return {
        places,
    }
};

export const usePlace = (placeId) => {
    const [place, setPlace] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${placeId}`)
            .then(setPlace)
    }, [placeId]);

    return {
        place,
    }
};


