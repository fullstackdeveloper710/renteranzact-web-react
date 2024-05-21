import React from "react";
import {
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../assets/theme";
import madeEasy from "../assets/images/madeEasy.png";
import homeBanner from "../assets/images/home_banner.png";
import "swiper/css";
import "swiper/css/pagination";
import ButtonComponent from "../components/Button";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import residential from "../assets/images/residential.png";
import commercial from "../assets/images/commercial.png";
import shortTerm from "../assets/images/shortTerm.png";
import man from "../assets/images/man.png";
import googlePlay from "../assets/images/googleplay.png";
import apple from "../assets/images/apple.png";
import {
  AddPropertyIcon,
  HomeTwo,
  LocationIcon,
  RentHistoryIcon,
  TenanatsIcon,
  VerifiedIcon,
  WalletIcon,
} from "../assets/icons";
import Property from "../components/Property";
import renting from "../assets/images/renting.png";
import require from "../assets/images/require.png";
let slides = [madeEasy, homeBanner];
const properties = [
  {
    status: "Available",
    isFavourite: true,
    rate: 4.7,
    title: "Golden Tierra Apartments",
    location: "45 Kofa Annan St, Lagos",
  },
  {
    status: "Rented",
    isFavourite: true,
    rate: 4.7,
    title: "Bakare Estate",
    location: "Bakare Estate, Agungi, Lekki, Lagos",
  },
  {
    status: "Available",
    isFavourite: true,
    rate: 4.7,
    title: "Naf Valley Estate",
    location: "Naf Valley Estate, Asokoro District, Abuja",
  },
];

const requirements = [
  { title: "Safe & hassle-free rental process", icon: <AddPropertyIcon /> },
  { title: "Painless rent collection", icon: <RentHistoryIcon /> },
  { title: "Find best tenants", icon: <TenanatsIcon /> },
  { title: "Verified Properties", icon: <VerifiedIcon /> },
  { title: "Secure payments", icon: <WalletIcon /> },
];
const HomePage = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        style={{ height: 497 }}
        modules={[Pagination, Autoplay, Navigation, A11y]}
        className="swiper"
        autoplay={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              px={6}
              alignItems={"center"}
              sx={{
                backgroundImage: `url(${slide})`,
                width: "100%",
                backgroundSize: "cover",

                height: 497,
              }}
            >
              <div>
                <Typography fontSize={56} fontWeight={"bold"} color={"#395158"}>
                  Find the best place <br /> to live
                </Typography>
                <Typography fontSize={24} color={theme.palette.text.secondary}>
                  Enjoy a worry free house hunting experience.
                  <br /> Connect directly with verified landlords and property
                  <br /> managers on our secure platform.
                </Typography>

                <ButtonComponent
                  title="Browse Properties"
                  sx={{ height: 55, mt: 3 }}
                />
              </div>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        style={{ width: "100%" }}
        className="d-flex justify-content-center  text-center mt-3"
      >
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
                  img={require(`../assets/images/p${i + 1}.png`)}
                />
              </Grid>
            );
          })}
        </Grid>

        <div className="text-center">
          <ButtonComponent sx={{ width: 144 }} title="Explore" />
        </div>

        <Grid container spacing={5} my={5}>
          <Grid md={8} item>
            <div className="d-flex align-items-center gap-2 mt-5">
              <hr style={{ border: "1px solid #008F97", width: 40 }} />
              <Typography color="#009DA6" fontSize={24}>
                Who We Are
              </Typography>
            </div>
            <Typography
              fontSize={40}
              fontWeight={500}
              color={theme.palette.text.primary}
            >
              Renting Is Easier With Us
            </Typography>
            <Typography fontSize={18} color={theme.palette.text.secondary}>
              We are a united family with a shared vision: simplifying property
              renting and management for all. Our all-in-one platform ensures
              victories for everyone. Landlords thrive with ideal tenants,
              seamless property management, and insightful financial reports on
              our platform. While renters effortlessly discover their perfect
              homes, build credit scores, save for future rents, communicate
              effortlessly, report maintenance, and secure prompt caution
              deposit returns. Join us in transforming property experiences for
              all.
            </Typography>
            <ButtonComponent
              sx={{ mt: 4, width: 200, height: 64 }}
              title="Get Started"
            />
          </Grid>
          <Grid md={4} item>
            <img src={renting} />
          </Grid>
        </Grid>
        <div className="mt-4">
          <Box
            sx={{
              mb: 3,
              backgroundImage: `url(${require})`,
              height: 290,
              width: "100%",
              backgroundSize: "cover",
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
            }}
          >
            <Grid container spacing={2}>
              <Grid md={4} item m={3}>
                <div>
                  <Typography fontSize={40} fontWeight={"bold"} color={"white"}>
                    Rentranzact Has
                    <br /> Everything You Require.
                  </Typography>
                  <ButtonComponent
                    sx={{ height: 64, mt: 2 }}
                    title={"Add Property For Free"}
                  />
                </div>
              </Grid>
              <Grid md={4} item>
                {requirements.map((x) => {
                  return (
                    <Box
                      px={2}
                      height={36}
                      sx={{ background: "#F1F1F1", m: 2, borderRadius: 2 }}
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      justifyContent={"flex-start"}
                      // py={1}
                      // p={0.3}
                    >
                      <span>{x.icon}</span>
                      <Typography
                        fontSize={16}
                        color={"text.primary"}
                        fontWeight={500}
                      >
                        {x.title}
                      </Typography>
                    </Box>
                  );
                })}
              </Grid>
              <Grid md={4} item></Grid>
            </Grid>
          </Box>
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

        <Grid container className="mt-5">
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
      </Container>
    </>
  );
};

export default HomePage;
