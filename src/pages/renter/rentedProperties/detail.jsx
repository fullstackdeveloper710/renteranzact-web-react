import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import rented from "../../../assets/images/rented.png";
import { ChatIcon, LocationIcon, RatingIcon } from "../../../assets/icons";
import ButtonComponent from "../../../components/Button";
import LeavePropertyModal from "./leavePropertyModal";

const RentedPropertyDetail = () => {
  const [openLeaveDialog, setOpenLeaveDialog] = useState(false);
  return (
    <Container maxWidth="xl">
      <div className="my-3">
        <Typography
          component={"h2"}
          color={"text.primary"}
          fontWeight={500}
          fontSize={40}
        >
          Currently Rented Properties
        </Typography>
      </div>
      <Grid container spacing={4} my={3}>
        <Grid item md={12}>
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
        </Grid>
        <Grid item md={7}>
          <Grid container spacing={4}>
            <Grid item md={12}>
              <Card elevation={0} sx={{ border: "1px solid #F1F1F1", p: 3 }}>
                <div>
                  <Typography fontSize={18} color="#07262E" fontWeight={500}>
                    Jimmy Parson
                  </Typography>
                  <Typography fontSize={16} color="#07262E" fontWeight={500}>
                    Landlord
                  </Typography>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Typography fontSize={18} color="#07262E" fontWeight={500}>
                    +234 706 892 9916
                  </Typography>
                  <ChatIcon />
                </div>
              </Card>
            </Grid>
            <Grid item md={12}>
              <Card elevation={0} sx={{ border: "1px solid #F1F1F1", p: 3 }}>
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div>
                    <Typography fontSize={14} color="#009DA6" fontWeight={500}>
                      Rented on
                    </Typography>
                    <Typography color="#07262E" fontWeight={500}>
                      15/12/2023
                    </Typography>
                  </div>
                  <div>
                    <Typography fontSize={14} color="#009DA6" fontWeight={500}>
                      Rent Type
                    </Typography>
                    <Typography color="#07262E" fontWeight={500}>
                      Monthly
                    </Typography>
                  </div>
                  <div></div>
                </div>

                <Divider
                  component={"hr"}
                  orientation="horizontal"
                  sx={{ color: "#F4F4F4" }}
                />
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div>
                    <Typography fontSize={14} color="#009DA6" fontWeight={500}>
                      Rent due on
                    </Typography>
                    <Typography color="#07262E" fontWeight={500}>
                      15/12/2023<b> (Due in 9 days)</b>
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      color={"#C8D736"}
                      fontSize={18}
                      fontWeight={"bold"}
                    >
                      Pay Rent
                    </Typography>
                  </div>
                </div>
                <Divider
                  component={"hr"}
                  orientation="horizontal"
                  sx={{ color: "#F4F4F4" }}
                />
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div>
                    <Typography fontSize={14} color="#009DA6" fontWeight={500}>
                      Rent will end on
                    </Typography>
                    <Typography color="#07262E" fontWeight={500}>
                      14/12/2024<b> (11 months left)</b>
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      color={"#C8D736"}
                      fontSize={18}
                      fontWeight={"bold"}
                    >
                      Extend Period
                    </Typography>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5}>
          <ButtonComponent
            color={"primary"}
            title={"Raise a query"}
            sx={{ width: "100%", height: 64, borderRadius: 2 }}
          />
          <Box
            className="d-flex justify-content-between align-items-center"
            bgcolor={"#009DA6"}
            px={1}
            mt={3}
            borderRadius={3}
          >
            <Typography fontSize={24} fontWeight={"bold"} color="white" p={2}>
              Do you want to leave <br />
              this Property
            </Typography>
            <div>
              <Button
                sx={{
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                  height: 64,
                  width: 91,
                  borderRadius: 2,
                }}
              >
                No
              </Button>
              &nbsp; &nbsp; &nbsp;
              <ButtonComponent
                sx={{ height: 64, width: 91, borderRadius: 2 }}
                color={"primary"}
                onClick={() => setOpenLeaveDialog(true)}
                title="Yes"
              />
            </div>
          </Box>
        </Grid>
      </Grid>
      {
        openLeaveDialog &&
        <LeavePropertyModal  open={openLeaveDialog} setOpen={setOpenLeaveDialog}/>
      }
    </Container>
  );
};

export default RentedPropertyDetail;
