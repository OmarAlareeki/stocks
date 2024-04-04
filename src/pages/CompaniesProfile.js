import { useState, useEffect } from "react";
import useDataApi from "../Hooks/axisFetch";
import { Button, Container } from "@mui/material";
import SearchInput from "../components/SearchInput";

const CompaniesProfile = () => {

  const [query, setQuery] = useState("GOOGL");
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = "https://financialmodelingprep.com/api/v3/profile/"
  const [{ data, isLoading, isError }, doFetch] = useDataApi(`${url}GOOGL?apikey=${apiKey}`);

  return (
    <Container>
      <h1 className="header"> SEARCH COMPANY PROFILE</h1>
      <h3>You can search by company name, compnay stock shortcut</h3>
      <form
        onSubmit={(event) => {
          doFetch(
            `${url}${query}?apikey=${apiKey}`
          );

          event.preventDefault();
        }}
      >
        <SearchInput
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button variant="contained" type="submit">Search</Button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data &&
            data.map((item) => (
              <div key={item.symbol}>
                <li>{item.symbol}</li>
                <li>{item.ceo}</li>
                <li>{item.companyName}</li>
                <li>{item.country}</li>
                <li><p>{item.description}</p></li>
                <li>{item.exchangeShortName}</li>
                <li>{item.industry}</li>
                <li>{item.ipoDate}</li>
                <li>{item.mktCap}</li>
                <li>{item.price}</li>
                <li>{item.website}</li>
                <img src={item.image} />
              </div>
            ))}
        </ul>
      )}
    </Container>
  );
};

export default CompaniesProfile;
