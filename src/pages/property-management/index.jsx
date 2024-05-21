import React from "react";
import madeEasy from "../../assets/images/madeEasy.png";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { theme } from "../../assets/theme";
import doubleImage from "../../assets/images/doubleImage.png";
import man from "../../assets/images/man.png";
import googlePlay from "../../assets/images/googleplay.png";
import apple from "../../assets/images/apple.png";
import {
  CheckIcon,
  InsuranceIcon,
  LandlordIcon,
  PaymentIcon,
  PerformanceIcon,
  UtilityIcon,
} from "../../assets/icons";
import ButtonComponent from "../../components/Button";
const PropertyManagement = () => {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        px={6}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${madeEasy})`,
          width: "100%",
          backgroundSize: "cover",

          height: 497,
        }}
      >
        <div>
          <Typography
            fontSize={56}
            fontWeight={"bold"}
            color={theme.palette.text.primary}
          >
            Rental Management
            <br /> Made Easy
          </Typography>
          <Typography fontSize={24} color={theme.palette.text.secondary}>
            Rent collection & expenses management simplified for
            <br /> your peace of mind.
          </Typography>

          <div className="mt-4">
            <TextField
              variant="outlined"
              size="large"
              sx={{
                width: 450,
                background: "white",
                // borderRadius: 1,

                border: "none",
              }}
              placeholder="Enter your email"
            />
            &nbsp;&nbsp;&nbsp;
            <ButtonComponent
              title="It’s Free! Get Started"
              sx={{ height: 55 }}
            ></ButtonComponent>
          </div>
        </div>
        <div></div>
      </Box>
      <div style={{ background: "white" }}>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 mt-5">
            <hr style={{ border: "1px solid #008F97", width: 40 }} />
            <Typography color="#009DA6" fontSize={24}>
              Why Rentranzact ?
            </Typography>
          </div>
          <Typography
            fontSize={40}
            fontWeight={500}
            color={theme.palette.text.primary}
          >
            Trusted By Millions Of Property Managers
          </Typography>
          <Typography fontSize={18} color={theme.palette.text.secondary}>
            Making Renting Easy: We're here for tenants, landlords, and property
            managers, your trusted partners in hassle-free property and rent
            management.
          </Typography>
        </div>

        <Grid
          container
          spacing={6}
          className="mt-3"
          sx={{ background: "white"  }}
        >
          <Grid
            item
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          
          >
            <Box>
              <PerformanceIcon />
              <Typography
                className="mt-2"
                fontWeight={500}
                fontSize={20}
                color={theme.palette.text.primary}
              >
                Track property financial <br /> performance
              </Typography>
              <Typography className="mt-2" fontSize={18} fontWeight={500}>
                Track rent income, utility payments and
                <br /> maintenance expenditures easily
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <PaymentIcon />
              <Typography
                className="mt-2"
                fontWeight={500}
                fontSize={20}
                color={theme.palette.text.primary}
              >
                Automated Rent Payment
              </Typography>
              <Typography className="mt-2" fontSize={18} fontWeight={500}>
                You don't have to remember who is paying <br /> anymore, we
                remind the tenant on you, and
                <br /> the tenant.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <CheckIcon />
              <Typography
                className="mt-2"
                fontWeight={500}
                fontSize={20}
                color={theme.palette.text.primary}
              >
                Easy Background Check
              </Typography>
              <Typography className="mt-2" fontSize={18} fontWeight={500}>
                We illuminate every renter's history with <br /> insights from
                previous landlords. You also <br /> get to see renter’s
                creditworthiness, and <br /> occupation at a glance.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <LandlordIcon />
              <Typography
                className="mt-2"
                fontWeight={500}
                fontSize={20}
                color={theme.palette.text.primary}
              >
                Easily keep the landlord informed
              </Typography>
              <Typography className="mt-2" fontSize={18} fontWeight={500}>
                By just a few click, you can easily create <br /> regular
                property reports and keep the
                <br /> landlord informed on his property.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <InsuranceIcon />
              <Typography
                className="mt-2"
                fontWeight={500}
                fontSize={20}
                color={theme.palette.text.primary}
              >
                Rent Insurance
              </Typography>
              <Typography className="mt-2" fontSize={18} fontWeight={500}>
                We partnered with an insurance firm to
                <br /> ensure that you never miss out on your rent
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <UtilityIcon />
              <Typography
                className="mt-2"
                fontWeight={500}
                fontSize={20}
                color={theme.palette.text.primary}
              >
                Pay for Utility
              </Typography>
              <Typography className="mt-2" fontSize={18} fontWeight={500}>
                Our platform allows you to pay for
                <br /> utility for each of your properties without any hassle
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>

      <Grid
        container
        spacing={3}
        className="mt-5"
        sx={{ background: "#F4F4F4" }}
      >
        <Grid
          item
          md={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <div className="d-flex flex-column justify-content-center gap-2">
            <div className="d-flex align-items-center gap-2">
              <hr style={{ border: "1px solid #008F97", width: 40 }} />
              <Typography color="#009DA6" fontSize={24}>
                Add Property ?
              </Typography>
            </div>
            <Typography fontSize={40} fontWeight={500} color={"#2A2A2A"}>
              Want to list your property?
            </Typography>
            <Typography fontSize={18}>
              List with us for stress-free property management! At Rentranzact,
              we handle everything –<br /> from rent collection to Lease
              management. Enjoy the rewards of your investment without
              <br /> the hassle. List your property today and experience
              worry-free ownership!
            </Typography>

            <ButtonComponent
              sx={{ width: 164 }}
              className="mt-3"
              title={"Add Property"}
            />
          </div>
        </Grid>
        <Grid item md={4} mb={4}>
          <img src={doubleImage} />
        </Grid>
      </Grid>

      <Grid container className="mt-4">
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          md={6}
          sx={{ background: "white" }}
        >
          <div className="d-flex flex-column justify-content-center gap-2">
            <Typography
              color={theme.palette.text.primary}
              fontSize={40}
              fontWeight={500}
            >
              Try Us On Apps
            </Typography>
            <Typography fontSize={18}>
              Surf through exclusive homes for monthly and yearly stays, and
              catch
              <br /> the wave of hassle-free renting. Try our Rental Management
              tools on <br /> mobile app and elevate your rental journey today!
            </Typography>
            <div className="mt-3">
              <img src={googlePlay} />
              &nbsp;&nbsp;&nbsp;
              <img src={apple} />
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <img src={man} style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyManagement;
