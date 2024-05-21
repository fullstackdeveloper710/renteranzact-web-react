import React, { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Box } from "@mui/material";
import Sidebar from "./layout/Sidebar";
import { useLocation } from "react-router-dom";

const Dashboard = ({ children }) => {
  const [sidebarToggleState, setSidebarToggleState] = useState(false);
  const location = useLocation();

  const RestrictHeaderFooter = () => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/signup" ||
      location.pathname === "/email-verification" ||
      location.pathname === "/forgot-password" || 
      location.pathname === '/create-password'
    ) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      {!RestrictHeaderFooter() ? null : (
        <Header setOpen={setSidebarToggleState} open={sidebarToggleState} />
      )}
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <div style={{ display: "flex", flexGrow: 1 }}>
          <Sidebar open={sidebarToggleState} setOpen={setSidebarToggleState} />
          <div
            style={{
              flexGrow: 1,
              marginTop: !RestrictHeaderFooter() ? 0 : 65,
            }}
          >
            {children}
          </div>
        </div>
      </Box>
      {!RestrictHeaderFooter() ? null : <Footer />}
    </>
  );
};

export default Dashboard;
