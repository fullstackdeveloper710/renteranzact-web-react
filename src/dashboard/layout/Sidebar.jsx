import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

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
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
