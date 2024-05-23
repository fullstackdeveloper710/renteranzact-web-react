import {
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ButtonComponent from "../../../components/Button";
import rented from "../../../assets/images/rented.png";
import { LocationIcon } from "../../../assets/icons";
import { useNavigate } from "react-router-dom";
import SelectBox from "../../../components/SelectBox";

const MaintenanceRequestModal = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <Dialog
      maxWidth="xl"
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
        Maintenance Request
      </DialogTitle>
      <DialogContent>
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
        <div className="my-4">
          <InputLabel
            sx={{ fontSize: 18, fontWeight: "bold", color: "#07262E" }}
          >
            Select Concern
          </InputLabel>
          <SelectBox placeholder={"Select concern"} />
        </div>
        <div className="my-3">
          <InputLabel
            sx={{ fontSize: 18, fontWeight: "bold", color: "#07262E" }}
          >
            Enter your remark
          </InputLabel>
          <TextField
            fullWidth
            className="mt-2"
            multiline={true}
            rows={5}
            placeholder="Write a remark"
          />
        </div>
        <div className="py-2">
          
          <ButtonComponent
            sx={{ width: '100%', height: 64, borderRadius: 2 }}
            title={"Submit Maintenance Request"}
            color="primary"
            onClick={() => navigate("/rented-properties")}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MaintenanceRequestModal;
