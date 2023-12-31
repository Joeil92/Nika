import { useState } from "react";
import { useAsyncStorage } from "./UseAsyncStorage";

type HttpMethod = "POST" | "GET" | "PUT";
type fetchAPI = ({ url, method, body }: fetchProps) => Promise<Response>;

interface fetchProps {
    url: RequestInfo,
    method: HttpMethod,
    body?: any
}

function useFetch(): [fetchAPI, boolean] {
    const [loading, setLoading] = useState(false);
    const { getItem } = useAsyncStorage();

    const setHeaders = async (body: any | undefined) => {
        const headers: any | undefined = {
            'accept':'application/json'
        };

        if (body) headers['Content-Type'] = 'application/json';

        const token = await getItem("@Nika:_token");
        if (token) headers['Authorization'] = "Bearer " + token;
        
        return headers;
    }

    const fetchAPI = async ({url, method, body}: fetchProps) => {
        setLoading(true);
        
        try {
            return fetch(url, {
                method: method,
                headers: await setHeaders(body),
                body: body && body
            })
        } catch (error) {
            console.error("Une erreur est survenue lors de l'accès à l'API :", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return [fetchAPI, loading];
}

export default useFetch;