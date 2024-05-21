import React from "react";
import { Box, Card, Grid } from "@mui/material";
import loginBack from "../../assets/images/loginBackground.jpg";
import loginCardBack from "../../assets/images/loginCardBack.png";

const AuthenticationLayout = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${loginBack})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
          webkitFilter: "blur(8px)",
          zIndex: -1, // Ensure the background is behind the card
        }}
      />

      <Card sx={{ width: 1200, height: 840, position: "relative" }}>
        <Grid container spacing={0}>
          <Grid item md={6} sx={{ display: { xs: "none", md: "flex" } }}>
            <img
              src={loginCardBack}
              alt="Login"
              style={{ width: "100%", height: 840 }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              className="d-flex justify-content-center align-items-center"
              sx={{ height: 840 }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AuthenticationLayout;
