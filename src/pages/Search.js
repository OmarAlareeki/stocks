import React, { useState } from "react";
import "../App.css";
import useDataApi from "../Hooks/axisFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchInput from "../components/SearchInput";
import { db } from "../auth/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useUserAuth } from "../auth/UserAuthContent";

const Search = () => {
  const { user } = useUserAuth(); // Adjust this hook based on your authentication setup
  const apiUrl = "https://financialmodelingprep.com/api/v3/quote/";
  const [query, setQuery] = useState("");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `${apiUrl}GOOGL?apikey=${process.env.REACT_APP_API_KEY}`
  );

  const handleTrackStock = async (stock) => {
    try {
      await addDoc(collection(db, "trackedStocks"), {
        symbol: stock.symbol,
        price: stock.price,
        name: stock.name,
        change: stock.change,
        createdAt: serverTimestamp(),
        uid: user.uid, // Assuming user is logged in and uid is available
      });
      alert("Stock tracked successfully!");
    } catch (error) {
      console.error("Error tracking stock: ", error);
      alert("Failed to track stock.");
    }
  };

  const formatNumber = (num) => {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, ",");
  };

  return (
    <Container>
      <h1 className="header">SEARCH PAGE</h1>
      <h3>You can search by company name, company stock shortcut</h3>

      <form
        onSubmit={(event) => {
          doFetch(`${apiUrl}${query}?apikey=${process.env.REACT_APP_API_KEY}`);
          event.preventDefault();
        }}
      >
        <SearchInput
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button variant="contained" size="small" type="submit">
          Search
        </Button>
      </form>

      <div className="listContainer">
        <ul className="list">
          {isError && <div>Something went wrong ...</div>}
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <>
              {data &&
                data.map((item) => (
                  <li key={item.symbol} className="listItem">
                    <span>{item.symbol}</span>
                    <span>Price: ${formatNumber(item.price)}</span>
                    <span>Name: {item.name}</span>
                    <span>
                      % Change: {item.change}{" "}
                      {item.change < 0 ? (
                        <ArrowDownward style={{ color: "red" }} />
                      ) : (
                        <ArrowUpward style={{ color: "green" }} />
                      )}
                    </span>
                    {user && (
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleTrackStock(item)}
                      >
                        Track
                      </Button>
                    )}
                  </li>
                ))}
            </>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default Search;
