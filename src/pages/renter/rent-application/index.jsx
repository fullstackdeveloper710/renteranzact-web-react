import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../assets/theme";
import { LocationIcon, SearchIcon } from "../../../assets/icons";
import { inspectionHouseImgCard } from "../../../assets/images";
import ButtonComponent from "../../../components/Button";
import WithDrawModal from "./withDrawModal";

export default function RentApplications() {
  const [withDrawModal, setWithDrawModal] = useState(false);
  const array = [1, 2, 3];
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
        <Box className="mb-4 mt-4">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="search"
                variant="outlined"
                className="w-100"
                placeholder="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          {array.map(() => (
            <Grid className="align-items-center mt-3" container>
              <Grid item xs={1}>
                {inspectionHouseImgCard()}
              </Grid>
              <Grid item xs={6} className="ps-4 d-flex align-items-center">
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
              <Grid item xs={5} className="">
                <div className="d-flex align-items-center justify-content-end">
                  <ButtonComponent
                    title={"Edit"}
                    color={"secondary"}
                    sx={{ width: "115px" }}
                    //   onClick={() => setOpen(true)}
                  />
                  <ButtonComponent
                    title={"Withdraw"}
                    sx={{ width: "162px", marginLeft: "16px" }}
                    onClick={() => setWithDrawModal(true)}
                  />
                </div>
              </Grid>
            </Grid>
          ))}
        </Box>
      </div>
      <WithDrawModal open={withDrawModal} setOpen={setWithDrawModal} />
    </Container>
  );
}
