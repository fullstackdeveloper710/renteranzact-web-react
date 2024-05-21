import React from "react";
import AuthenticationLayout from ".";
import { Typography } from "@mui/material";
import ButtonComponent from "../../components/Button";
import CustomTextField from "../../components/TextField";
const ForgotPassword = () => {
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
          Forgot Password
        </Typography>

        <Typography fontSize={16} color="#8D9B9F" className="text-center">
          Enter the email address with your account and we'll send
          <br /> and email with confirmation to reset your password.
        </Typography>

        <div className="mt-4">
          <CustomTextField
            placeholder={"renter@gmail.com"}
            label={"Email id"}
          />
        </div>
        <ButtonComponent
          title="Reset"
          sx={{ width: "100%", mt: 3, height: 53 }}
          color="secondary"
        />
      </div>
    </AuthenticationLayout>
  );
};

export default ForgotPassword;
