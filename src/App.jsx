import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Account from "./components/Account";
import Chains from "components/Chains";
//import TokenPrice from "components/TokenPrice";
import DEX from "components/Dex/Dex";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import "antd/dist/antd.css";
import "./style.css";
import Ramper from "components/Ramper";
import { SALIENT_YACHT_NFT_ADDR, SALIENT_YACHT_NFT_ABI, SALIENT_YAGHT_STREAM_ABI, CHAINLINK_AVAX_USD_ADDR, CHAINLINK_AGGREGATORV3_INTERFACE_ABI } from "./constants";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NFTTokenIds from "components/NFTTokenIds";
// import SearchCollections from "components/SearchCollections";
import NFTMarket from "components/NFTMarket";
import SYRewards from "./pages/SYRewards/SYRewards";
import SYBuyNFT from "./pages/SYBuyNFT";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './theme.js';
import logo from './logo.png';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import Home from "pages/Home/Home";
import Governance from "pages/Governance";
import Demo from "pages/Demo";
import Wind from "pages/Wind";
import AllYachts from "pages/Yachts/AllYachts";
import Yachts from "pages/Yachts/Yachts";
import Yachts1 from "pages/Yachts/Yachts1";
import Yachts2 from "pages/Yachts/Yachts2";
import Artwork from "pages/Artwork";
import Transfers from "pages/Transfers";

const theme = 'darkTheme';
const drawerWidth = 320;

