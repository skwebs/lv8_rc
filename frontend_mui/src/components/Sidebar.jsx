import * as React from "react";
// import Box from "@mui/material/Box";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  LanguageOutlined,
  Login as LoginIcon,
  MailOutline,
  Person as PersonIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Tooltip,
  Typography,
} from "@mui/material";

import { Scrollbars } from "react-custom-scrollbars-2";

const Sidebar = ({ openDrawer, setOpenDrawer }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const toggleDrawer = toggle => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(toggle);
  };
  const menuItems = {
    Home: {
      icon: <HomeIcon />,
      link: "/",
    },
    "About Us": {
      icon: <PersonIcon />,
      link: "/about",
    },
    "Contact Us": {
      icon: <MailOutline />,
      link: "/contact",
    },
    Login: {
      icon: <LoginIcon />,
      link: "/login",
    },
    Sitemap: {
      icon: <LanguageOutlined />,
      link: "/sitemap",
    },
  };

  // const handleListItemClick = (event, path) => {
  //   navigate(path);
  //   closeDrawerHandler();
  // };

  const userSection = (
    <Box sx={{ bgcolor: "primary.main", p: 1.5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: 0,
        }}>
        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar src="https://v1.anshumemorial.in/assets/static/img/ama/ama-128x128.png" />
          </IconButton>
        </Tooltip>
        <Typography variant="h6" component="div" sx={{ color: "white", ml: 2 }}>
          John Doe
        </Typography>
      </Box>
    </Box>
  );

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <Scrollbars
        autoHide
        style={{ width: "100%", height: `calc(100vh - 72px)` }}>
        <List>
          {Object.keys(menuItems).map((text, index) => (
            <ListItem
              disablePadding
              onClick={() => navigate(menuItems[text].link)}
              button
              key={index}>
              <ListItemButton
                selected={menuItems[text].link === location.pathname}>
                <ListItemIcon>{menuItems[text].icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Scrollbars>
      <Divider />
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          "& .MuiPaper-root": { overflowY: "hidden !important" },
        }}>
        {userSection}
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default Sidebar;
