import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const ModelPopup = ({ open, userData, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"User Data"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>
            {" "}
            <b> First Name : </b> {userData?.firstname}{" "}
          </Typography>
          <Typography>
            {" "}
            <b> Last Name : </b> {userData?.lastname}{" "}
          </Typography>
          <Typography>
            {" "}
            <b> UserName : </b> {userData?.username}{" "}
          </Typography>
          <Typography>
            {" "}
            <b> Email : </b> {userData?.email}{" "}
          </Typography>
          <Typography>
            {" "}
            <b> City : </b> {userData?.city}{" "}
          </Typography>
          <Typography>
            {" "}
            <b> Street : </b> {userData?.street}{" "}
          </Typography>
          <Typography>
            {" "}
            <b> Number : </b> {userData?.number}{" "}
          </Typography>
          <Typography>
            {" "}
            <b> Zipcode : </b> {userData?.zipcode}{" "}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModelPopup;
