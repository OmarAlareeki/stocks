import { useState } from "react";
import Container from "@mui/material/Container";
import SearchInput from "../components/SearchInput";
import useDataApi from "../Hooks/axisFetch";
import Button from "@mui/material/Button";

const CompaniesProfile = () => {
  const url = `https://financialmodelingprep.com/api/v3/profile/`;
  const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `${url}GOOGL?apikey=${process.env.REACT_APP_API_KEY}`
  );

  const formatMarketCap = (marketCap) => {
    // Check if marketCap is a valid number
    if (!marketCap || isNaN(marketCap)) return "";

    // Convert marketCap to number and format with commas
    return Number(marketCap).toLocaleString();
  };


  return (
    <>
      <Container>
        <h1 className="header"> Companies Profile</h1>
        <h3>Search company name by its symbol</h3>
        <form
          onSubmit={(event) => {
            doFetch(
              `${url}${query}?apikey=${process.env.REACT_APP_API_KEY}`
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
        {isLoading && <div>Loading....</div>}
        {isError && <div>Something went wrong ...</div>}
        {data &&
          data.map((item) => {
            return (
              <ul>
                <li>Symbol: {item.symbol}</li>
                <li>CEO: {item.ceo}</li>
                <li>Company Name: {item.companyName}</li>
                <li>Country: {item.country}</li>
                <li>Description: {item.description}</li>
                <li>Exchange: {item.exchangeShortName}</li>
                <li>Industry: {item.industry}</li>
                <li>IPO Date: {item.ipoDate}</li>
                <li>Market Cap: {formatMarketCap(item.mktCap)}</li>
                <li>Price: $ {item.price}</li>
                <li>Website: {item.website}</li>
                <img
                  src={item.image}
                  style={{
                    width: "100px",
                    margin: "auto",
                    margin: "50px",
                    border: "2px solid #f7f7f7",
                    padding: "10px",
                    background: "#fbfbee",
                  }}
                />
              </ul>
            );
          })}
      </Container>
    </>
  );
};

export default CompaniesProfile;
