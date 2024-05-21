import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Pagination,
  PaginationItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { theme } from "../../assets/theme";
import ButtonComponent from "../../components/Button";
import careersBanner from "../../assets/images/careersBanner.png";
import { NextIcon, PrevIcon } from "../../assets/icons";
import vision from "../../assets/images/vision.png";

const Careers = () => {
  return (
    <>
      <Box
        display={"flex"}
        // justifyContent={"flex-start"}
        px={6}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${careersBanner})`,
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
            Career
          </Typography>
          <Typography fontSize={24} color={theme.palette.text.secondary}>
            Unlock your potential: Careers that shape futures.
          </Typography>
        </div>
      </Box>
      <div
        style={{ width: "100%" }}
        className="d-flex justify-content-center  text-center mt-3"
      >
        <Card elevation={2} sx={{ width: 990, mt: -7 }}>
          <div className="row d-flex justify-content-center align-items-center p-3">
            <div className="col-md-5">
              <FormControl fullWidth>
                <InputLabel>Select you skill</InputLabel>
                <Select
                  sx={{ borderColor: "#DBDBDB" }}
                  fullWidth
                  placeholder="Select you skill"
                  label="Select you skill"
                ></Select>
              </FormControl>
            </div>
            <div className="col-md-5 ">
              <FormControl fullWidth>
                <InputLabel>Select experience</InputLabel>
                <Select
                  sx={{ borderColor: "#DBDBDB" }}
                  fullWidth
                  placeholder="Select experience"
                  label="Select experience"
                ></Select>
              </FormControl>
            </div>
            <div className="col-md-2">
              <ButtonComponent title={"Search"} />
            </div>
          </div>
        </Card>
      </div>
      <Container maxWidth="xl">
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Typography fontSize={32} fontWeight={500} color="text.secondary">
            Currently we have 36 openings
          </Typography>
        </div>
        <Grid container spacing={4} my={2}>
          {Array(9).fill(
            <Grid item md={4}>
              <Card
                elevation={0}
                sx={{
                  border: "1px solid #DBDBDB",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: theme.palette.secondary.main,
                    color: "white",
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                    "& .apply-now": {
                      color: "#C8D736",
                    },
                  },
                }}
              >
                <CardContent>
                  <Typography
                    className="hyyyy"
                    fontSize={24}
                    component="div"
                    color={"text.primary"}
                    fontWeight={500}
                  >
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    className="mt-2"
                    variant="body2"
                    color="#596E73"
                    fontSize={18}
                    fontWeight={300}
                  >
                    2 open positions
                  </Typography>
                  <Typography
                    fontSize={16}
                    fontWeight={400}
                    color={"text.secondary"}
                  >
                    Lorem ipsum dolor sit amet consectetur. Mattis bibendum
                    vulputate quis pharetra neque nullam id. Mauris et orci
                    purus in lacinia vulputate ut non integer. Volutpat eget
                    nulla cras id sit nisi nullam... <b>Know More</b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="w-100 d-flex justify-content-between align-items-center px-2">
                    <Typography
                      color={"#8D9B9F"}
                      fontSize={16}
                      fontWeight={200}
                    >
                      01 Jan 2024
                    </Typography>
                    <Typography
                      className="apply-now"
                      color={"#009DA6"}
                      fontSize={18}
                      fontWeight={500}
                    >
                      Apply Now
                    </Typography>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <Pagination
            size="large"
            renderItem={(item) => {
              return (
                <PaginationItem
                  slots={{
                    previous: () => <PrevIcon />,
                    next: () => <NextIcon />,
                  }}
                  {...item}
                  sx={{
                    borderColor: "#F1F1F1",
                    "&.Mui-selected": {
                      background: "#009DA6",
                      color: "white", // Remove border when the button is selected
                    },
                    "&:hover": {
                      borderColor: "transparent", // Remove border on hover
                    },
                  }}
                />
              );
            }}
            count={5}
            variant="outlined"
            shape="rounded"
          />
        </div>

        <Grid container spacing={4} mt={3} mb={5}>
          <Grid item md={4}>
            <img src={vision} style={{ height: 660 }} />
          </Grid>
          <Grid item md={8}>
            <div className="d-flex align-items-center gap-2">
              <hr style={{ border: "1px solid #008F97", width: 40 }} />
              <Typography color="#009DA6" fontSize={24}>
                Our Approach
              </Typography>
            </div>

            <Typography
              fontSize={40}
              fontWeight={500}
              color={theme.palette.text.primary}
            >
              Vision & Mission
            </Typography>
            <Typography component={"p"} mt={3} fontSize={16} color={"#4A4A4A"}>
              At Rentranzact, we believe that managing rental properties should
              be simple, streamlined, and stress-free. That's why we've
              developed an approach that prioritizes ease of use, automation,
              and personalized support.
            </Typography>
            <Typography component={"p"} mt={3} fontSize={16} color={"#4A4A4A"}>
              Our approach begins with our user-friendly platform, which is
              designed to be intuitive and easy to navigate. We've eliminated
              the need for complicated spreadsheets or time-consuming manual
              processes, replacing them with a simple and streamlined platform
              that puts all your rental management tools in one place.
            </Typography>
            <Typography component={"p"} mt={3} fontSize={16} color={"#4A4A4A"}>
              We also understand the importance of automation when it comes to
              rental management. That's why we've developed a platform that
              automates many of the most time-consuming tasks such as rent
              collection and renter communication. Our platform frees up your
              time, allowing you to focus on growing your business.
            </Typography>
            <Typography component={"p"} mt={3} fontSize={16} color={"#4A4A4A"}>
              At the same time, we know that sometimes you need a human touch.
              That's why we provide personalized support to all of our users.
              Our team of experts are available to answer any questions you may
              have, troubleshoot any issues that arise, and help you get the
              most out of our platform.
            </Typography>
            <Typography component={"p"} mt={3} fontSize={16} color={"#4A4A4A"}>
              Finally, we understand that every rental property is unique.
              That's why our approach is flexible, allowing you to customize our
              platform to meet your specific needs. Whether you manage a single
              rental property or dozens, our platform can be tailored to fit
              your requirements, ensuring that you get the tools you need to
              manage your properties effectively.
            </Typography>
            <Typography component={"p"} mt={3} fontSize={16} color={"#4A4A4A"}>
              At Rentranzact, we're committed to making rental management easy,
              streamlined, and stress-free. Our approach puts you at the centre
              of everything we do, providing you with the tools and support you
              need to succeed.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Careers;
