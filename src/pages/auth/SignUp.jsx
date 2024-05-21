import React, { useState } from "react";
import AuthenticationLayout from ".";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CustomTextField from "../../components/TextField";
import { ArrowRightIcon } from "../../assets/icons";
import ButtonComponent from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const roles = ["Renter", "Property Manager", "Landlord"];
  const [selectedRole, setSelectedRole] = useState(0);
  const navigate = useNavigate();
  return (
    <AuthenticationLayout>
      <div>
        <Typography
          fontSize={24}
          fontWeight={"bold"}
          color="#111111"
          className="text-center"
          mb={2}
        >
          Sign Up
        </Typography>

        <div className="d-flex align-items-center justify-content-center fixed">
          <ButtonGroup
            size="large"
            variant="outlined"
            aria-label="Basic button group"
            color="secondary"
          >
            {roles.map((x, i) => {
              return (
                <Button
                  variant={selectedRole === i ? "contained" : "outlined"}
                  onClick={() => setSelectedRole(i)}
                  sx={{ textTransform: "none", borderRadius: 2 }}
                  key={i}
                >
                  {x}
                </Button>
              );
            })}
          </ButtonGroup>
        </div>

        <Container maxWidth="xs">
          <Grid container spacing={2} mt={2}>
            <Grid item md={12}>
              <CustomTextField placeholder="Enter Name" label="Name" />
            </Grid>
            <Grid item md={6}>
              <CustomTextField placeholder="Enter email id" label="Email id" />
            </Grid>
            <Grid item md={6}>
              <CustomTextField
                placeholder="Enter contact no."
                label="Contact Number"
              />
            </Grid>
            <Grid item md={12}>
              <FormControl fullWidth focused>
                <InputLabel
                  sx={{
                    color: "black",
                  }}
                >
                  Gender
                </InputLabel>
                <Select
                  label="Gender"
                  placeholder="Select"
                  fullWidth
                  color="secondary"
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f2f4f4",
                      borderWidth: 1.7,
                      borderRadius: 2,
                    },
                  }}
                >
                  <MenuItem>Male</MenuItem>
                  <MenuItem>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12}>
              <CustomTextField
                type={"password"}
                placeholder="password"
                label="Password"
              />
            </Grid>
            <Grid item md={12}>
              <CustomTextField
                type={"password"}
                placeholder="Confirm password"
                label="Confirm Password"
              />
            </Grid>
            {selectedRole === 1 ? null : (
              <Grid item md={12}>
                <Box
                  sx={{
                    background: "#e8eef1",
                    border: "1px dashed #13556D",
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <div>
                    <label className="text-left">Referral Code</label>
                    <TextField
                      // variant="outlined"
                      sx={{
                        background: "white",
                        borderRadius: 2,
                        "& .MuiOutlinedInput-root": {
                          outline: "none",
                        },
                        "& .MuiOutlinedInput-input": {
                          border: "none",
                        },
                        p: 0.3,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Box
                              sx={{
                                background: "#13556D",
                                borderRadius: 2,
                                cursor: "pointer",
                              }}
                              height={45}
                              width={45}
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}
                            >
                              <ArrowRightIcon />
                            </Box>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </div>
                </Box>
              </Grid>
            )}
          </Grid>
          <div className="d-flex align-items-center mt-2">
            <Checkbox />
            <Typography fontSize={14} color="text.primary" fontWeight={500}>
              I agree to Terms & Conditions
            </Typography>
          </div>
          <ButtonComponent
            onClick={() => navigate("/email-verification")}
            sx={{ width: "100%", mt: 1, height: 53 }}
            title={"Sign Up"}
            color={"secondary"}
          />
          <div className="d-flex align-items-center justify-content-center mt-3">
            <Typography fontSize={14} color="#B2BCBE">
              Already have an account?
            </Typography>
            &nbsp;
            <Link to={"/login"}>
              <Typography fontSize={14} color="text.primary">
                Sign in
              </Typography>
            </Link>
          </div>
        </Container>
      </div>
    </AuthenticationLayout>
  );
};

export default SignUp;
