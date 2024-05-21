import React from "react";
import AuthenticationLayout from ".";
import { Typography } from "@mui/material";
import CustomTextField from "../../components/TextField";
import ButtonComponent from "../../components/Button";

const CreateNewPassword = () => {
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
          Create new password
        </Typography>

        <Typography fontSize={16} color="#8D9B9F" className="text-center">
          This password should be different from the previous <br /> password.
        </Typography>

        <div className="mt-3">
          <CustomTextField
            placeholder={"New Password"}
            label={"New Password"}
            type={"password"}
          />
          &nbsp;
          <CustomTextField
            placeholder={"Confirm Password"}
            label={"Confirm Password"}
            type={"password"}
          />
        </div>
        <ButtonComponent
          title={"Set Password"}
          color={"secondary"}
          sx={{ width: "100%", mt: 4, height: 53 }}
        />
      </div>
    </AuthenticationLayout>
  );
};

export default CreateNewPassword;