const openedMixin = (theme) => ({
  width: drawerWidth,
  background: "linear-gradient(180.48deg,rgba(115,70,215,1) -26.15%,rgba(57,35,81,1) 189.84%)",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  background: "linear-gradient(180.48deg,rgba(115,70,215,1) -26.15%,rgba(57,35,81,1) 189.84%)",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(2)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const styles = {
  content: {
    display: "flex",
    width: `calc(100% - ${drawerWidth}px)`,
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    //color: "#041836",
    marginTop: "85px",
    padding: "10px",
  },
  subcontent: {
    display: "flex",
    padding: " 3rem",
    width: "100%",
  },
  header: {
    display: "flex",
    zIndex: 1,
    width: "100%",
    background: "transparent",
    alignItems: "center",
    fontFamily: "Aclonica",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "right",
    fontSize: "15px",
    fontWeight: "600",
    margin: "0 20px",
  },
  logo: {
    color: "#1fc7d3",
    //color: "#7346d7",
    alignItems: "left",
    fontSize: "1.75rem",
    fontFamily: "Aclonica",
    fontWeight: "400",
    marginLeft: "0.8rem"
  },
  logo2: {
    color: "#1fc7d3",
    //color: "#7346d7",
    alignItems: "center",
    fontSize: "0.95rem",
    fontFamily: "Aclonica",
    fontWeight: "200"
  },
};

function App({ isServerInfo }) {
  const { Moralis, isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  const [open, setOpen] = React.useState(true);
  const [openM, setOpenM] = React.useState(false);
  const [openM2, setOpenM2] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickM = () => {
    setOpenM(!openM);
  };
  const handleClickM2 = () => {
    setOpenM2(!openM2);
  };

  const onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  const changeTheme = value => {
    this.setState({
      theme: value ? 'darkTheme' : 'lightTheme',
    });
  };

  const toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  const { collapsed } = React.useState(false);
  const [inputValue, setInputValue] = useState("explore");

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Box sx={{ display: 'flex', }}>

          <CssBaseline />

          <Drawer variant="permanent" open={open} >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItemButton component={RouterLink} to="/Home">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>

              <ListItemButton component={RouterLink} to="/Demo">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Demo" />
              </ListItemButton>

              <ListItemButton onClick={handleClickM} component={RouterLink} to="/salientyachtrewards">

                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Porfolio" />
                {openM ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openM} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <ListItemButton component={RouterLink} to="/salientyachtrewards">
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Rewards Dashboard" />
                  </ListItemButton>

                  <ListItemButton component={RouterLink} to="/nftBalance">
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="My NFTs" />
                  </ListItemButton>

                  <ListItemButton component={RouterLink} to="/wallet">
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Wallet & Balances" />
                  </ListItemButton>

                  <ListItemButton component={RouterLink} to="/Transactions">
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Wallet Transactions" />
                  </ListItemButton>

                </List>
              </Collapse>

              <Divider />

              <ListItemButton onClick={handleClickM2} component={RouterLink} to="/salientyachtsnft">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="NFT Yacht Ownership" />
                {openM2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openM2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <ListItemButton component={RouterLink} to="/salientyachtsnft">
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buy SY NFT Shares" />
                  </ListItemButton>

                  <ListItemButton component={RouterLink} to="/NFTCollections">
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="View Yacht NFT Collections" />
                  </ListItemButton>

                  <ListItemButton component={RouterLink} to="/AllYachts">
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="View Our Yachts " />
                  </ListItemButton>

                </List>
              </Collapse>
              <Divider />

              <ListItemButton component={RouterLink} to="/SYartwork">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="NFT Artwork Collectables" />
              </ListItemButton>

              <ListItemButton component={RouterLink} to="/NFTMarketPlace">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="NFT Marketplace" />
              </ListItemButton>

              <ListItemButton component={RouterLink} to="/dex">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="DEX Trade" />
              </ListItemButton>

              <ListItemButton component={RouterLink} to="/onramp">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="FIAT / Card Onramp" />
              </ListItemButton>

              <ListItemButton component={RouterLink} to="/Windinfo">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Wind Token Info" />
              </ListItemButton>

              <ListItemButton component={RouterLink} to="/Governance">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Governance" />
              </ListItemButton>

              <ListItemButton component={RouterLink} to={{ pathname: "https://medium.com/@SalientYachts" }} target="_blank" >
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItemButton>

              <ListItemButton component={RouterLink} to={{ pathname: "https://clinton-k.gitbook.io/salient-yachts-nfts/" }} target="_blank" >
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Docs / Whitepaper" />
              </ListItemButton>

            </List>
          </Drawer>
          <AppBar position="fixed" open={open}>

            <Toolbar sx={{ minHeight: '80px' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: '1px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: 'flex', alignItems: "center", background: "transparent", width: "100%", }}>
                <img src={logo} alt="Logo" height='80px' />

                <div style={styles.logo}>
                  Salient Yachts
                  <div style={styles.logo2}>
                    Offshore Living
                  </div>
                </div>

              </Box>
              <div style={styles.headerRight}>
                <Chains />
                <Account />
              </div>
            </Toolbar>
          </AppBar>

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />

            <div >
              <Switch>
                <Route exact path="/">
                  <Redirect to="/Home" />
                </Route>

                <Route path="/Home">
                  <Home />
                </Route>

                <Route path="/Demo">
                  <Demo />
                </Route>

                <Route path="/salientyachtsnft">
                  <SYBuyNFT />
                </Route>

                <Route path="/salientyachtrewards">
                  <SYRewards />
                </Route>

                <Route path="/wallet">
                  <Wallet />
                </Route>

                <Route path="/transactions">
                  <Transfers />
                </Route>

                <Route path="/nftBalance">
                  <NFTBalance />
                </Route>

                <Route path="/Transactions">
                  
                </Route>

                <Route path="/SYartwork">
                  <Artwork />
                </Route>

                <Route path="/NFTCollections">
                  <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue} />
                </Route>

                <Route path="/NFTmarketPlace">
                  <NFTMarket />
                </Route>

                <Route path="/AllYachts">
                  <AllYachts />
                </Route>

                <Route path="/yachts">
                  <Yachts />
                </Route>

                <Route path="/yachts1">
                  <Yachts1 />
                </Route>

                <Route path="/yachts2">
                  <Yachts2 />
                </Route>

                <Route path="/Dex">
                  <DEX />
                </Route>

                <Route path="/onramp">
                  <Ramper />
                </Route>

                <Route path="/Windinfo">
                  <Wind />
                </Route>

                <Route path="/Governance">
                  <Governance />
                </Route>

                <Route path="/nonauthenticated">
                  <>Please login using the "Authenticate" button</>
                </Route>

                <Route>
                  <>Page Not Found 404</>
                </Route>

              </Switch>
            </div>


          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

