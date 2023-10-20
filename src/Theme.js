import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#008d8a"
    },
    secondary: {
      main: "#FFFFFF"
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 50
        }
      }
    }
  },
  typography: {
    fontSize: 12
  }
});

export default Theme;
