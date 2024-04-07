import { useState } from "react";
import useDataApi from "../Hooks/axisFetch";
import Container from "@mui/material/Container";
const Crypto = () => {
  const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://financialmodelingprep.com/api/v3/quote/GOOGL?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );

  return (
    <>
      <Container>
        <h1 className="header"> CRYPTO PAGE</h1>
        <h3>Welcome User</h3>
      </Container>
    </>
  );
};

export default Crypto;