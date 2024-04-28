import SearchInput from "../components/SearchInput";
import { useState } from "react";
import "../../src/App.css";
import useFetch from "../Hooks/useFetch";
import useDataApi from "../Hooks/axisFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Search = () => {
  const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://financialmodelingprep.com/api/v3/quote/GOOGL?apikey=77xtVWmNu1DOGBroooyXNWCxELSM8FV5"
  );

  return (
    <Container>
      <h1 className="header"> SEARCH PAGE</h1>
      <h3>You can search by company name, compnay stock shortcut</h3>

      <form
        onSubmit={(event) => {
          doFetch(
            `https://financialmodelingprep.com/api/v3/quote/${query}` +
              "?apikey=77xtVWmNu1DOGBroooyXNWCxELSM8FV5"
          );

          event.preventDefault();
        }}
      >
        <SearchInput
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button variant="contained" size = "small" type="submit">Search</Button>
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
