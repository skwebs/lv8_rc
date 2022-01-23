import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navigation from "./../components/Navigation";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <Box
      id="body-layout"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
      <Box id="header-layout" sx={{ flex: "0 0 auto !important" }}>
        <Navigation />
      </Box>
      <Box id="main-layout" sx={{ flex: "1 0 auto !important" }}>
        <Outlet />
      </Box>
      <Box id="footer-layout" sx={{ flex: "0 0 auto !important" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
