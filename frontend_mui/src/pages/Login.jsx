import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  TextField,
} from "@mui/material";

const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const RegisterDialog = () => {
    return (
      <>
        <Dialog
          open={open}
          scroll="paper"
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description">
          <DialogTitle>{"Register new user!"}</DialogTitle>
          <DialogContent
            divider
            sx={{ minWidth: 250, maxWidth: 600, mx: "auto", p: 2 }}>
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
                  <TextField label="First Name" helperText=" " size="small" />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={4}>
                  <TextField label="Middle Name" helperText=" " size="small" />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={4}>
                  <TextField label="Last Name" helperText=" " size="small" />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={6}>
                  <TextField
                    type="tel"
                    label="Contact No."
                    helperText=" "
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={6}>
                  <TextField
                    type="email"
                    label="Email"
                    helperText=" "
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={6}>
                  <TextField
                    label="Password"
                    helperText=" "
                    size="small"
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12} sm={6}>
                  <TextField
                    label="Confirm Password"
                    helperText=" "
                    size="small"
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={12}>
                  <Button variant="contained">Register</Button>
                  <Button sx={{ ml: 2 }} variant="text" onClick={handleClose}>
                    Close
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  return (
    <>
      <RegisterDialog />
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
                    <Button variant="text" onClick={handleClickOpen}>
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
