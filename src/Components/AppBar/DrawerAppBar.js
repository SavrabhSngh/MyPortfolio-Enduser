import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Popover from "../../Common/PopOver";
import { DrawerInfo } from "../../Services/Constants";
import GetIcons from "../../Common/GetIcons";
import "./DrawerAppBar.css";

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const container =
    props.window !== undefined ? () => window().document.body : undefined;

  const handleAccountClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          width: { lg: "83vw", sm: "100vw" },
          color: "#000",
          background: "#ecf0f3",
          boxShadow: "-1px 11px 24px -11px rgb(0 0 0 / 75%)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#ff014f" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { lg: "none", xs: "block", md: "none", sm: "none" },
            }}
          >
            SAVRABH SINGH
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Dashboard
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton
              onClick={handleAccountClick("bottom-end")}
              aria-label="account"
              component="label"
              sx={{
                color: "#ff014f",
              }}
            >
              {GetIcons("Account")}
            </IconButton>
            <Popover anchorEl={anchorEl} open={open} placement={placement} />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "75%",
              color: "#fff",
              background: "#2c2e3d",
            },
          }}
        >
          <Box onClick={handleDrawerToggle}>
            <div className="dflex">
              <Typography variant="h6" sx={{ my: 2 }}>
                Portfolio Builder
              </Typography>
            </div>
            <Divider />
            <List>
              {Object.keys(DrawerInfo).map((obj, index) => {
                return (
                  <ListItem disablePadding key={index}>
                    <ListItemButton>
                      <ListItemIcon sx={{ color: "#fff" }}>
                        {GetIcons(DrawerInfo[obj])}
                      </ListItemIcon>
                      <ListItemText primary={obj} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
