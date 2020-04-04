import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailIcon from '@material-ui/icons/Mail';
import logoImage from '../images/Stridsbergs2.png';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.myColor.cl,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
    height: '14em',
    
    [theme.breakpoints.down('md')]: {
      height: '14em'
    },
    [theme.breakpoints.down('sm')]: {
      height: '30em',
      paddingTop: '1em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '30em',
      paddingTop: '5em'
    }
  },
  logo: {
    height: '3em',
    [theme.breakpoints.down('md')]: {
      height: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '2em'
    }
  },
  logo2: {
    height: '2em',
    [theme.breakpoints.down('md')]: {
      height: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '2em'
    }
  },
  mainContainer: {
    position: 'absolute',
    height: '100%'
  },
  gridItem: {
    color: theme.palette.secondary.main,
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
        marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
        marginBottom: '2em'
    }
  },
 
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Grid
          justify="center"
          spacing={0}
          alignItems="center"
          container
          className={classes.mainContainer}
        >
          <Grid md={3} xs={12} className={classes.gridItem} item>
            <Grid
              container
              alignItems="center"
              className={classes.iconContainer}
              direction="column"
            >
              <Grid item>
                <img
                  className={classes.logo2}
                  src={logoImage}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid md={3} xs={12} className={classes.gridItem} item>
            <Grid
              container
              alignItems="center"
              className={classes.iconContainer}
              direction="column"
            >
              <Grid item>
                <HomeIcon fontSize="large" />
              </Grid>
              <Grid item>Stensrudvegen 1, 2335 Stange</Grid>
            </Grid>
          </Grid>

          <Grid md={3} xs={12} className={classes.gridItem} item>
            <Grid
              container
              alignItems="center"
              className={classes.iconContainer}
              direction="column"
            >
              <Grid item>
                <PhoneInTalkIcon fontSize="large" />
              </Grid>
              <Grid item className={classes.phoneNumber}>95 23 68 82</Grid>
            </Grid>
          </Grid>

          <Grid md={3} xs={12} className={classes.gridItem} item>
            <Grid
              container
              alignItems="center"
              className={classes.iconContainer}
              direction="column"
            >
              <Grid item>
                <MailIcon fontSize="large" />
              </Grid>
              <Grid item>post@stridsberg.no</Grid>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Footer;
