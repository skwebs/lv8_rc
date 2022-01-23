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
      <Box id="header-layout" sx={{ alignSelf: "flex-start" }}>
        <Navigation />
      </Box>
      <Box
        id="main-layout"
        sx={{ display: "flex", flex: "1 0 auto !important" }}>
        <Outlet />
      </Box>
      <Box id="footer-layout" sx={{ width: "100%", alignSelf: "flex-end" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
