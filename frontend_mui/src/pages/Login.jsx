import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="login" sx={{ alignSelf: "center" }}>
        <Card
          elevation={8}
          sx={{
            minWidth: 275,
            maxWidth: 350,
            mx: "auto",
          }}>
          <CardContent>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off">
              <Grid spacing={1} container>
                <Grid item sx={{ mx: "auto" }} xs={12}>
                  <TextField
                    label="Username"
                    helperText=" "
                    size="small"
                    // variant="standard"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12}>
                  <TextField
                    label="Password"
                    helperText=" "
                    size="small"
                    // variant="standard"
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>

                <Grid item sx={{ mx: "auto" }} xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button variant="contained">Login</Button>
                    <Button
                      variant="text"
                      onClick={() => navigate("/register")}>
                      Register New User
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Login;
