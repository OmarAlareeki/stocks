import React, { useState } from "react";
import "../../src/App.css";
import useDataApi from "../Hooks/axisFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchInput from "../components/SearchInput";
import { db } from "../auth/auth"; // Ensure this points to your Firebase setup
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { format } from "date-fns"; // Import format from date-fns

const Crypto = () => {
  const apiUrl = "https://financialmodelingprep.com/api/v3/quote/";
  const [query, setQuery] = useState("");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `${apiUrl}/BTCUSD?apikey=${process.env.REACT_APP_API_KEY}`
  );

  const handleTrackStock = async (stock) => {
    try {
      await addDoc(collection(db, "trackedStocks"), {
        ...stock,
        createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'), // Example format
      });
      alert("Stock tracked successfully!");
    } catch (error) {
      console.error("Error tracking stock: ", error);
    }
  };

  return (
    <Container>
      <h1 className="header">CRYPTO CURRENCIES SEARCH</h1>
      <h3>You can search by company name, company stock shortcut</h3>
      <form
        onSubmit={(event) => {
          doFetch(
            `${apiUrl}${query}?apikey=${process.env.REACT_APP_API_KEY}`
          );
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
                    <span>Name: {item.name}</span>
                    <span>Price: ${item.price}</span>
                    <span>
                      Change: {item.change}%{" "}
                      {item.change < 0 ? (
                        <ArrowDownward style={{ color: "red" }} />
                      ) : (
                        <ArrowUpward style={{ color: "green" }} />
                      )}
                    </span>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleTrackStock(item)}
                    >
                      Track
                    </Button>
                  </li>
                ))}
            </>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default Crypto;
