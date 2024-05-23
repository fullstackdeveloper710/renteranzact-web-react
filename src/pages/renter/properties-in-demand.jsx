import {
  Chip,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FilterIcon, LocationIcon } from "../../assets/icons";
import { properties } from "..";
import Property from "../../components/Property";

const PropertiesInDemand = () => {
  const filters = ["Filters", "Residential", "Commercial", "Short Stay"];
  return (
    <Container maxWidth="xl">
      <div className="d-flex align-items-center gap-2 mt-5">
        <hr style={{ border: "1px solid #008F97", width: 40 }} />
        <Typography color="#009DA6" fontSize={24}>
          Nearby
        </Typography>
      </div>
      <Typography fontSize={41} fontWeight={700} color={"#2A2A2A"}>
        Properties In Demand
      </Typography>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex gap-4    ">
          {filters.map((x, i) => {
            return (
              <Chip
                icon={i < 1 && <FilterIcon />}
                sx={{
                  width: 123,
                  height: 46,
                  borderRadius: 30,
                  fontSize: 16,
                  fontWeight: 400,
                }}
                label={x}
                variant="outlined"
                key={i}
                size="large"
              />
            );
          })}
        </div>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <LocationIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Lagos, Nigeria"
          variant="outlined"
          fullWidth
          sx={{ width: 375 }}
        />
      </div>

      <Grid container spacing={4} className="mt-3">
        {properties.map((x, i) => {
          return (
            <Grid item md={4} key={i} sm={6} xs={12}>
              <Property
                {...x}
                img={require(`../../assets/images/p${i + 1}.png`)}
              />
              <Property
                {...x}
                img={require(`../../assets/images/p${i + 1}.png`)}
              />
              <Property
                {...x}
                img={require(`../../assets/images/p${i + 1}.png`)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PropertiesInDemand;
