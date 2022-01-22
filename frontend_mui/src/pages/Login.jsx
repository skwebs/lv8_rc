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
                <Grid item sx={{ mx: "auto" }} xs={11} sm={6}>
                  <TextField
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="t"
                    size="small"
                  />
                </Grid>

                <Grid item sx={{ mx: "auto" }} xs={11} sm={6}>
                  <TextField
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="t"
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={11} sm={6}>
                  <TextField
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="t"
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={11} sm={6}>
                  <TextField
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="t"
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={11} sm={6}>
                  <TextField
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="t"
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={11} sm={6}>
                  <TextField
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="t"
                    size="small"
                  />
                </Grid>

                {/* <Grid item sx={{ mx: "auto" }} xs={11}>
                  <TextField

                    id="standard-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="standard"
                    size="small"
                  />
                </Grid> */}
                <Grid item sx={{ mx: "auto" }} xs={11}>
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
      <Container>
        <Card
          elevation={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 275,
            maxWidth: 400,
            pt: 3,
            mt: 0,
            mx: "auto",
          }}>
          <CardContent>
            {/* <Typography sx={{ py: 1, textAlign: 'center', }} variant="h6" gutterBottom>
              Register
            </Typography> */}
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off">
              <Grid spacing={1} container>
                <Grid item sx={{ mx: "auto" }} xs={11}>
                  <TextField
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="t"
                    size="small"
                  />
                </Grid>
                <Grid item sx={{ mx: "auto" }} xs={11}>
                  <TextField
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="t"
                    size="small"
                  />
                </Grid>

                {/* <Grid item sx={{ mx: "auto" }} xs={11}>
                  <TextField

                    id="standard-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="standard"
                    size="small"
                  />
                </Grid> */}
                <Grid item sx={{ mx: "auto" }} xs={11}>
                  <Button variant="contained">Login</Button>
                </Grid>
                <Divider />
                <Grid item sx={{ mx: "auto" }} xs={11}>
                  <Button variant="text" onClick={handleClickOpen}>
                    Register New User
                  </Button>
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
