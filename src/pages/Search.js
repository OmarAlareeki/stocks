import SearchInput from "../components/SearchInput";
import { useState } from "react";
import "../../src/App.css";
import useDataApi from "../Hooks/axisFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Search = () => {
  const apiUrl = "https://financialmodelingprep.com/api/v3/quote/";
  const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `${apiUrl}GOOGL?apikey=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <Container>
      <h1 className="header"> SEARCH PAGE</h1>
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
