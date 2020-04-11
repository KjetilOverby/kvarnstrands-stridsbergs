import React from 'react';
import {  Typography, Grid, makeStyles } from '@material-ui/core';

import ContactComponent from '../contacts/ContactComponent';

const useStyles = makeStyles(theme => ({
  mainContainer: {
     background: theme.palette.customWhite.white,
     [theme.breakpoints.down('sm')]: {
       paddingTop: '3rem',
       
     }
  },
  headerContainer: {
    background: 'url("https://images.unsplash.com/photo-1516055619834-586f8c75d1de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '35vh',
    backgroundAttachment: 'fixed',
   
    [theme.breakpoints.between(1900, 1990)]: {
       height: '40vh',
       backgroundPosition: 'center'
    },
    [theme.breakpoints.down('md')]: {
      
    backgroundAttachment: 'initial',
    height: '45vh',
    backgroundPosition: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      
     marginTop: '-3rem'
    },
    [theme.breakpoints.down('xs')]: {
      
       height: '70vh'
    },

    
  },
  headerTextContainer: {
      margin: '5rem 35rem',
      width: '25vw',
      overflow: 'hidden',
      [theme.breakpoints.between(1900, 1990)]: {
        margin: '5rem 15rem',
        width: '30vw'
      },
      [theme.breakpoints.down('lg')]: {
        margin: '5rem 10rem',
        width: '30vw'
      },
      [theme.breakpoints.down('md')]: {
        margin: '3rem 4rem',
        width: '40vw'
      },
      [theme.breakpoints.down('xs')]: {
        margin: '1rem 1rem',
        width: '50vw'
      },
      [theme.breakpoints.down(350)]: {
        margin: '1rem 1rem',
        width: '58vw'
      },
  },
  textAboveHeader: {
     fontSize: '2rem',
     color: 'gray',
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.2rem'
  }
  },
    header: {
      marginBottom: '1.5rem',
      color: 'orangered',
      fontWeight: '600',
      fontSize: '4rem',
      width: '40rem',
      lineHeight: '2rem',
      [theme.breakpoints.between(1900, 1990)]: {
      fontSize: '3rem',
      lineHeight: '1.5rem'
      },
      [theme.breakpoints.down('md')]: {
          marginTop: '-1.5rem',
          marginBottom: '1rem',
          fontSize: '2.5rem',
          paddingTop: '1rem',
          
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '1.3rem',
          marginTop: '-1.5rem',
          marginBottom: '-.5rem'
        }

    },
    text: {
      color: 'gray',
      marginTop: '1rem'
    }
}))
const Contacts = () => {
    const classes = useStyles()
  return (
    <div className={classes.mainContainer}>
    <Grid container className={classes.headerContainer}>
   
      <Grid container>
      <Grid item className={classes.headerTextContainer}>
      <Typography className={classes.textAboveHeader}>Vi kan hjelpe!</Typography>
        <Typography className={classes.header} variant="h3">TA KONTAKT I DAG</Typography>
        <Typography className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate asperiores quisquam deleniti necessitatibus excepturi.</Typography>
        </Grid>
      </Grid>
       <Grid item>
         
       </Grid>
       </Grid>
      
  
    <ContactComponent />
    </div>
  );
};

export default Contacts;
