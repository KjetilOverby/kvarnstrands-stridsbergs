import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    mainContainer: {
    minWidth: '80vw'
    },
  img: {
     
    margin: 0,
    display: 'block',
    maxWidth: '60%',
    maxHeight: '100%',
  },
  container: {
      marginBottom: '10rem'
  },
  mainContentContainer: {
     
  },
  imgContainer: {
    background: 'url("https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
    height: '40vh',
    width: '40vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    justifyContent: 'flex-end'
    
  },
  imgContainerOpposite:{
    background: 'url("https://images.unsplash.com/photo-1465113959084-ffb1c2c55a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1273&q=80")',
    height: '40vh',
    width: '40vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },
  box: {
    height: '25vh',
    width: '30vw',
    background: 'rgb(10, 10, 256)',
   
    
   
  
    
  },
  boxOpposite: {
    height: '25vh',
    width: '30vw',
    background: 'rgb(10, 10, 256)',
    
  }
}));

const SlipeserviceComponentComputer = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.mainContainer}>
      <Grid classes={classes.mainContentContainer} container>
         <Grid container className={classes.container}>
             <Grid item className={classes.imgContainer}>
                 <div className={classes.box}></div>
             </Grid>
             
         </Grid>
         <Grid className={classes.container} container>
             <Grid item className={classes.imgContainerOpposite}>
                 <div className={classes.boxOpposite}></div>
             </Grid>
             
         </Grid>

         <Grid container className={classes.container}>
             <div className={classes.imgContainer}>
                 <div className={classes.box}></div>
             </div>
             
         </Grid>
         </Grid>
       
      </Container>
    
    </div>
  );
};

export default SlipeserviceComponentComputer;
