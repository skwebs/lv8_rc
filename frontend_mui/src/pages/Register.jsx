import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="login" sx={{ alignSelf: "center" }}>
        <Card
          elevation={8}
          sx={{
            minWidth: 275,
            maxWidth: 600,
            mx: "auto",
          }}>
          <CardContent>
            <Box
              component="form"
              sx={{
                pt: 1,
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off">
              <Grid spacing={1} container>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={4}>
                  <TextField
                    required
                    label="First Name"
                    helperText=" "
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={4}>
                  <TextField label="Middle Name" helperText=" " size="small" />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={4}>
                  <TextField
                    required
                    label="Last Name"
                    helperText=" "
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={6}>
                  <TextField
                    required
                    type="tel"
                    label="Contact No."
                    helperText=" "
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={6}>
                  <TextField
                    required
                    type="email"
                    label="Email"
                    helperText=" "
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={6}>
                  <TextField
                    required
                    label="Password"
                    helperText=" "
                    size="small"
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={6}>
                  <TextField
                    required
                    label="Confirm Password"
                    helperText=" "
                    size="small"
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button variant="contained">Register</Button>
                    <Button variant="text" onClick={() => navigate("/login")}>
                      Login Existing User.
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

export default Register;
