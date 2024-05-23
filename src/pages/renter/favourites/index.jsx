import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SearchIcon } from "../../../assets/icons";
import { theme } from "../../../assets/theme";
import Property from "../../../components/Property";
import { properties } from "../..";
import favouriteHouse from "../../../assets/images/favouriteHouse.png";
export default function Favourites() {
  const properties = [
    {
      status: "Available",
      isFavourite: true,
      rate: 4.7,
      title: "Golden Tierra Apartments",
      location: "45 Kofa Annan St, Lagos",
      price: "₦ 7,923/ monthly",
    },
    {
      status: "Rented",
      isFavourite: true,
      rate: 4.7,
      title: "Bakare Estate",
      location: "Bakare Estate, Agungi, Lekki, Lagos",
      price: "₦ 7,923/ monthly",
    },
    {
      status: "Available",
      isFavourite: true,
      rate: 4.7,
      title: "Naf Valley Estate",
      location: "Naf Valley Estate, Asokoro District, Abuja",
      price: "₦ 7,923/ monthly",
    },
    {
      status: "Available",
      isFavourite: true,
      rate: 4.7,
      title: "Naf Valley Estate",
      location: "Naf Valley Estate, Asokoro District, Abuja",
      price: "₦ 7,923/ monthly",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography
          fontSize={40}
          fontWeight={700}
          color={theme.palette.text.primary}
        >
          Favourite Properties
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
        <Grid container>
          {properties.map((x, i) => {
            return (
              <Grid item md={4} key={i} className="pt-2 pb-2 pe-4">
                <Property {...x} img={favouriteHouse} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
