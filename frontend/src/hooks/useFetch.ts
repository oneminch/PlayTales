import { useEffect, useState } from "react";

const useFetch = (url: string, defaultValue: any) => {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error(`Error: ${err}`);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return {
    data,
    loading,
    error
  };
};

export default useFetch;
