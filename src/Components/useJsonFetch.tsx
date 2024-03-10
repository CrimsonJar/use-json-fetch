import { useState, useEffect } from "react";

const useJsonFetch = (url: string, opts: RequestInit) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
};

// export default useJsonFetch;
export { useJsonFetch };
