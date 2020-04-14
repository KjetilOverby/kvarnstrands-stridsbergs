import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailIcon from '@material-ui/icons/Mail';
import logoImage from '../images/Stridsbergs2BlackTheme.png';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.myColor.cl,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
    height: '14em',
    padding: '3rem 0 0 0',
    
    [theme.breakpoints.down('md')]: {
     
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
  container: {
     justifyContent: 'space-evenly',
     [theme.breakpoints.down('md')]: {
       marginTop: '5rem'
     },
     [theme.breakpoints.down('xs')]: {
       marginTop: 0,
      paddingBottom: '5rem'
     }
  },
  
  logo: {
    height: '3em',
    
    [theme.breakpoints.down('md')]: {
      height: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '2em',
      marginLeft: '4.5rem',
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
  text1: {
    color: 'white',
    '&:first-child': {
      marginBottom: '1rem'
    },
    '&:last-child': {
      marginBottom: '4rem'
    }
  }
 
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
         <Grid className={classes.container} container>
           <Grid  item>
             <Typography className={classes.text1}>Kvarnstrands & Stridsbergs AS</Typography>
             <Typography className={classes.text1}>Stensrudvegen 1</Typography>
             <Typography className={classes.text1}>2335 Stange</Typography>
             <br/>
             <Typography className={classes.text1}>tel: 952 36 882</Typography>
             <Typography className={classes.text1}>email: post@stridsbergs.no</Typography>
           </Grid>
           <Grid item>
           <Typography className={classes.text1}>Åpningstider:</Typography>
             <Typography className={classes.text1}>Verksted:</Typography>
             <Typography className={classes.text1}>mandag - torsdag: 07:00 - 16:00</Typography>
             <Typography className={classes.text1}>fredag: 07:00 - 13:00</Typography>
             <br/>
             <Typography className={classes.text1}>Administrasjon:</Typography>
            
             <Typography className={classes.text1}>mandag - torsdag: 07:00 - 16:00</Typography>
             <Typography className={classes.text1}>fredag: 08:00 - 13:00</Typography>
           </Grid>
           <Grid lg={6} md={2} sm={9} xs={12} item><img src={logoImage} alt="Logo" className={classes.logo}/></Grid>
         </Grid>
      </footer>
    </div>
  );
};

export default Footer;
