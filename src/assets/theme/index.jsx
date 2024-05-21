import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#C8D736",
      contrastText: "#13556D",
    },
    secondary: {
      main: "#13556D",
      contrastText: "#FFFFFF", // Set text color to white for secondary buttons
    },
    text: {
      primary: "#13556D",
      secondary: "#07262E",
    },
  },
  typography: {
    fontFamily: [
      "Rubik",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
