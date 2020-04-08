import React from 'react';
import {  Typography, Grid, makeStyles } from '@material-ui/core';

import ContactComponent from '../contacts/ContactComponent';

const useStyles = makeStyles(theme => ({
  mainContainer: {
     background: theme.palette.customWhite.white,
     [theme.breakpoints.down('sm')]: {
       paddingTop: '3rem'
     }
  },
  headerContainer: {
    background: 'url("https://images.unsplash.com/photo-1549176755-e67f625da235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '25vh',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('md')]: {
      
    backgroundAttachment: 'initial'
    },
    [theme.breakpoints.down('sm')]: {
      
     marginTop: '-3rem'
    },
   
    
  },
    header: {
      color: 'orangered',
      margin: '3rem 0',
      background: 'rgba(0, 0, 0, .6)',
      padding: '1rem',
      width: '30vw',
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
          marginTop: '0rem',
          fontSize: '2.5rem',
          paddingTop: '1rem',
          width: '100vh'
          
          
      }

    }
}))
const Contacts = () => {
    const classes = useStyles()
  return (
    <div className={classes.mainContainer}>
    <Grid container alignItems='center' className={classes.headerContainer}>
   
      <Grid container justify="center">
        <Typography className={classes.header} variant="h3">Kontaktpersoner</Typography>
      </Grid>
       <Grid item>
         
       </Grid>
       </Grid>
      
  
    <ContactComponent />
    </div>
  );
};

export default Contacts;
