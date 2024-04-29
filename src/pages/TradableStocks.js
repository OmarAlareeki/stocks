import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import useDataApi from "../Hooks/axisFetch";
import companiesNames from "../data/list1.json";

const TradableStocks = () => {
  const [query, setQuery] = useState(
    "GOOGL,MSFT,NVDA,AMZN,META,UNH,MA,AAPL,HD,LLY,AVGO,TSLA,JPM,COST,CRM,XOM,NFLX,CVX,MRK,AMD"
  );
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://financialmodelingprep.com/api/v3/profile/GOOGL?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );

  return (
    <>
      <Container>
        <h1 className="header"> DASHBOARD PAGE</h1>
        <h3>Coming from Tradable stocks.js</h3>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            onLoad={(event) => {
              doFetch(
                `https://financialmodelingprep.com/api/v3/profile/${query}` +
                  "?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
              );

              event.preventDefault();
            }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                background: "rgb(242, 242, 242)",
                flexWrap: "wrap",
              }}
            >
              {isError && <div>Something went wrong ...</div>}
              {isLoading ? (
                <div>Loading ...</div>
              ) : (
                <>
                  {data &&
                    data.map((item) => {
                      if (item.changes > 0)
                        return (
                          <li key={item.id} style={{ margin: "20px" }}>
                            <img src={item.image} width={20} height={20} />
                            <span
                              style={
                                item.changes < 0
                                  ? {
                                      fontSize: "12px",
                                      margin: "20px",
                                      color: "red",
                                    }
                                  : {
                                      fontSize: "12px",
                                      margin: "20px",
                                      color: "green",
                                    }
                              }
                            >
                              {"$" + item.price}
                            </span>
                          </li>
                        );
                    })}
                </>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};
export default TradableStocks;
