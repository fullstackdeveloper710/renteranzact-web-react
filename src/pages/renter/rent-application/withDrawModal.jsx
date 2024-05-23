import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize, Typography } from "@mui/material";
import { theme } from "../../../assets/theme";
import ButtonComponent from "../../../components/Button";

export default function WithDrawModal({ open, setOpen }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography
            fontSize={32}
            fontWeight={700}
            color={theme.palette.text.primary}
            textAlign={"center"}
          >
            Are you sure you want to withdraw your request.
          </Typography>
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <ButtonComponent
            onClick={() => setOpen(false)}
            title={"No"}
            sx={{
              marginBottom: "20px",
              width: "179px",
              backgroundColor: "#fff",
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          />
          <ButtonComponent
            onClick={() => setOpen(false)}
            title={"Yes"}
            sx={{
              marginBottom: "20px",
              width: "179px",
              backgroundColor: "#fff",
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
