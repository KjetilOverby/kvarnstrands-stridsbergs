import React from 'react'
import { makeStyles, Grid, Typography, Container, Card, CardContent } from '@material-ui/core';
import ProductComponentBox from '../components/ProductComponentBox';

const useStyles = makeStyles(theme => ({
   productContainer: {
       background: theme.palette.customWhite.white
   },
   imgBg: {
      background: 'url("https://images.unsplash.com/photo-1422246654994-34520d5a0340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
      height: '60vh',
      maxHeight: '60vh',
      width: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      [theme.breakpoints.down('md')]: {
          backgroundAttachment: 'initial'
      }
   },
   box: {
      height: '20rem',
      width: '35rem',
      background: 'rgba(128, 128, 128, 0.6)',
      padding: '3rem',
      margin: '5vw',
      [theme.breakpoints.down('sm')]: {
        height: '18rem',
        width: '33rem'
    },
    [theme.breakpoints.down('xs')]: {
        height: '20rem',
        width: '33rem'
    }
   },
   headerBox: {
       color: 'white',
       fontWeight: 'bold',
       marginBottom: '2rem',
       [theme.breakpoints.down('sm')]: {
           fontSize: '1.5rem'
       },
       [theme.breakpoints.down('xs')]: {
           fontSize: '1.2rem'
       }
   },
   boxtext: {
       fontSize: '1.2rem',
       color: 'white',
       fontWeight: 500,
       [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
    }
   },
   section: {
       background: theme.palette.customWhite.white
   },
   sectionHeader: {
    fontWeight: 600,
    padding: '4rem 0',
    margin: '0  2rem -4rem 2rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.1rem'
    }
   },
   img: {
    margin: 0,
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    height: '12rem'
  },
  root: {
   background: theme.palette.customWhite.white,
   height: '32rem',
   margin: '1rem 1rem',
   width: '22rem',
   boxShadow: '3px 3px 40px rgba(0,0,0,.3)',
   '&:hover': {
       boxShadow: '10px 10px 10px rgba(0,0,0,.5)'
   }

  },

 
}))
const ProdukterComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.productContainer}>
          <Grid  container>
              <div className={classes.imgBg}>
                  <Grid container>
                      <div className={classes.box}>
                          <Typography className={classes.headerBox} variant='h4'>Vi selger verktøy til treindustrien og privatkunder</Typography>
                          <Typography className={classes.boxtext}>Som en av norges største leverandører av verktøy til treindustrien så kan vi skaffe det meste. Kvalitetsblad for kapp og gjerdesag til privat bruk er også etterspurt. </Typography>
                      </div>
                  </Grid>
              </div>
          </Grid>
          <section className={classes.section}>
          <Container>
               <Grid container>
                   <Typography className={classes.sectionHeader} variant='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto qui alias consectetur voluptas, nobis porro distinctio inventore accusantium ad, adipisci animi ipsa quos deleniti fuga temporibus, nisi sed aliquam.</Typography>
               </Grid>
               </Container>

             <ProductComponentBox />
          </section>
        </div>
    )
}

export default ProdukterComponent
