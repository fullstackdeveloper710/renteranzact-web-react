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

const Sidebar = ({ open, setOpen }) => {
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
            <ListItem className="m-1" key={index} sx={{ cursor: "pointer" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{ fontSize: 18, color: "#07262E" }}
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
