import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { Backdrop } from "@mui/material";

const Loader = () => {
  const loading = useSelector((state) => state.loader.loading);
  return (
    <Backdrop
      open={loading}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
