import SearchInput from "../components/SearchInput";
import { useState } from "react";
import "../../src/App.css";
import useDataApi from "../Hooks/axisFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { auth, db } from "../auth/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useUserAuth } from "../auth/UserAuthContent";

const Search = () => {
  const { user } = useUserAuth(auth);
  const apiUrl = "https://financialmodelingprep.com/api/v3/quote/";
  const [query, setQuery] = useState([]);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `${apiUrl}/BTCUSD?apikey=${process.env.REACT_APP_API_KEY}`
  );

  const sendSymbol = async (event) => {
    event.preventDefault();
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
                      <li key={item.id} style={{ display: "flex", flexDirection: "column" }}>
                        <span>{item.name}</span>
                        <span>Price : {item.price}</span>
                        <span> Change : %{item.change}    <>
                          {item.change < 0 ? (
                            <ArrowDownward style={{ color: "red" }} />
                          ) : (
                              <ArrowUpward />
                            )}
                        </></span>

                        {!user ? (
                          ""
                        ) : (
                            <button
                              style={{
                                border: "none",
                                background: "none",
                                color: "yellow",
                                cursor: "pointer"
                              }}
                              onClick={(event) => sendSymbol(event)}
                            >
                              TRACK
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
