import React from 'react';
import { Container, Typography, Grid, Card, CardContent, makeStyles } from '@material-ui/core';
import CardComponent from '../contacts/CardComponent';
import ContactComponent from '../kontakter/ContactComponent';

const useStyles = makeStyles(theme => ({
  mainContainer: {
     background: theme.palette.customWhite.white,
     [theme.breakpoints.down('sm')]: {
       paddingTop: '3rem'
     }
  },
    header: {
      color: 'gray',
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
