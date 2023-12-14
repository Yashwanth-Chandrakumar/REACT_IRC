import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Rocket from "@mui/icons-material/RocketLaunch";
import Account from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OutlinedCard from "./OutlinedCard";

const pages = ["Home", "Login", "Aboutus"];
const Item = styled(Paper)(() => ({
    textAlign:'center',
}));

function Nav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Rocket sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Yashwanth
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Yashwanth
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "end",
                  gap: "1rem",
                },
              }}
            >
              {pages.map((page) => (
                <Button sx={{ my: 2, color: "white", display: "block" }} Home>
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }} onClick={handleOpen}>
                  <Account
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 1,
                      color: "#fff",
                      marginLeft: "1rem",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ color: "blueviolet" }}
          >
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              sx={{width:'100%' ,mt:1}}/>
            
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
             sx={{width:'100%',mt:1}}/>
            
            <Button variant="contained" sx={{width:'100%',mt:1}}>Login</Button>
          </Typography>
        </Box>
      </Modal> 
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid xs={3}>
          <Item>Hi</Item>
        </Grid>
        <Grid xs={3}>
          <Item>Hi</Item>
        </Grid>
        <Grid xs={3}>
          <Item>Hi</Item>
        </Grid>
        <Grid xs={3}>
          <Item>Hi</Item>
        </Grid>
        <Grid xs={2}>
          <Item>Hello</Item>
        </Grid>
        <Grid xs={2}>
          <Item>Hello</Item>
        </Grid>
        <Grid xs={2}>
          <Item>Hello</Item>
        </Grid>
        <Grid xs={2}>
          <Item>Hello</Item>
        </Grid>
        <Grid xs={2}>
          <Item>Hello</Item>
        </Grid>
        <Grid xs={2}>
          <Item>Hello</Item>
        </Grid>
      </Grid>
      </Box>
      <OutlinedCard/>
    </>
  );
}
export default Nav;