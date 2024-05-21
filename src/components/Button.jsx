import { Button } from "@mui/material";
import React from "react";

const ButtonComponent = ({ sx, title, className, color, onClick }) => {
  return (
    <Button
      variant="contained"
      className={className}
      disableElevation
      onClick={onClick}
      color={color || "primary"}
      size="large"
      sx={{
        ...sx,
        fontWeight: 500,
        textTransform: "none",
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonComponent;
