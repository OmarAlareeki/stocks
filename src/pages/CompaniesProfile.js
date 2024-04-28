import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import SearchInput from "../components/SearchInput";
import useDataApi from "../Hooks/axisFetch";
import Button from "@mui/material/Button";

const CompaniesProfile = () => {
  const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `https://financialmodelingprep.com/api/v3/profile/GOOGL?apikey=${process.env.REACT_APP_API_KEY}`
  );
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <>
      <Container>
        <h1 className="header"> Companies Profile</h1>
        <h3>Welcome User</h3>
        <form
          onSubmit={(event) => {
            doFetch(
              `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
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
        {data &&
          data.map((item) => {
            return (
              <ul>
                <li>{item.symbol}</li>
                <li>{item.ceo}</li>
                <li>{item.companyName}</li>
                <li>{item.country}</li>
                <li>{item.description}</li>
                <li>{item.exchangeShortName}</li>
                <li>{item.industry}</li>
                <li>{item.ipoDate}</li>
                <li>{item.mktCap}</li>
                <li>{item.price}</li>
                <li>{item.website}</li>
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
