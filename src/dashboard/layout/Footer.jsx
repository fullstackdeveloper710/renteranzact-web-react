import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import appLogo from "../../assets/images/appLogo.png";
import { theme } from "../../assets/theme";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/Button";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#54BDC3",
        paddingTop: 50,
        paddingBottom: 20,
      }}
    >
      <Grid container>
        <Grid
          item
          md={6}
          display={"flex"}
          paddingLeft={10}
          flexDirection={"column"}
        >
          <div className="d-flex mt-4 gap-2">
            <img src={appLogo} style={{ width: 95, height: 58 }} />
            <Typography
              fontSize={48}
              fontWeight={500}
              color={theme.palette.text.primary}
            >
              Rent Made Easy
            </Typography>
          </div>
          <Typography
            className="mt-3"
            // textAlign={"left"}
            fontSize={16}
            color={theme.palette.text.secondary}
          >
            Bringing together Landlord, Renter and Property
            <br /> managers for smooth rental Experience
          </Typography>

          <Typography
            className="mt-5"
            color={theme.palette.text.primary}
            fontSize={24}
            fontWeight={500}
          >
            Subscribe to our newsletter
          </Typography>
          <div className="mt-1">
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
            {/* <Button
              sx={{ color: "#13556D", textTransform: "none", height: 55 }}
              variant="contained"
              color="primary"
              size="large"
            >
              Submit
            </Button> */}
            <ButtonComponent sx={{ height: 51, width: 152 }} title={"Submit"} />
          </div>
        </Grid>
        <Grid item md={2} display={"flex"} gap={2} flexDirection={"column"}>
          <b>Company</b>
          <Link to={"/aboutUs"}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              About Us
            </Typography>
          </Link>
          <Link to={"/careers"}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Careers
            </Typography>
          </Link>
          <Link to={"/testimonials"}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Testimonials
            </Typography>
          </Link>
          <Link to={'/faq'}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Faq
            </Typography>
          </Link>
          <Link to={"/privacy-policy"}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Privacy Policy
            </Typography>
          </Link>
          <Link to={"/data-protection"}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Data Protection
            </Typography>
          </Link>
        </Grid>
        <Grid item md={2} display={"flex"} gap={2} flexDirection={"column"}>
          <b>Our Offerings</b>

          <Link>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Rent
            </Typography>
          </Link>

          <Link to={"/refer-and-earn"}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Refer And Earn
            </Typography>
          </Link>

          <Link to={"/refer-and-earn"}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Rent Now:Pay Later
            </Typography>
          </Link>
        </Grid>
        <Grid item md={2} display={"flex"} gap={2} flexDirection={"column"}>
          <b>Get In touch</b>

          <Link to={"/contactUs"}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Support
            </Typography>
          </Link>

          <Link to={"/blogs"}>
            <Typography color={theme.palette.text.primary} fontWeight={600}>
              Blog
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
