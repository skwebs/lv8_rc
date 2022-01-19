import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  LanguageOutlined, Login as LoginIcon, MailOutline, Person as PersonIcon
} from "@mui/icons-material";
import { Avatar, IconButton, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from "@mui/material";

export default function Navigation() {
  const [openDrawer, setOpenDrawer] = useState(true);
  const navigate = useNavigate();
  const location = useLocation()
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };
  const menuItems = {
    "Home": {
      icon: <HomeIcon />,
      link: "/"
    },
    "About Us": {
      icon: <PersonIcon />,
      link: "/about"
    },
    "Contact Us": {
      icon: <MailOutline />,
      link: "/contact"
    },
    "Login": {
      icon: <LoginIcon />,
      link: "/login"
    },
    "Sitemap": {
      icon: <LanguageOutlined />,
      link: "/sitemap"
    }
  }


  const userSection = (
    <Box sx={{ height: 80, bgcolor: 'primary.main' }}>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Typography variant="h6" noWrap component="div">User</Typography>
    </Box>
  );

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Object.keys(menuItems).map((text, index) => (
          <ListItem disablePadding onClick={() => navigate(menuItems[text].link)} button key={index}>
            <ListItemButton selected={menuItems[text].link === location.pathname} >
              <ListItemIcon>
                {menuItems[text].icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <SwipeableDrawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {userSection}
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
