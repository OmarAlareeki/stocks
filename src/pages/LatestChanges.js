import Container from "@mui/material/Container";
import { useState } from "react";
import useDataApi from "../Hooks/axisFetch";

const LatestChanges = () => {
  const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://financialmodelingprep.com/api/v3/quote/GOOGL?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );
  return (
    <>
      <Container>
        <h1 className="header"> LAST STOCKS CHANGE</h1>
        <h3>Below you can find all the last changes in stocks, tickers, prices, and investors.</h3>
      </Container>
    </>
  );
};
export default LatestChanges;
