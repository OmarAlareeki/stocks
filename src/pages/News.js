import useDataApi from "../Hooks/axisFetch";
import { useState, useEffect } from "react";

const News = () => {

  const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-24&sortBy=publishedAt&apiKey=ca794f1f31034e9285dbfe50f138b074";
  const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi("https://financialmodelingprep.com/api/v3/profile/")

  console.log(data)

  return (
    <div className="listContainer">

      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Seamless Transactions</h3>
    </div>
  );
};
export default News;
