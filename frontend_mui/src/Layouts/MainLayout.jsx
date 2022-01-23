import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navigation from "./../components/Navigation";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
      <Box sx={{ flex: "0 0 auto !important" }}>
        <Navigation />
      </Box>
      <Box sx={{ flex: "1 0 auto !important", py: 2 }}>
        <Outlet />
      </Box>
      <Box sx={{ flex: "0 0 auto !important" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
