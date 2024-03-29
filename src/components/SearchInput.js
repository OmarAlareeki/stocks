import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const SearchInput = ({ value, placeholder, type, onChange, label }) => (
  <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Box>
    </>
);
export default SearchInput;
