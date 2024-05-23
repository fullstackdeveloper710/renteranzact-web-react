import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, Select, TextareaAutosize, Typography } from "@mui/material";
import { theme } from "../../../assets/theme";
import ButtonComponent from "../../../components/Button";

export default function SendRequestModal({ open, setOpen }) {
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
            fontSize={24}
            fontWeight={700}
            color={theme.palette.text.primary}
            textAlign={"center"}
          >
            Send New Request
          </Typography>
        </DialogTitle>
        <DialogContent>
        <FormControl style={{width:"100%",marginBottom:"10px"}}>
            <InputLabel>Please select concern</InputLabel>
            <Select
              sx={{ borderColor: "#DBDBDB" }}
              label="Please select concern"
              placeholder="Select"
            ></Select>
          </FormControl>
          <label style={{fontSize:"14px",fontWeight:"400"}}>Enter your remark</label>
          <TextareaAutosize
            size="lg"
            name="Size"
            placeholder="Write remark"
            minRows={3}
            className="p-1"
            style={{
              width: "535px",
              borderRadius: "7px",
            }}
          />
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <ButtonComponent
            onClick={() => setOpen(false)}
            title={"Send Request"}
            sx={{ marginBottom: "20px" }}
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
