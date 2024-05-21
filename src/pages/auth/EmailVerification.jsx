import React, { useState } from "react";
import AuthenticationLayout from ".";
import { Typography } from "@mui/material";
import OTPInput from "react-otp-input";
import ButtonComponent from "../../components/Button";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [otp, setOtp] = useState("");
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
          Email Verification
        </Typography>
        <Typography fontSize={16} color="#8D9B9F" className="text-center">
          Please enter the 4 digit code to verify your email
        </Typography>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          inputStyle={{
            height: 80,
            width: 80,
            margin: 10,
            marginTop: 30,
            borderRadius: 5,
            fontSize: 28,
            fontWeight: "bold",
            border: "1px solid #B2BCBE",
            outlineColor: "#13556D",
          }}
          renderSeparator={null}
          renderInput={(props) => <input {...props} />}
        />
        <ButtonComponent
          onClick={() => navigate("/create-password")}
          title="Confirm"
          sx={{ width: "100%", mt: 3, height: 53 }}
          color="secondary"
        />
        <Typography
          sx={{ cursor: "pointer" }}
          className="text-center mt-4"
          color="#395158"
          fontSize={14}
          fontWeight={400}
        >
          Resend Code
        </Typography>
      </div>
    </AuthenticationLayout>
  );
};

export default EmailVerification;
