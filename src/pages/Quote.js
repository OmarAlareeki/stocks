import SearchInput from "../components/SearchInput";
import { useState } from "react";
import "../../src/App.css";
import useFetch from "../Hooks/useFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import Container from "@mui/material/Container";

const Quote = () => {
  const [text, setText] = useState("GOOGL");
  const { data, isPending } = useFetch(
    "https://financialmodelingprep.com/api/v3/quote/" +
      text +
      "?apikey=77xtVWmNu1DOGBroooyXNWCxELSM8FV5"
  );
  // const [data] = useFetch(
  //   "https://financialmodelingprep.com/api/v3/quote/" +
  //     text +
  //     "?apikey=77xtVWmNu1DOGBroooyXNWCxELSM8FV5"
  // );
  console.log(data);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <>
      <Container>
        <h1 className="header"> Quote Page</h1>
        <h3>You can search by company name, compnay stock shortcut</h3>
        <SearchInput type="text" value={text} onChange={handleChange} />

        <div className="listContainer">
          <ul style={{ display: "flex", flexDirection: "column" }}>
            {isPending && <div>Loading....</div>}
            {data &&
              data.map((item) => {
                return (
                  <li key={item.id} className="list">
                    <li>Company Symbol : {item.symbol}</li>
                    <li>Current Price : {item.price}</li>
                    <li>Compnay Name : {item.name}</li>
                    <li> Current Change : % {item.change}</li>
                    <li>Company Exchange Symbol : {item.exchange}</li>
                    <li>Company market Cap : {item.marketCap}</li>
                    <li>Open For : {item.open}</li>
                    <li> Previous closing Price : $ {item.previousClose}</li>
                    <li>Shares Outstanding : {item.sharesOutstanding}</li>
                    <li>High : {item.dayHigh}</li>
                    <li>Low : {item.dayLow}</li>
                    <li>Volume : {item.volume}</li>
                    <li>
                      {" "}
                      {item.change < 0 ? (
                        <ArrowDownward style={{ color: "red" }} />
                      ) : (
                        <ArrowUpward />
                      )}
                    </li>
                    <></>
                  </li>
                );
              })}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Quote;
