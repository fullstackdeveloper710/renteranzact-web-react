import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CloseIcon, MenuIcon } from "../../assets/icons";
import { AppLogo } from "../../assets/images";
import { theme } from "../../assets/theme";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setOpen, open }) => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "white",
        height: 64,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      elevation={0}
    >
      <Toolbar className="d-flex justify-content-between align-items-center">
        <Link to={"/"}>
          <AppLogo />
        </Link>
        <div className="d-flex justify-content-evenly align-items-center gap-5">
          <Typography
            sx={{ cursor: "pointer" }}
            color="secondary"
            fontSize={16}
            fontWeight={400}
            onClick={() => navigate("/blogs")}
          >
            Blog
          </Typography>
          <Typography
            onClick={() => navigate("/property-management")}
            sx={{ cursor: "pointer" }}
            color="secondary"
            fontSize={16}
            fontWeight={400}
          >
            Property Management
          </Typography>
          <Typography
            onClick={() => navigate("/login")}
            sx={{ cursor: "pointer" }}
            color="secondary"
            fontSize={16}
            fontWeight={400}
          >
            Signup / Login
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              height: 64,
              width: 147,
              background: theme.palette.primary.main,
            }}
          >
            <Typography color="secondary" fontSize={16} fontWeight={400}>
              Add Property
            </Typography>
          </Box>
          {open ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(false)}
            >
              {<CloseIcon />}
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
