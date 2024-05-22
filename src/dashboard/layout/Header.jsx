import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import {
  ChatIcon,
  CloseIcon,
  MenuIcon,
  NotifiationIcon,
  ProfileIcon,
  WalletIcon,
} from "../../assets/icons";
import { AppLogo } from "../../assets/images";
import { theme } from "../../assets/theme";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Header = ({ setOpen, open }) => {
  const navigate = useNavigate();
  const location = useLocation();
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
        <div className=" d-flex align-items-center justify-content-center gap-3">
          <Link to={"/"}>
            <AppLogo />
          </Link>
          <Typography fontWeight={500} height={20}>
            |
          </Typography>

          <Typography fontSize={18} fontWeight={500}>
            {location.pathname === "/renter"
              ? "Renter"
              : location.pathname === "/landlord"
              ? "Landlord"
              : location.pathname === "/property-manager"
              ? "Property Manager"
              : ""}
          </Typography>
        </div>
        <div className="d-flex justify-content-evenly align-items-center gap-5">
          {location.pathname === "/" ? (
            <>
              {" "}
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
              </Typography>{" "}
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
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center gap-4">
              <Link>
                <ChatIcon />
              </Link>
              <Link>
                <WalletIcon />
              </Link>
              <Link>
                <NotifiationIcon />
              </Link>
              <Link>
                <ProfileIcon />
              </Link>
            </div>
          )}

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
