import { useEffect, useState } from "react";
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/places';

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


