import {
  Box,
  Card,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import renterHomeBanner from "../../assets/images/renterHomeBanner.png";
import { HomeTwo, LocationIcon, WalletIcon } from "../../assets/icons";
import ButtonComponent from "../../components/Button";
import { properties } from "..";
import Property from "../../components/Property";
import residential from "../../assets/images/residential.png";
import commercial from "../../assets/images/commercial.png";
import shortTerm from "../../assets/images/shortTerm.png";
import { theme } from "../../assets/theme";
import { useNavigate } from "react-router-dom";
const RenterLandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ p: 1 }} bgcolor={"#114D63"} color={"white"}>
        <marquee>
          Your profile is not complete,Kindly complete your profile.
        </marquee>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        px={6}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${renterHomeBanner})`,
          width: "100%",
          backgroundSize: "cover",
          height: 497,
        }}
      >
        <div>
          <Typography fontSize={56} fontWeight={"bold"} color={"#395158"}>
            Unlocking the Door to
            <br /> Your Perfect Home
          </Typography>
          <Typography fontSize={24} color={"text.secondary"}>
            Discover, Explore, and Find Your Dream House Today!
          </Typography>
        </div>
      </Box>
      <div
        style={{ width: "100%" }}
        className="d-flex justify-content-center  text-center mt-3"
      >
        {" "}
        <Card
          elevation={0}
          sx={{
            mt: -7,
            position: "relative",
            zIndex: 99999,
            boxShadow: "0px 2px 0px 4px white",
          }}
        >
          <div className="row d-flex justify-content-center align-items-center p-3">
            <div className="col-md-3">
              <TextField
                fullWidth
                label="Location"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <LocationIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="col-md-3">
              <TextField
                fullWidth
                label="Type"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <HomeTwo />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="col-md-3">
              <TextField
                fullWidth
                label="Budget"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <WalletIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="col-md-3">
              <ButtonComponent sx={{ width: 126 }} title={"Search"} />
            </div>
          </div>
        </Card>
      </div>
      <Container maxWidth="xl">
        <div className="d-flex align-items-center gap-2 mt-5">
          <hr style={{ border: "1px solid #008F97", width: 40 }} />
          <Typography color="#009DA6" fontSize={24}>
            Explore
          </Typography>
        </div>
        <Typography fontSize={41} fontWeight={700} color={"#2A2A2A"}>
          Properties In Demand
        </Typography>

        <Grid container spacing={4} className="mt-3">
          {properties.map((x, i) => {
            return (
              <Grid item md={4} key={i}>
                <Property
                  {...x}
                  img={require(`../../assets/images/p${i + 1}.png`)}
                />
              </Grid>
            );
          })}
        </Grid>

        <div className="text-center">
          <ButtonComponent
            onClick={() => navigate("/properties-in-demand")}
            sx={{ width: 144 }}
            title="Explore"
          />
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 mt-5">
            <hr style={{ border: "1px solid #008F97", width: 40 }} />
            <Typography color="#009DA6" fontSize={24}>
              Categories
            </Typography>
          </div>
          <Typography
            fontSize={40}
            fontWeight={500}
            color={theme.palette.text.primary}
          >
            Our Property Categories
          </Typography>
          <Typography color="text.secondary" fontSize={18} fontWeight={500}>
            Find Your Fit: Whether short-term stays, cozy homes, workspaces, or
            retail spots – our categories cover it all for your necessities.
          </Typography>
        </div>
        <Grid container spacing={3} className="mt-4">
          <Grid item md={6}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <img style={{ width: "100%", height: 302 }} src={commercial} />
              </Grid>
              <Grid item md={12}>
                <img style={{ width: "100%", height: 302 }} src={shortTerm} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <img style={{ width: "100%", height: 620 }} src={residential} />
          </Grid>
        </Grid>
        <div className="d-flex align-items-center gap-2 mt-5">
          <hr style={{ border: "1px solid #008F97", width: 40 }} />
          <Typography color="#009DA6" fontSize={24}>
            Nearby
          </Typography>
        </div>
        <Typography fontSize={41} fontWeight={700} color={"#2A2A2A"}>
          Properties Around You
        </Typography>

        <Grid container spacing={4} className="mt-3">
          {properties.map((x, i) => {
            return (
              <Grid item md={4} key={i}>
                <Property
                  {...x}
                  img={require(`../../assets/images/p${i + 1}.png`)}
                />

                <Property
                  {...x}
                  img={require(`../../assets/images/p${i + 1}.png`)}
                />
                <Property
                  {...x}
                  img={require(`../../assets/images/p${i + 1}.png`)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default RenterLandingPage;
