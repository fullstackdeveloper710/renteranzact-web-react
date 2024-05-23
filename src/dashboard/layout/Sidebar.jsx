import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { routesConfig } from "../../routes/routesConfig";

import { useNavigate ,useLocation} from "react-router-dom";
const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();

  const navigate = useNavigate();
  return (
    <Drawer
      PaperProps={{
        sx: {
          width: 400,
        },
      }}
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
    >
      <List
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
        }}
        // className="mt-5"
      >
        {routesConfig.map((item, index) => {
          return (
            <ListItem
              LinkComponent={"a"}
              onClick={() => navigate(item.link)}
              className="m-1"
              key={index}
              sx={{ cursor: "pointer" }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: 18,
                  color:
                    location.pathname === item.link ? "#009DA6" : "#07262E",
                  fontWeight: location.pathname === item.link ? "bold" : "",
                }}
                primary={item.title}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
