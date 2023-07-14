import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (url) => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    //componentDidMount
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url);
                let data = res && res.data && res.data.data ? res.data.data : [];

                setData(data);
                setLoading(false);
                setError(false);
            }
            fetchData();
        }
        catch (e) {
            console.log("e mess", e.message);
            setError(true);
            setLoading(false);
        }

    }, []);
    return {
        data, loading, error
    }
}
export default useFetch;