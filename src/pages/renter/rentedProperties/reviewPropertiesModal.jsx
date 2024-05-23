import { Card, Dialog, DialogTitle, Grid, InputLabel, Typography } from "@mui/material";
import rented from "../../../assets/images/rented.png";
import React from "react";
import { LocationIcon } from "../../../assets/icons";

const ReviewPropertiesModal = ({ open, setOpen }) => {
  return (
    <Dialog
      maxWidth="xl"
      
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle fontSize={40} fontWeight={"bold"} color={"text.primary"}>
        Review Properties
      </DialogTitle>
      <Card
        elevation={0}
        sx={{ width: "100%", border: "1px solid #dbdbdb", borderRadius: 3 }}
        className="p-3"
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <img
              style={{ width: 127, height: 63, borderRadius: 10 }}
              src={rented}
            />
            <div>
              <Typography fontSize={24} color="#031013" fontWeight={"bold"}>
                Firenze Apartments Ikeja
              </Typography>
              <div className="d-flex gap-1">
                <LocationIcon />
                <Typography color="#8D9B9F" fontWeight={200}>
                  Gra Ikeja, Ikeja GRA, Ikeja, Lagos
                </Typography>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Card>
      <div>
          <InputLabel sx={{ fontSize: 18, fontWeight: "bold", color: "#07262E" }} >
            Please answer the below questions first:
          </InputLabel>

          <div>

          <b>1.How was the property infrastructure and environment?</b> 
          <Grid container spacing={4}>
            <Grid item ></Grid>
          </Grid>
          </div>
        </div>
    </Dialog>
  );
};

export default ReviewPropertiesModal;
