import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import testMap from '../../images/testmap.png'

const useStyles = makeStyles(theme => ({
    testMap: {
      margin: '3rem 0 10rem 0',
      [theme.breakpoints.down('lg')]: {
        width: '40vw'
      },
      [theme.breakpoints.down('sm')]: {
        width: '60vw'
      },
      [theme.breakpoints.down('xs')]: {
         width: '80vw'
      },
   },
 container: {
     backgroundColor: 'white',
     margin: '10em 0 10em 10em',
     paddingBottom: '5rem',
   [theme.breakpoints.between(1900, 1990)]: {
      margin: '10em 0 0 10em'
   },
   [theme.breakpoints.down('lg')]: {
       margin: '6em 0 0 3em',
       width: '40vw'
   },
   [theme.breakpoints.down('md')]: {
    marginLeft: '6em',
    paddingBottom: 0
   },
   [theme.breakpoints.down('sm')]: {
    width: '60vw'
   },
   [theme.breakpoints.down('xs')]: {
    marginLeft: '1rem',
    width: '80vw'
   },
   
    
 },
 header: {
   marginBottom: '2rem',
   fontWeight: '400',
   [theme.breakpoints.between(1900, 1990)]: {
    fontSize: '1.8rem'
 },
 [theme.breakpoints.down('lg')]: {
     fontSize: '1.6rem'
 },
 },
 text1: {
   marginBottom: '1rem',
   fontWeight: '600',
   [theme.breakpoints.between(1900, 1990)]: {
    fontSize: '1.6rem'
 },
 [theme.breakpoints.down('lg')]: {
     fontSize: '1.5rem'
 },
 },
 text2: {
     fontWeight: '600',
     marginBottom: '1rem',
     [theme.breakpoints.between(1900, 1990)]: {
        fontSize: '1.2rem'
     },
     [theme.breakpoints.down('lg')]: {
        fontSize: '1rem'
     },
 },
 text3: {
     fontWeight: 600
 }
}))
const ContactUs = () => {
const classes = useStyles()
return (
<div className={classes.container}>
    <Typography className={classes.header} variant='h3'>Kontakt oss</Typography>
    <Typography className={classes.text1} variant='h4'>Kvarnstrands & Stridsbergs AS</Typography>
    <Typography className={classes.text2} variant='h5'>Tlf: 952 36 882</Typography>
    <Typography className={classes.text2} variant='h5'>E-post: post@stridsberg.no</Typography>
    <Typography className={classes.text2} variant='h5'>Adresse: Stensrudvegen 1 - 2335 Stange</Typography>
    <Typography className={classes.text2} variant='h5'>Beliggenhet</Typography>
    <Typography className={classes.text3}>Vi befinner oss i Stange kommune, Hedmark fylke. Du finner oss ca 1 mil sør for Hamar, rett ved siden av E6</Typography>

    <img className={classes.testMap} src={testMap} alt=""/>
</div>
)
}

export default ContactUs