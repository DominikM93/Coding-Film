import {useState, useEffect} from "react";

export const useFetchData = (url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return response;
            })
            .then((data) => {
                setData(data.items);
                setError(null);
            })
            .catch((err) => {
                setData(null);
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return {data, error, isLoading};
};

export const useFetchDataRedux = async (url) => {
    const res = await fetch(url);
    return await res.json();
};
