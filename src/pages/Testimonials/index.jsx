import React from "react";
import {
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import { theme } from "../../assets/theme";
import testimonialsBanner from "../../assets/images/testimonialsBanner.png";
import user from "../../assets/images/user.png";

const Testimonials = () => {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        px={6}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${testimonialsBanner})`,
          width: "100%",
          backgroundSize: "cover",
          height: 497,
        }}
      >
        <div>
          <Typography fontSize={56} fontWeight={"bold"} color={"white"}>
            Testimonial
          </Typography>
          <Typography fontSize={24} color={"white"}>
            Voices of satisfaction: Real stories, real results
          </Typography>
        </div>
      </Box>

      <Container maxWidth="xl">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 mt-5">
            <hr style={{ border: "1px solid #008F97", width: 40 }} />
            <Typography color="#009DA6" fontSize={24}>
              Testimonials
            </Typography>
          </div>
          <Typography
            fontSize={40}
            fontWeight={500}
            color={theme.palette.text.primary}
          >
            Hear the Stories, Feel the Success.
          </Typography>
        </div>

        <div className="d-flex justify-content-between align-items-center  mt-4 mb-3">
          <Typography
            fontSize={24}
            color={theme.palette.text.primary}
            fontWeight={500}
          >
            Most Recent
          </Typography>
          <FormControl>
            <InputLabel>Recent</InputLabel>
            <Select
              sx={{ width: 275, borderColor: "#DBDBDB" }}
              label="Recent"
              placeholder="Recent"
            ></Select>
          </FormControl>
        </div>

        <Grid container spacing={3} mt={3} mb={5}>
          {Array(8).fill(
            <Grid item md={4}>
              <Card elevation={0} sx={{ border: "1 solid #F1F1F1", p: 3 }}>
                <div className="d-flex gap-3">
                  <img src={user} />
                  <div>
                    <Typography
                      fontSize={24}
                      fontWeight={500}
                      color={"text.secondary"}
                    >
                      Joseph
                    </Typography>
                    <Typography
                      color={"#009DA6"}
                      fontSize={18}
                      fontWeight={500}
                    >
                      Renter
                    </Typography>
                    <Rating
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#D3DF5E", // Change the color of the filled stars
                        },
                      }}
                      size="small"
                      value={5}
                    />
                  </div>
                </div>

                <Typography
                  className="mt-4"
                  fontSize={14}
                  fontWeight={500}
                  color={"text.primary"}
                >
                  At consequat augue elementum netus suspendisse mi. Odio eget
                  amet praesent nulla amet. Molestie etiam id condimentum neque
                  a diam tortor. Viverra sit dis viverra mauris pellentesque
                  aliquet molestie. Dignissim blandit varius proin vel neque
                  curabitur. Felis lorem at nisl eros nullam auctor. Tristique
                  purus commodo eleifend at quis a viverra. Ante mollis aenean
                  eget blandit habitant vulputate donec velit habitant.
                </Typography>
              </Card>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonials;
