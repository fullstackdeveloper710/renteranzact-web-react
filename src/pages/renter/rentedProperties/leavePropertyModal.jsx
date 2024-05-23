import {
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import rented from "../../../assets/images/rented.png";
import React from "react";
import { LocationIcon, RatingIcon } from "../../../assets/icons";
import ButtonComponent from "../../../components/Button";
import { useNavigate } from "react-router-dom";
const LeavePropertyModal = ({ open, setOpen }) => {

    const navigate = useNavigate()
  return (
    <Dialog
      maxWidth="lg"
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        className="text-center"
        fontSize={40}
        fontWeight={"bold"}
        color={"text.primary"}
      >
        Leave this Property
      </DialogTitle>
      <DialogContent>
        <Card sx={{ width: "100%" }} className="p-3">
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
            <div className="d-flex align-items-center justify-content-center gap-1">
              <RatingIcon />
              <Typography fontSize={18} color="#031013" fontWeight={"bold"}>
                4.6
              </Typography>
            </div>
          </div>
        </Card>
        <TextField
          fullWidth
          className="mt-2"
          multiline={true}
          rows={5}
          placeholder="Write your reason"
        />

        <div className="d-flex justify-content-between align-items-center py-2">
          <ButtonComponent
            title={"Cancel"}
            color="primary"
            sx={{
              borderRadius: 2,
              width: 323,
              height: 64,
              background: "white",
              border: "1px solid #C8D736",
            }}
            onClick={() => setOpen(false)}
          />
          &nbsp;&nbsp;
          <ButtonComponent
            sx={{ width: 323, height: 64, borderRadius: 2 }}
            title={"Submit"}
            color="primary"
            onClick={() => navigate('/rented-properties')}
          />
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default LeavePropertyModal;
