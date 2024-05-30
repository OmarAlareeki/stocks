import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import useDataApi from "../Hooks/axisFetch";
import companiesNames from "../data/list1.json";

const TradableStocks = () => {
  const apiUrl = "https://financialmodelingprep.com/api/v3/profile/";
  const [query, setQuery] = useState()
  const list = []
  const [{ data, isLoading, isError }, doFetch] = useDataApi();


  useEffect(() => {
    for(var i = 0; i <= 200; i++) { 
      if (!companiesNames[i].symbol.includes("."))
      list.push(companiesNames[i].symbol)
    }
    
    const listToString = list.toString();
    setQuery(listToString)

    doFetch(
      `${apiUrl}${query}?apikey=${process.env.REACT_APP_API_KEY}`
    );
    
    
  },[query, doFetch])
  console.log(data)

  return (
    <>
      <Container>
        <h1 className="header"> TRADABLE STOCKS</h1>
        <h3>
          Most of the stocks below, their price is higher than 3% as the last
          change.
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
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
                 {data.price.sort()}
                  {data &&
                    data.map((item) => {
                     
                        return (
                          <li key={item.id} style={{ margin: "20px" }}>
                            <span>{item.symbol}</span>

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
      </Container>
    </>
  );
};
export default TradableStocks;
