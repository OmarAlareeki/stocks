// import SearchInput from "../components/SearchInput";
import { useState } from "react";
import "../../src/App.css";
import useFetch from "../Hooks/useFetch";
// import Autocomplete from "@mui/material/Autocomplete";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";

const Search = () => {
  const [text, setText] = useState("");
  const [data] = useFetch(
    "https://financialmodelingprep.com/api/v3/quote/"+ text +"?apikey=YzDaadwGc4VHp4GhMG6gcAl5UsloEn1L"
  );


  // const SearchInput = ({symbol}) => {

  //   // const [searchValue, setSearchValue] = useState("")

  //   const options = data[0].map((option) => {
  //     const firstLetter = option.symbol.toUpperCase();
  //     return {
  //       firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
  //       ...option,
  //     };
  //   });
  //   return (
  //     <>
  //       <Autocomplete
  //         disablePortal
  //         id="combo-box-demo"
  //         options={options.symbol.sort(
  //           (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
  //         )}
  //         groupBy={(options) => options.firstLetter}
  //         getOptionLabel={(options) => options.symbol}
  //         sx={{ width: 300 }}
  //         renderInput={(params) => <TextField {...params} label="COMPANY NAME" />}
  //       />
  //     </>
  //   );
  // };
console.log(data)
  return (
    <>
      <h1 className="header"> SEARCH PAGE</h1>
      <h3>You can search by company name, compnay stock shortcut</h3>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      label="Company shortcut" 
      variant="outlined"
      value={text}
      onChange={(e) => setText(e.target.value)} 
      />
    </Box>

      <div className="listContainer">
        <ul className="list">
          {data &&
            data.map((item) => {
              console.log(item.change.length)
              return (
                <li key={item.id}>
                  <span>{item.symbol}</span>
                  <span>{item.price}</span>
                  <span>{item.name}</span>
                  <span> % {item.change}</span>
                  <>{item.change < 0 ? <ArrowDownward style ={{color: "red"}}/> : <ArrowUpward />}</> 
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Search;