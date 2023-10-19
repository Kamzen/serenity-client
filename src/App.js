import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Theme from "./Theme";
import DesktopNavigation from "./components/Navigation/DesktopNavigation";
import LoginUserWithPassword from "./pages/Auth/LoginUserWithPassword";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<DesktopNavigation />} />
          <Route
            path="/loginWithPassword"
            element={<LoginUserWithPassword />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
