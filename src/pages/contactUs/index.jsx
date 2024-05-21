import React from "react";
import {
  Box,
  Card,

  Grid,

  TextField,
  Typography,
} from "@mui/material";
import contactUsBanner from "../../assets/images/contactUsBanner.png";
import { theme } from "../../assets/theme";
import contactForm from "../../assets/images/contactForm.png";
import ButtonComponent from "../../components/Button";
import {
  Call,
  FacebookIcon,
  Home,
  InstaIcon,
  LinkedinIcon,
  Mail,
  TwitterIcon,
} from "../../assets/icons";

const ContactUs = () => {
  return (
    <div>
      <Box
      
        display={"flex"}
        // justifyContent={"flex-start"}
        px={6}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${contactUsBanner})`,
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
            Contact Us
          </Typography>
          <Typography fontSize={24} color={theme.palette.text.secondary}>
            Reach out and let's make It happen.
          </Typography>
        </div>
      </Box>
      <div style={{ width: "100%" }} className="d-flex justify-content-center">
        <Card elevation={2} sx={{ width: 1131, mt: -7, mb: 4 }}>
          <Grid container>
            <Grid item md={8} p={3}>
              <Typography
                fontSize={24}
                fontWeight={500}
                color={"text.secondary"}
              >
                Get in touch!
              </Typography>
              <Grid container spacing={4} mt={2}>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    placeholder="Enter your name"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Email id"
                    placeholder="Enter email id"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    placeholder="Enter contact number"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Company"
                    placeholder="Enter organization name"
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    multiline={true}
                    rows={5}
                    fullWidth
                    label="Message"
                    placeholder="Enter your message here"
                  />
                </Grid>
              </Grid>
              <ButtonComponent sx={{ mt: 3, width: 165 }} title="Submit" />
            </Grid>
            <Grid item md={4}>
              <Box
                sx={{
                  backgroundImage: `url(${contactForm})`,
                  height: "100%",
                  backgroundSize: "cover",
                  py: 6,
                  px: 3,
                }}
              >
                <Typography fontSize={24} fontWeight={500} color={"white"}>
                  Contact Information
                </Typography>

                <div className="mt-3">
                  <div className="d-flex justify-content-start align-items-center mt-3 gap-4">
                    <Home />
                    <Typography color="white" fontSize={16}>
                      21 Hunponu-Wusu Rd,
                      <br />
                      Eti-Osa 106104, Lekki, Lagos
                    </Typography>
                  </div>
                  <div className="d-flex justify-content-start align-items-center gap-4 mt-4">
                    <Call />
                    <Typography color="white" fontSize={16}>
                      01 8880440
                    </Typography>
                  </div>
                  <div className="d-flex justify-content-start align-items-center mt-4 gap-4">
                    <Mail />
                    <Typography color="white" fontSize={16}>
                      info@rentranzact.com
                    </Typography>
                  </div>
                </div>

                <div  style={{ marginTop: 150 }} className="d-flex gap-3">
                  <FacebookIcon />
                  <LinkedinIcon />
                  <TwitterIcon />
                  <InstaIcon />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
