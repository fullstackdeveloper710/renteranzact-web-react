import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../../assets/theme";
import ButtonComponent from "../../components/Button";
import aboutUsBanner from "../../assets/images/aboutUsBanner.png";
import whoWeAre from "../../assets/images/whoWeAre.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";

const AboutUs = () => {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        px={6}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${aboutUsBanner})`,
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
            Effortless
            <br /> Rentals, Expert
            <br /> Management
          </Typography>
        </div>
      </Box>
      <Container maxWidth="xl">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 mt-5">
            <hr style={{ border: "1px solid #008F97", width: 40 }} />
            <Typography color="#009DA6" fontSize={24}>
              Introduction
            </Typography>
          </div>
          <Typography
            fontSize={40}
            fontWeight={500}
            color={theme.palette.text.primary}
          >
            Who We Are
          </Typography>
          <Typography
            fontSize={18}
            color={theme.palette.text.secondary}
            textAlign={"center"}
          >
            Rentranzact is a platform that offers comprehensive rent management
            solutions for landlords, property managers, and renters in Nigeria.
            We provide a range of services, including property listings, rent
            collection, rent receipt issuance, all in one place. Rentranzact
            aims to simplify the rent management process and make it more
            efficient for everyone involved. We also offer a user-friendly
            interface and dedicated customer support to ensure a seamless
            experience for our users.
          </Typography>
        </div>
        <div className="d-flex justify-content-center  align-items-center mt-5">
          <img src={whoWeAre} />
        </div>

        <div>
          <div className="d-flex align-items-center gap-2 mt-5">
            <hr style={{ border: "1px solid #008F97", width: 40 }} />
            <Typography color="#009DA6" fontSize={24}>
              Services
            </Typography>
          </div>
          <Typography
            fontSize={40}
            fontWeight={500}
            color={theme.palette.text.primary}
          >
            Our Offerings
          </Typography>
          <p>
            Welcome to our Rent Management platform, a comprehensive solution
            tailored for property managers and landlords. Our all-in-one suite
            simplifies rent management processes, including rent collection,
            renter communication, and financial reporting. With a focus on
            efficiency and effectiveness, our platform helps streamline rental
            operations, reduce errors, and save both time and money, allowing
            you to concentrate on more important aspects of property management.
          </p>
        </div>
        <Grid container spacing={4} mt={2} mb={3}>
          <Grid item md={4}>
            <Card
              elevation={0}
              sx={{ height: 295, border: "1px solid #DBDBDB", p: 4, "&:hover": {
                cursor: "pointer",
                backgroundColor: theme.palette.secondary.main,
                color : "white"
              }, }}
            >
              <div>
                <Typography
                  fontSize={48}
                  fontWeight={"500"}
                //   color={"text.primary"}
                >
                  01
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                //   color={"text.primary"}
                  className="mt-3"
                >
                  Safe & Hassle-free Rental Process
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                //   color={"text.secondary"}
                  className="mt-3"
                >
                  Our platform simplifies rent collection by automating payment
                  reminders, providing secure online payment options, and
                  generating real-time rent collection reports.
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card
              elevation={0}
              sx={{ height: 295, border: "1px solid #DBDBDB", p: 4,"&:hover": {
                cursor: "pointer",
                backgroundColor: theme.palette.secondary.main,
                color : "white"
              } }}
            >
              <div>
                <Typography
                  fontSize={48}
                  fontWeight={"500"}
                //   color={"text.primary"}
                >
                  02
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                //   color={"text.primary"}
                  className="mt-3"
                >
                  Review System
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                //   color={"text.secondary"}
                  className="mt-3"
                >
                  Keep your renters informed and engaged with our platform's
                  messaging features, including automated lease renewals and
                  rent increase notifications.
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card
              elevation={0}
              sx={{ height: 295, border: "1px solid #DBDBDB", p: 4 ,"&:hover": {
                cursor: "pointer",
                backgroundColor: theme.palette.secondary.main,
                color : "white"
              }}}
            >
              <div>
                <Typography
                  fontSize={48}
                  fontWeight={"500"}
                //   color={"text.primary"}
                >
                  03
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                //   color={"text.primary"}
                  className="mt-3"
                >
                  Rent Insurance
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                //   color={"text.secondary"}
                  className="mt-3"
                >
                  Our platform provides real-time financial reporting, including
                  rent payment tracking, expense tracking and tax reporting,
                  giving you full visibility into your rental properties'
                  financial performance.
                </Typography>
              </div>
            </Card>
          </Grid>
        </Grid>

        <div className="d-flex align-items-center gap-2 mt-5">
          <hr style={{ border: "1px solid #008F97", width: 40 }} />
          <Typography color="#009DA6" fontSize={24}>
            Our Team
          </Typography>
        </div>
        <Typography
          fontSize={40}
          fontWeight={500}
          color={theme.palette.text.primary}
        >
          Meet Our Team
        </Typography>
        <p>
          Get to know the people who make Rentranzact great. Our team is made up
          of experienced professionals who are passionate about what they do.We
          work together to provide the best possible service to our clients.
        </p>

        <Grid container spacing={4} mt={2} mb={3}>
          <Grid md={4} item>
            <Card
              elevation={0}
              sx={{ border: "none", background: "transparent" }}
            >
              <CardMedia
                sx={{ height: 485, borderRadius: 3 }}
                image={team1}
              ></CardMedia>
              <CardContent sx={{ p: 0, mt: 2 }}>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                  color={"text.primary"}
                >
                  Jeremy Erondu
                </Typography>
                <Typography
                  color="text.secondary"
                  fontSize={18}
                  fontWeight={500}
                >
                  Founder & Chief Executive Officer (CEO)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={4} item>
            <Card
              elevation={0}
              sx={{ border: "none", background: "transparent" }}
            >
              <CardMedia
                sx={{ height: 485, borderRadius: 3 }}
                image={team2}
              ></CardMedia>
              <CardContent sx={{ p: 0, mt: 2 }}>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                  color={"text.primary"}
                >
                  Goodnews Erondu
                </Typography>
                <Typography
                  color="text.secondary"
                  fontSize={18}
                  fontWeight={500}
                >
                  Co-Founder & Chief Operating Officer (COO)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={4} item>
            <Card
              elevation={0}
              sx={{
                border: "none",
                background: "transparent",
               
              }}
            >
              <CardMedia
                sx={{ height: 485, borderRadius: 3 }}
                image={team3}
              ></CardMedia>
              <CardContent sx={{ p: 0, mt: 2 }}>
                <Typography
                  fontSize={20}
                  fontWeight={500}
                  color={"text.primary"}
                >
                  Olamide Odutayo
                </Typography>
                <Typography
                  color="text.secondary"
                  fontSize={18}
                  fontWeight={500}
                >
                  Chief Technology Officer (CTO)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
