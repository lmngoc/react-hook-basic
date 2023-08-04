import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (url) => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    //componentDidMount
    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1st step

        async function fetchData() {

            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                });
                let data = res && res.data ? res.data : [];

                setData(data);
                setLoading(false);
                setError(false);
            }
            catch (err) {

                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setError(true);
                    setLoading(false);
                }
            }

        }
        setTimeout(() => {
            fetchData();
        }, 3000)




        return () => {
            ourRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        }

    }, [url]);
    return {
        data, loading, error
    }
}
export default useFetch;