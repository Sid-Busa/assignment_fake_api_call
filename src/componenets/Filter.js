import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "use-debounce";

const Filter = ({ handleFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [value] = useDebounce(searchTerm, 500);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    handleFilter(value);
  }, [value]);

  return (
    <TextField
      label="Search"
      value={searchTerm}
      onChange={handleChange}
      variant="outlined"
      fullWidth
    />
  );
};

export default Filter;
