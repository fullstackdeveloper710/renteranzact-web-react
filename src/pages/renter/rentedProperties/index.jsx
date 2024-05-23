import { Box, Card, Chip, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import rented from "../../../assets/images/rented.png";
import ButtonComponent from "../../../components/Button";
import { LocationIcon } from "../../../assets/icons";
import { useNavigate } from "react-router-dom";
import ReviewPropertiesModal from "./reviewPropertiesModal";
const rentedProperties = [
  {
    img: rented,
    rentPeriod: "01 Jan 2024 - Present",
    title: "Firenze Apartments Ikeja",
    location: "Gra Ikeja, Ikeja GRA, Ikeja, Lagos",
    price: "₦ 7,923/ monthly",
    status: "Currently living",
  },
  {
    img: rented,
    rentPeriod: "01 Jan 2024 - Present",
    title: "Firenze Apartments Ikeja",
    location: "Gra Ikeja, Ikeja GRA, Ikeja, Lagos",
    price: "₦ 7,923/ monthly",
    status: null,
  },
  {
    img: rented,
    rentPeriod: "01 Jan 2024 - Present",
    title: "Firenze Apartments Ikeja",
    location: "Gra Ikeja, Ikeja GRA, Ikeja, Lagos",
    price: "₦ 7,923/ monthly",
    status: null,
  },
  {
    img: rented,
    rentPeriod: "01 Jan 2024 - Present",
    title: "Firenze Apartments Ikeja",
    location: "Gra Ikeja, Ikeja GRA, Ikeja, Lagos",
    price: "₦ 7,923/ monthly",
    status: null,
  },
  {
    img: rented,
    rentPeriod: "01 Jan 2024 - Present",
    title: "Firenze Apartments Ikeja",
    location: "Gra Ikeja, Ikeja GRA, Ikeja, Lagos",
    price: "₦ 7,923/ monthly",
    status: null,
  },
];
const RentedProperties = () => {
  const navigate = useNavigate();
  const [reviewPropertiesModal, setReviewPropertiesModal] = useState(false);
  return (
    <>
      <Container maxWidth={"xl"}>
        <div className="my-3">
          <Typography
            component={"h2"}
            color={"text.primary"}
            fontWeight={500}
            fontSize={40}
          >
            Rented Properties
          </Typography>
          <Typography fontSize={24} fontWeight={500}>
            All the rental properties you have secured through our services.
          </Typography>

          <div>
            {rentedProperties.map((x, i) => {
              return (
                <Card
                  key={i}
                  className="my-3"
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/rented-property-detail")}
                >
                  <Grid
                    container
                    spacing={3}
                    p={2}
                    display={"flex"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                  >
                    <Grid item md={6}>
                      <Box
                        sx={{
                          backgroundImage: `url(${x.img})`,
                          width: "100%",
                          height: 258,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          objectFit: "cover",
                          p: 1,
                        }}
                      >
                        <Chip
                          label={x.status}
                          className="bg-white"
                          sx={{
                            color: "#009DA6",
                            fontWeight: "bold",
                            fontSize: 16,
                          }}
                        />
                      </Box>
                      {/* <img className="w-100" src={x.img} /> */}
                    </Grid>
                    <Grid item md={6}>
                      <div className="d-flex gap-1 py-2">
                        <b style={{ color: "#031013" }}>Rented Period:</b>
                        <Typography color="#596E73" fontSize={18}>
                          {x.rentPeriod}
                        </Typography>
                      </div>
                      <Typography
                        className="py-1"
                        fontSize={24}
                        color="#031013"
                        fontWeight={"bold"}
                      >
                        {x.title}
                      </Typography>
                      <div className="d-flex gap-1 py-1">
                        <LocationIcon />
                        <Typography color="#8D9B9F" fontWeight={200}>
                          {x.location}
                        </Typography>
                      </div>
                      <Typography
                        className="py-2"
                        fontWeight={"bold"}
                        color="#031013"
                        fontSize={18}
                      >
                        {x.price}
                      </Typography>
                      {x.status === "Currently living" ? (
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <ButtonComponent
                            title={"Chat now"}
                            color="primary"
                            sx={{
                              borderRadius: 2,
                              width: 323,
                              height: 64,
                              background: "white",
                              border: "1px solid #C8D736",
                            }}
                          />
                          <ButtonComponent
                            sx={{ width: 323, height: 64, borderRadius: 2 }}
                            title={"Raise a query"}
                            color="primary"
                          />
                        </div>
                      ) : (
                        <ButtonComponent
                          sx={{ width: "100%", height: 64, borderRadius: 2 }}
                          title={"Rate This Property"}
                          color="primary"
                          onClick={(event) => {
                            event.stopPropagation();
                            setReviewPropertiesModal(true);
                          }}
                        />
                      )}
                    </Grid>
                  </Grid>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
      {reviewPropertiesModal && (
        <ReviewPropertiesModal
          open={reviewPropertiesModal}
          setOpen={setReviewPropertiesModal}
        />
      )}
    </>
  );
};

export default RentedProperties;
