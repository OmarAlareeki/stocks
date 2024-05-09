import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Info from "@mui/icons-material/Info";
import RequestQuote from "@mui/icons-material/RequestQuote";
import Radar from "@mui/icons-material/Radar";
import JoinFull from "@mui/icons-material/JoinFull";
import Equalizer from "@mui/icons-material/Equalizer";
import Newspaper from "@mui/icons-material/Newspaper";
import Bolt from "@mui/icons-material/Bolt";
import Star from "@mui/icons-material/Star";
import Insights from "@mui/icons-material/Insights";
import useDataApi from "../Hooks/axisFetch";

const StockSearch = () => {
  const apiUrl = `https://financialmodelingprep.com/api/v3/profile/`;
  const [query, setQuery] = useState(
    "GOOGL,MSFT,NVDA,AMZN,META,UNH,MA,AAPL,HD,LLY,AVGO,TSLA,JPM,COST,CRM,XOM,NFLX,CVX,MRK,AMD"
  );
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `${apiUrl}${query}?apikey=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <Container>
      <div
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          onLoad={(event) => {
            doFetch(
              `${apiUrl}${query}?apikey=${process.env.REACT_APP_API_KEY}`
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
      <div className="mainList">
        <h1>Sign up for more features</h1>
        <p>Go to profile page to sign up and create a user.</p>
        <h2 className="header">The benefit of creating a user:</h2>
        <ul>
          <li>You can make any search item to track.</li>
          <li>The saved track page will be create.</li>
          <li>
            The saved track will show you all the items maked to track and save
            them there.
          </li>
        </ul>
        <h2 className="header">Here is what we serve you:</h2>
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
        <h1>How to naviagte through the app:</h1>
        <h4>
          There are nine pages plus profile page in this app. Every page has
          some features you might need to know how to use them before exploring
          the app. Below is the description of all these features for each page.
        </h4>
        <ol>
          <li>
            <h5>
              LatestChanges Page <Bolt />
            </h5>
            LatestChanges page shows you the latest changes of the most popular
            companies and their price changes.
          </li>
          <li>
            <h5>
              News Page <Newspaper />
            </h5>
            LatestChanges page shows you the latest changes of the most popular
            companies and their price changes.
          </li>
          <li>
            <h5>
              TradableStocks <JoinFull />
            </h5>
            TradableStocks page tells you what stocks are available to buy.
          </li>
          <li>
            <h5>
              Quote page <RequestQuote />
            </h5>
            Quote & Search pages brings you the full data you need to know about
            your searched company.
          </li>
          <li>
            <h5>
              Search page <Radar />
            </h5>
            Quote & Search pages brings you the full data you need to know about
            your searched company.
          </li>
          <li>
            <h5>
              Recommended page
              <Insights />
            </h5>
            Recommended page brings you the most recommended available tradable
            stocks.
          </li>
          <li>
            <h5>
              CompaniesProfile <Info />
            </h5>
            CompaniesProfile page brings you all the current information about
            the searched company.
          </li>
          <li>
            <h5>
              Charts Page <Equalizer />
            </h5>
            Charts page shows you the historical changes and the current changes
            of the targeted company.
          </li>
          <li>
            <h5>
              SavedTrack page <Star />
            </h5>
            If you have an account, you will have a saved page page that holds
            all the companies stocks that you can track all the changes of that
            company.
          </li>
        </ol>
        <h1>Recommendations:</h1>
        <ol>
          <li>
            Investing in stocks are risky and it is not garanteed to win always.
          </li>
          <li>always be careful to invest and where to invest.</li>
          <li>
            We are NOT resposible for your investment in any stocks you put you
            money in. We only shows you information and based on that you make
            your decision.
          </li>
        </ol>
      </div>
    </Container>
  );
};
export default StockSearch;
