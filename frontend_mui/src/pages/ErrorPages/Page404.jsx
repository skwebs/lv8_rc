import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import bg from "./../../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.5) 100%), url(${bg}) no-repeat center center fixed`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent sx={{ textAlign: "center", color: "error.main" }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h1">404</Typography>
              <Typography variant="p">Requested page not found.</Typography>
              <br />
              <Button
                onClick={() => navigate("/")}
                color="primary"
                variant="contained"
                sx={{ mt: 2 }}>
                Go Home
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Page404;
