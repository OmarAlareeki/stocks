import SearchInput from "../components/SearchInput";
import { useState } from "react";
import "../../src/App.css";
import useFetch from "../Hooks/useFetch";
import useDataApi from "../Hooks/axisFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Recommended = () => {
  const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );

  return (
    <Container>
      <h1 className="header"> Recommended STOCKS</h1>
      <h3>ALL STOCKS LISTED BELOW THEIR CHANGE IS HIGHER THAN 3</h3>

      <form
        onLoad={(event) => {
          doFetch(
            "https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
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
                if(item.changes > 3)
                return (
                  <li key={item.id}>
                    <span>{item.ticker}</span>
                    <span>{item.changes}</span>
                    <span> % {item.changes > 3 && item.changes}</span>
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

export default Recommended;
