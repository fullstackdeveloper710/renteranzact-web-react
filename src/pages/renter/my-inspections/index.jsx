import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../../../assets/theme";
import React, { useState } from "react";
import { LocationIcon, SearchIcon } from "../../../assets/icons";
import { inspectionHouseImgCard } from "../../../assets/images";
import ButtonComponent from "../../../components/Button";
import "../../../App.css";
import CancelInspectionModal from "./cancelInspectionModal";
import EditInspectionsModal from "./editInspectionModal";
export default function MyInspections() {
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const array = [1, 2, 4];
  return (
    <Container maxWidth="xl">
      <div style={{ marginBottom: "60px" }}>
        <Box>
          <Typography
            fontSize={40}
            fontWeight={700}
            color={theme.palette.text.primary}
          >
            My Inspections
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
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={2}>
                  <Chip label="Upcoming" />
                </Grid>
                <Grid item xs={2} className="ml-3 mr-3">
                  <Chip label="Completed" />
                </Grid>
                <Grid item xs={2}>
                  <Chip label="Pending" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container>
            {/* cards html */}
            {array.map(() => (
              <Grid xs={4} className="p-4">
                <Grid container>
                  <Grid item xs={4}>
                    {inspectionHouseImgCard()}
                  </Grid>
                  <Grid item xs={8} className="ps-3 pt-1">
                    <Typography
                      fontSize={18}
                      fontWeight={700}
                      color={theme.palette.text.primary}
                    >
                      20 Jan 2024 ; 12:00 PM
                    </Typography>
                    <Typography
                      fontSize={16}
                      fontWeight={700}
                      color={theme.palette.text.secondary}
                      className="mt-3 mb-2"
                    >
                      Naf Valley Estate
                    </Typography>
                    <Typography
                      fontSize={14}
                      fontWeight={400}
                      color={"#8D9B9F"}
                    >
                      {LocationIcon()} Naf Valley Estate, Asokoro District,
                      Abuja
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className="mt-4">
                  <Grid item xs={6}>
                    <Typography
                      fontSize={16}
                      fontWeight={700}
                      color={theme.palette.text.secondary}
                    >
                      Jimmy Parson
                    </Typography>
                    <Typography
                      fontSize={14}
                      fontWeight={400}
                      color={"#07262E"}
                      className="mb-4"
                    >
                      Landlord
                    </Typography>
                    <ButtonComponent
                      title={"Cancel"}
                      color={"secondary"}
                      sx={{ width: "155px" }}
                      onClick={() => setOpen(true)}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className="text-end"
                    style={{ marginTop: "24px" }}
                  >
                    <Typography
                      textAlign={"right"}
                      fontSize={14}
                      fontWeight={700}
                      color={"#C8D736"}
                    >
                      Chat Now
                    </Typography>
                    <ButtonComponent
                      title={"Edit"}
                      sx={{ width: "155px" }}
                      className={"mt-4"}
                      onClick={() => setEditModal(true)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <CancelInspectionModal open={open} setOpen={setOpen} />
      <EditInspectionsModal open={editModal} setOpen={setEditModal} />
    </Container>
  );
}
