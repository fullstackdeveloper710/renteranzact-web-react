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

export default function CancelInspectionModal({ open, setOpen }) {
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
            Inspection Cancel Reason
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextareaAutosize
            size="lg"
            name="Size"
            placeholder="Type Here.."
            minRows={3}
            className="p-1"
            style={{
              width: "500px",
              border: "1px solid #B2BCBE",
              borderRadius: "7px",
            }}
          />
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <ButtonComponent
            onClick={() => setOpen(false)}
            title={"Submit"}
            color={"secondary"}
            sx={{ marginBottom: "20px" }}
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
