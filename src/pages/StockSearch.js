import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import Container from "@mui/material/Container";
import Info from "@mui/icons-material/Info";
import RequestQuote from "@mui/icons-material/RequestQuote";
import Radar from "@mui/icons-material/Radar";
import JoinFull from "@mui/icons-material/JoinFull";
import Equalizer from "@mui/icons-material/Equalizer";
import Newspaper from "@mui/icons-material/Newspaper";
import Bolt from "@mui/icons-material/Bolt";
import Star from "@mui/icons-material/Star";
import Diamond from "@mui/icons-material/Diamond";
import useDataApi from "../Hooks/axisFetch";

const StockSearch = () => {
  const [query, setQuery] = useState(
    "GOOGL,MSFT,NVDA,AMZN,META,UNH,MA,AAPL,HD,LLY,AVGO,TSLA,JPM,COST,CRM,XOM,NFLX,CVX,MRK,AMD"
  );
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://financialmodelingprep.com/api/v3/profile/GOOGL?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );
  useEffect(() => {
    setQuery(query)
  },[query])

  return (
    <Container>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            padding: "20px",
            background: "rgb(242, 242, 242)",
          }}
        >
         Welcome to <Diamond />  StockSearch
        </h1>
        {/* <h2>
          It is one of the best GateWays to find the best recommendations where
          to invest.
        </h2> */}
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
              flexWrap: "wrap"
            }}
          >
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
              <div>Loading ...</div>
            ) : (
              <>
                {data &&
                  data.map((item) => {
                    return (
                      <li key={item.id}   style={{ margin: "20px", }}>
                        <img
                          src={item.image}
                          width={80}
                          height={80}
                        />
                        <span style={item.changes < 0 ? { margin: "20px", color: "red"} :{ margin: "20px", color: "green"} }>{item.price}</span>
                      </li>
                    );
                  })}
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="mainList">
        <h2>Here is what we serve you:</h2>
        <ol>
          <li>Search company by name, stocks shortcut, or company symbol.</li>
          <li>You can get a full quote of any stocks online.</li>
          <li>Real-time updates of changes.</li>
          <li>
            Keep track of all the companies by saving the company in your saved
            page.
          </li>
          <li>Fast to search all the data of any company.</li>
          <li>Can be used from any device, computer, or your mobile.</li>
          <li>
            It brings you all sources related to stocks such as news, updates,
            and on time price chnages.
          </li>
        </ol>
        <h2>How to naviagte through the app:</h2>
        <ol>
          <li>
            LatestChanges page shows you the latest changes of the most popular
            companies and their price changes.
          </li>
          <li>
            TradableStocks page tells you what stocks are available to buy.
          </li>
          <li>
            Quote & Search pages brings you the full data you need to know about
            your searched company.
          </li>
          <li>
            Recommended page brings you the most recommended available tradable
            stocks.
          </li>
          <li>
            <Info /> CompaniesProfile page brings you all the current
            information about the searched company.
          </li>
          <li>
            {" "}
            <Equalizer />
            Charts page shows you the historical changes and the current changes
            of the targeted company.
          </li>
          <li>
            <Star />
            If you have an account, you will have a saved page page that holds
            all the companies stocks that you can track all the changes of that
            company.
          </li>
        </ol>
        <h2>Recommendations:</h2>
        <ul>
          <li>
            Investing in stocks are risky and it is not garanteed to win always.
          </li>
          <li>always be careful to invest and where to invest.</li>
          <li>
            We are NOT resposible for your investment in any stocks you put you
            money in. We only shows you information and based on that you make
            your decision.
          </li>
        </ul>
      </div>
    </Container>
  );
};
export default StockSearch;
