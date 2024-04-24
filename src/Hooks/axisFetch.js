import { useState, useEffect } from "react";
import axios from "axios";

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
    // Fetch updated data every 30 seconds (adjust interval as needed)
    const intervalId = setInterval(fetchData, 30000);

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useDataApi;
