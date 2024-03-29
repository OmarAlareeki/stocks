import SearchInput from "../components/SearchInput";
import { useState } from "react";
import "../../src/App.css";
import useFetch from "../Hooks/useFetch";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";

const Search = () => {
  const [text, setText] = useState("");
  const { data, isPending } = useFetch("https://financialmodelingprep.com/api/v3/quote/" +
  text +
  "?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L");

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <>
      <h1 className="header"> SEARCH PAGE</h1>
      <h3>You can search by company name, compnay stock shortcut</h3>
      <SearchInput
        type="text"
        value={text}
        onChange={handleChange}
      />

      <div className="listContainer">
        <ul className="list">
        {isPending && <div>Loading....</div>}
          {data &&
            data.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.symbol}</span>
                  <span>{item.price}</span>
                  <span>{item.name}</span>
                  <span> % {item.change}</span>
                  <>
                    {item.change < 0 ? (
                      <ArrowDownward style={{ color: "red" }} />
                    ) : (
                      <ArrowUpward />
                    )}
                  </>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Search;
