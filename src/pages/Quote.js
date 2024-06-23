import SearchInput from "../components/SearchInput";
import { useState } from "react";
import "../../src/App.css";
import useDataApi from "../Hooks/axisFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Quote = () => {
  const apiUrl = "https://financialmodelingprep.com/api/v3/quote/";
  const [query, setQuery] = useState([]);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `${apiUrl}/googl?apikey=${process.env.REACT_APP_API_KEY}`
  );

  const formatNumber = (num) => {
    if (typeof num !== "number") return num;
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <>
      <Container>
        <h1 className="header"> Quote Page</h1>
        <h3>You can search by company name, company stock shortcut</h3>
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
          <ul style={{ display: "flex", flexDirection: "column" }}>
            {isError && <div>Something went wrong ...</div>}
            {isLoading && <div>Loading....</div>}
            {data &&
              data.map((item) => {
                return (
                  <li key={item.id} className="list">
                    <li>Company Symbol : {item.symbol}</li>
                    <li>Current Price : {item.price}</li>
                    <li>Compnay Name : {item.name}</li>
                    <li> Current Change : % {item.change}</li>
                    <li>Company Exchange Symbol : {item.exchange}</li>
                    <li>Company market Cap : {formatNumber(item.marketCap)}</li>
                    <li>Open For : {item.open}</li>
                    <li> Previous closing Price : $ {item.previousClose}</li>
                    <li>Shares Outstanding : {formatNumber(item.sharesOutstanding)}</li>
                    <li>High : {item.dayHigh}</li>
                    <li>Low : {item.dayLow}</li>
                    <li>Volume : {formatNumber(item.volume)}</li>
                    <li>
                      {" "}
                      {item.change < 0 ? (
                        <ArrowDownward style={{ color: "red" }} />
                      ) : (
                          <ArrowUpward />
                        )}
                    </li>
                    <></>
                  </li>
                );
              })}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Quote;
