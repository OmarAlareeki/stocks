import { useEffect, useState } from "react";
import useDataApi from "../Hooks/axisFetch";
import Container from "@mui/material/Container";
const News = () => {
//   const [query, setQuery] = useState("GOOGL");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=10&apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );
  console.log(data)

  return (
    <>
      <Container>
        <h1 className="header"> NEWS PAGE</h1>
        <h3>You can search by company name, compnay stock shortcut</h3>

        <form
          onSubmit={(event) => {
            doFetch(
                "https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=10&apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
            );

            event.preventDefault();
          }}
        >
          {/* <SearchInput
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button variant="contained" size="small" type="submit">
            Search
          </Button> */}
        
        
        
        </form>
      </Container>
    </>
  );
};
export default News;
