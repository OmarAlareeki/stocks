import SearchInput from "../components/SearchInput";
import { useState, useEffect } from "react";
import "../../src/App.css";
import useFetch from "../Hooks/useFetch";
import useDataApi from "../Hooks/axisFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { auth, db } from "../auth/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useUserAuth } from "../auth/UserAuthContent";
import Star from "@mui/icons-material/Star";

const Search = () => {
  const { user } = useUserAuth(auth);
  const apiUrl = "https://financialmodelingprep.com/api/v3/quote/";
  const [query, setQuery] = useState([]);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `${apiUrl}/BTCUSD?apikey=${process.env.REACT_APP_API_KEY}`
  );

  const sendSymbol = async (event) => {
    event.preventDefault();
    // if (query.trim() === "") {
    //   alert("Enter valid message");
    //   return;
    // }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "stks"), {
      text: query,
      name: displayName,
      createdAt: serverTimestamp(),
      uid,
    });
    setQuery("");
  };

  return (
    <Container>
      <h1 className="header"> CRYPTO CURRENCIES SEARCH</h1>
      <h3>You can search by company name, compnay stock shortcut</h3>
      <form
        onSubmit={(event) => {
          doFetch(
            `${apiUrl}${[query]}?apikey=${process.env.REACT_APP_API_KEY}`
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

      {/* <SearchInput
        type="text"
        value={text}
        onChange={handleChange}
      /> */}

      <div className="listContainer">
        <ul className="list">
          {isError && <div>Something went wrong ...</div>}
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <>
              {data &&
                data.map((item) => {
                  return (
                    <li key={item.id}>
                      <span>{item.symbol}</span>
                      <span>{item.price}</span>
                      <span>{item.name}</span>
                      <span> % {item.change}</span>
                      <>
                        {item.change < 0 ? (
                          <ArrowDownward style={{ color: "red" }} />
                        ) : (
                          <ArrowUpward />
                        )}
                      </>
                      {!user ? (
                        ""
                      ) : (
                        <button
                          style={{
                            border: "none",
                            background: "none",
                            color: "yellow",
                          }}
                          onClick={(event) => sendSymbol(event)}
                        >
                          SAVE TO TRACK
                        </button>
                      )}
                    </li>
                  );
                })}
            </>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default Search;
