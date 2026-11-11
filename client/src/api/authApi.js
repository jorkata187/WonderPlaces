import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

import request from "../utils/request";
import { useUserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef(new AbortController());

    const login = async (email, password) => {
        const result = await request.post(`${baseUrl}/login`, { email, password }, { signal: abortRef.current.signal });

        return result;
    }

    useEffect(() => {
        const abortControler = abortRef.current;

        return () => abortControler.abort();
    }, []);

    return {
        login,
    }
};

export const useRegister = () => {
    const register = (email, username, password) =>
        request.post(`${baseUrl}/register`, { email, username, password });

    return {
        register
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useUserContext();

    useEffect(() => {
        if (!accessToken) {
            return;
        }
        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
            .then(() => {
                userLogoutHandler()
            })
            .catch(err => toast.error(err.message));
    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};
