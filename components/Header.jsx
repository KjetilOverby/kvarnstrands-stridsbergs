import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  useScrollTrigger,
  Menu,
  MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import { useEffect } from 'react';
import logoImage from '../images/StridsbergsBlackTheme.png';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '7em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '3em'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '7em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '3.4em'
    }
  },
  header: {
    height: '10rem',
    [theme.breakpoints.down('md')]: {
      height: '8em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '7em'
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    boxShadow: 'none'
  },
  tabContainer: {
    marginLeft: 'auto',
    '&:last-child': {
      marginRight: '2rem'
    }
  },
  tab: {
    ...theme.typography.tab,
    [theme.breakpoints.down('lg')]: {
      marginLeft: '1px',
      fontSize: '0.9rem'
    }
  },
  drawerIcon: {
    height: '40px',
    width: '60px;',
    color: theme.palette.secondary.main
  },
  logo: {
    height: '4rem',
    paddingLeft: '4rem',
    [theme.breakpoints.down('lg')]: {
      height: '3em',
      paddingLeft: '4rem'
    },
    [theme.breakpoints.down('md')]: {
      height: '6em',
      paddingLeft: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '3em',
      paddingLeft: '1rem'
    },
    [theme.breakpoints.down('md')]: {
      height: '3em'
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      background: 'transparent'
    }
  },
  drawer: {
    background: theme.palette.primary.main,

    width: '12rem'
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.secondary.main
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = props => {
  const classes = useStyles();
  const themes = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(themes.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const changeActiveTab = (e, value) => {
    setActiveTab(value);
  };
  useEffect(() => {
    if (window.location.pathname === '/' && activeTab !== 0) {
      setActiveTab(0);
    } else if (window.location.pathname === '/services' && activeTab !== 1) {
      setActiveTab(1);
    } else if (window.location.pathname === '/Om Oss' && activeTab !== 2) {
      setActiveTab(2);
    } else if (window.location.pathname === '/Produkter' && activeTab !== 3) {
      setActiveTab(3);
    } else if (window.location.pathname === '/kontakt' && activeTab !== 4) {
      setActiveTab(4);
    } else if (window.location.pathname === '/stilling' && activeTab !== 5) {
      setActiveTab(5);
    } else if (window.location.pathname === '/salgsbetingelser' && activeTab !== 5) {
      setActiveTab(5);
    } else if (window.location.pathname === '/slipeservice' && activeTab !== 5) {
      setActiveTab(5);
    }
  }, [activeTab]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tabs = (
    <Tabs
      value={activeTab}
      className={classes.tabContainer}
      onChange={changeActiveTab}
      indicatorColor="primary"
    >
      <Link href="/">
        <Tab className={classes.tab} label="Hjem" />
      </Link>
     
      <Link href='/produkter'>
      <Tab className={classes.tab} label="Produkter" />
      </Link>
      <Link href='/slipeservice'>
      <Tab className={classes.tab} label="Slipeservice" />
      </Link>
      <Link href="/kontakt">
        <Tab className={classes.tab} label="Kontakt Oss" />
      </Link>

      <Tab
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.tab}
        label="Aktuelt"
      />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: 1500 }}
      >
        
        <Link href="/stilling">
          <MenuItem onClick={handleClose}>Jobbe hos oss</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Link href='/salgsbetingelser'>
          <MenuItem onClick={handleClose}>Salgsbetingelser</MenuItem>
        </Link>
      </Menu>
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/">
              <ListItemText className={classes.drawerItem} disableTypography>
                Hjem
              </ListItemText>
            </Link>
          </ListItem>

         
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
          <Link href='/produkter'>
            <ListItemText className={classes.drawerItem} disableTypography>
              Produkter
            </ListItemText>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
          <Link href='/slipeservice'>
            <ListItemText className={classes.drawerItem} disableTypography>
              Slipeservice
            </ListItemText>
            </Link>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="kontakt">
              <ListItemText className={classes.drawerItem} disableTypography>
                Kontakt Oss
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText
              aria-controls="simple-menu"
              aria-haspopup="true"
              onMouseOver={handleClick}
              className={classes.drawerItem}
              disableTypography
            >
              Aktuelt
            </ListItemText>
          </ListItem>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ zIndex: 1500 }}
          >
            <Link href="/stilling">
              <MenuItem onClick={handleClose}>Jobbe hos oss</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <Link href='/salgsbetingelser'>
            <MenuItem onClick={handleClose}>Salgsbetingelser</MenuItem>
            </Link>
          </Menu>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar className={classes.header}>
            <img className={classes.logo} src={logoImage} alt="" />

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
