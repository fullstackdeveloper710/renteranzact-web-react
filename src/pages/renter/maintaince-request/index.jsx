import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../assets/theme";
import "./index.css";
import SendRequestModal from "./sendRequestModal";
import { useNavigate } from "react-router-dom";
export default function MaintainceRequest() {
  const arr = [1, 2, 3, 4, 5];
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
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
      <Box textAlign={"right"}>
        <Button onClick={() => setModal(true)}>
          {" "}
          <Typography
            fontSize={24}
            fontWeight={700}
            color={"#C8D736"}
            marginBottom={"20px"}
          >
            Send New Request
          </Typography>
        </Button>
      </Box>
      <Grid container>
        <Grid item md={8}>
          <Typography
            fontSize={24}
            fontWeight={700}
            color={theme.palette.text.primary}
            marginBottom={"20px"}
          >
            All Requests
          </Typography>
        </Grid>
        <Grid item md={4} textAlign={"right"}>
          <Chip className="chipdesgin" label="Resolved" variant="outlined" />
          <Chip className="chipdesgin" label="Pending" variant="outlined" />
          <Chip className="chipdesgin" label="Remarked" variant="outlined" />
        </Grid>
      </Grid>
      <Box>
        {arr.map(() => (
          <Grid
            container
            marginBottom={"20px"}
            onClick={() => navigate("/maintenance-requests-details")}
            sx={{cursor:"pointer"}}
          >
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
                closed the main pipeline to stop water wastage. But due to that
                I am also unable to use other taps.
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={400}
                color={"#395158"}
                marginBottom={"20px"}
              >
                18 Dec 2023
              </Typography>
            </Grid>
            <Grid item md={2}>
              <Typography
                fontSize={18}
                fontWeight={700}
                color={"#C8D736"}
                marginBottom={"20px"}
                textAlign={"right"}
              >
                OPEN
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
      <SendRequestModal open={modal} setOpen={setModal} />
    </Container>
  );
}
