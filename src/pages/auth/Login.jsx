import { Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthenticationLayout from ".";
import ButtonComponent from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  AppleSocialIcon,
  FacebookSocialIcon,
  GoogleSocialIcon,
} from "../../assets/icons";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickLogin = () => {
    if (email.includes("renter") && password === "123456") {
      navigate("/renter");
    } else if (email.includes("landlord") && password === "123456") {
      navigate("/landlord");
    } else if (email.includes("property-manager") && password === "123456") {
      navigate("/property-manager");
    }
  };
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
          Sign In to Your Account
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={12} className="text-center">
            <TextField
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              sx={{ maxWidth: 378 }}
              placeholder="Enter email id"
            />
          </Grid>
          <Grid item md={12} className="text-center">
            <TextField
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
              sx={{ maxWidth: 378 }}
              placeholder="Enter password"
            />
            <Link to={"/forgot-password"}>
              <Typography
                fontWeight={500}
                className="mt-2"
                fontSize={12}
                color={"text.primary"}
              >
                Forgot Password?
              </Typography>
            </Link>

            <ButtonComponent
              className={"mt-4"}
              sx={{ width: 327 }}
              title={"Sign In"}
              onClick={handleClickLogin}
              color="secondary"
            />

            <div className="d-flex align-items-center justify-content-center mt-3">
              <Typography fontSize={14} color="#B2BCBE">
                Don't have an account?
              </Typography>
              &nbsp;
              <Link to={"/signup"}>
                <Typography fontSize={14} color="text.primary">
                  Sign up
                </Typography>
              </Link>
            </div>
            <div className="d-flex justify-content-center gap-3 align-items-center mt-5">
              <Divider
                component={"line"}
                sx={{ width: 148, color: "#DBDBDB" }}
                orientation="horizontal"
              />
              <Typography color="#DBDBDB" fontSize={12}>
                OR
              </Typography>
              <Divider
                component={"line"}
                sx={{ width: 148, color: "#DBDBDB" }}
                orientation="horizontal"
              />
            </div>

            <div className="d-flex align-items-center justify-content-center mt-4 gap-4">
              <GoogleSocialIcon />
              <FacebookSocialIcon />
              <AppleSocialIcon />
            </div>
          </Grid>
        </Grid>
      </div>
    </AuthenticationLayout>
  );
};

export default Login;
