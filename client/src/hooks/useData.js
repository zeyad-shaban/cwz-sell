import { useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const request = async (apiFunc, ...params) => {
        try {
            const { data } = await apiFunc(...params);
            setData(data);
        } catch (err) {
            if (err.response && err.response.status >= 400 && err.response.status < 500)
                setError(err.response.data);
                console.log(error)
        }
        setLoading(false);
    };

    return { data, setData, loading, setLoading, error, setError, request };
};

export default useData;