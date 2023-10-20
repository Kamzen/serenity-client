import * as React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Button } from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import StarIcon from "@mui/icons-material/Star";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "../../images/logo.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 2px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export default function DesktopNavigation() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const Link = styled(NavLink)({
    textDecoration: "none",
    color: "black",
    fontSize: 16,
    fontWeight: 450,
    "&:hover": {
      color: "#008d8a"
    }
  });

  const list = [
    {
      name: "Home",
      url: "/",
      icon: HomeIcon
    },
    {
      name: "Bookings",
      url: "/",
      icon: BookOnlineIcon
    },
    {
      name: "Review & Ratings",
      url: "/",
      icon: StarIcon
    },
    {
      name: "Billings",
      url: "/",
      icon: CreditCardIcon
    },
    {
      name: "Settings",
      url: "/",
      icon: SettingsIcon
    }
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        color="transparent"
        sx={{ backgroundColor: "secondary.main" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            width={100}
            height={65}
            justifyContent="center"
            ml={!open && 2}
          >
            <img src={logo} alt="Logo" width="100%" height="80%" />
          </Stack>
          <Stack
            width="100%"
            height={65}
            // border={1}
            ml={2}
            direction="row"
            spacing={2}
            padding={2}
            justifyContent="end"
            alignItems="center"
          >
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Services</Link>
            <Link>Blog</Link>
            <Button
              variant="contained"
              onClick={() => navigate("/loginWithPassword")}
            >
              Login | Register
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {open && <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List
          component={Stack}
          alignItems="center"
          justifyContent="center"
          disablePadding
        >
          {list.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ width: "80%" }}
              disableGutters
            >
              <ListItemButton centerRipple>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
