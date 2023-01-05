import { makeRequest } from "../makeRequest";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  // no need to have an async function here because fetchData is an async function
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        //console.log(res.data.data)
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
