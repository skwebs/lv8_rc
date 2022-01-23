import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const AppBarComponent = ({ openDrawer, setOpenDrawer }) => {
  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
              onKeyDown={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Box component="div" sx={{ flexGrow: 1 }}>
              {/** this blank space to fill and send login button to right side of the nav*/}
            </Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
};

export default AppBarComponent;
