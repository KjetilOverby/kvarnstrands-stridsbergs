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
    header: {
      color: 'orangered',
      margin: '3rem',
      [theme.breakpoints.down('sm')]: {
          marginTop: '0rem',
          fontSize: '2.5rem',
          paddingTop: '1rem'
      }
    }
}))
const Contacts = () => {
    const classes = useStyles()
  return (
    <div className={classes.mainContainer}>
   
      <Grid container justify="center">
        <Typography className={classes.header} variant="h3">Kontaktpersoner</Typography>
      </Grid>
       <Grid item>
         
       </Grid>
     
      
  
    <ContactComponent />
    </div>
  );
};

export default Contacts;
