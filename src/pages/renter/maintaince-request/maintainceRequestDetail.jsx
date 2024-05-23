import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../assets/theme";
import "./index.css";
export default function MaintainceRequestDetails() {
  const arr = [1, 2, 3, 4, 5];
  const [modal, setModal] = useState(false);
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography
          fontSize={40}
          fontWeight={700}
          color={theme.palette.text.primary}
          marginBottom={"20px"}
        >
          Maintenance Requests
        </Typography>
      </Box>
      <Box>
        <Grid container marginBottom={"20px"}>
          <Grid item md={10}>
            <Typography
              fontSize={18}
              fontWeight={700}
              color={theme.palette.text.primary}
              marginBottom={"16px"}
            >
              Request for Tap repairing.
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={700}
              color={theme.palette.text.primary}
              marginBottom={"10px"}
            >
              Your remark
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={400}
              color={"#395158"}
              marginBottom={"15px"}
            >
              Tap is leaking in washroom and water wastage is there. I have
              closed the main pipeline to stop water wastage. But due to that I
              am also unable to use other taps.
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={400}
              color={"#395158"}
              marginBottom={"20px"}
            >
              18 Dec 2023
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={700}
              color={theme.palette.text.primary}
              marginBottom={"10px"}
            >
              Landlord remark
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={400}
              color={"#395158"}
              marginBottom={"15px"}
            >
              Tap is leaking in washroom and water wastage is there. I have
              closed the main pipeline to stop water wastage. But due to that I
              am also unable to use other taps.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
