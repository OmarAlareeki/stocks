// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, [url]);

//   return [data];
// };

// export default useFetch;
// import { useState, useEffect } from 'react'
// const useFetch = (initialUrl, initialParams = {}, skip = false) => {
//   const [url, updateUrl] = useState(initialUrl)
//   const [params, updateParams] = useState(initialParams)
//   const [data, setData] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [hasError, setHasError] = useState(false)
//   const [errorMessage, setErrorMessage] = useState('')
//   const [refetchIndex, setRefetchIndex] = useState(0)
//   const queryString = Object.keys(params)
//     .map((key) => encodeURIComponent(key) + '=' +
//     encodeURIComponent(params[key])).join('&')
//     const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)
//     useEffect(() => {
//     const fetchData = async () => {
//       if (skip) return
//       setIsLoading(true)
//       try {
//         const response = await fetch(`${url}${queryString}`)
//         const result = await response.json()
//         if (response.ok) {
//           setData(result)
//         } else {
//           setHasError(true)
//           setErrorMessage(result)
//         }
//       } catch (err) {
//         setHasError(true)
//         setErrorMessage(err.message)
//       } finally {
//         setIsLoading(false)
//       }
//     }
//     fetchData()
//   }, [url, params, refetchIndex])
//   return { data, isLoading, hasError, errorMessage, updateUrl, updateParams, refetch }
// }
// export default useFetch

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const response = await fetch(url);
      const json = await response.json();
      setIsPending(false);
      setData(json); 
    };
    fetchData();
  }, [url]);
  
  return { data, isPending };

};

export default useFetch;
