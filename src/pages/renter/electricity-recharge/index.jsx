import { Box, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { LocationIcon } from "../../../assets/icons";
import { inspectionHouseImgCard } from "../../../assets/images";
import { theme } from "../../../assets/theme";
import ButtonComponent from "../../../components/Button";
import CustomTextField from "../../../components/TextField";

export default function ELectiricityRecharge() {
  return (
    <Container maxWidth="xl">
      <div style={{ marginBottom: "60px" }}>
        <Box>
          <Typography
            fontSize={40}
            fontWeight={700}
            color={theme.palette.text.primary}
          >
            Rent Applications
          </Typography>
        </Box>
        <Box>
          <Grid className="align-items-center mt-3" container>
            <Grid item md={1}>
              {inspectionHouseImgCard()}
            </Grid>
            <Grid item md={3} className="ps-4 d-flex align-items-center">
              <Stack>
                <Typography
                  fontSize={24}
                  fontWeight={700}
                  color={theme.palette.text.primary}
                >
                  Naf Valley Estate
                </Typography>
                <Typography fontSize={14} fontWeight={400} color={"#8D9B9F"}>
                  {LocationIcon()} Naf Valley Estate, Asokoro District, Abuja
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={5} className="ps-4 d-flex align-items-end justify-content-end">
              <Stack>
                <Typography
                  fontSize={18}
                  fontWeight={500}
                  color={theme.palette.text.primary}
                  marginBottom={"10px"}
                >
                  Meter Id : #MD8948292
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  placeholder={"Enter top-up amount"}
              
                  type={"text"}
                  label={""}
                  InputLabelProps={{
                    sx: {
                      color: "#07262E",
                    },
                    "&.Mui-focused": {
                      color: "#07262E", // Color of the label when focused
                    },
                  }}
                  sx={{
                    border:"1px solid #ABABAB",
                    borderRadius:"10px",
                    width:"351px"
                  }}
                  // focused
                />
              </Stack>
            </Grid>
            <Grid item md={3} className="">
              <div className="text-end">
              <Typography
                  fontSize={16}
                  fontWeight={700}
                  color={"#C8D736"}
                  textAlign={"right"}
                >
                 Bill History
                </Typography>
                <ButtonComponent
                  title={"Recharge"}
                  sx={{ width: "262px" ,marginTop:"24px"}}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}
