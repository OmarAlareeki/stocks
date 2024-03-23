import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";

// const options = []

const SearchInput = ({symbol}) => {

  // const [searchValue, setSearchValue] = useState("")
  

  // const options = data.map((option) => {
  //   const firstLetter = option.symbol.toUpperCase();
  //   return {
  //     firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
  //     ...option,
  //   };
  // });
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        // options={symbol.sort(
        //   (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
        // )}
        groupBy={(options) => options.firstLetter}
        getOptionLabel={(options) => options.symbol}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="COMPANY NAME" />}
      />
    </>
  );
};

export default SearchInput;
