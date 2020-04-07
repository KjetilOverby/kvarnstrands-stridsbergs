import React from 'react';
import { Container, makeStyles, Typography, Grid, useMediaQuery, useTheme } from '@material-ui/core';

import handShake from '../images/handshakeBlackTheme.png';
import kvarnstrandsLogo from '../images/kvarnstrandsLogoBlackTheme.png'
import SlipeserviceComponentComputer from './SlipeserviceComponentComputer';

const serviceBackgoundColor = '#373636'

const deskWatch = 'url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80")'
const walkingMan = 'url("https://images.unsplash.com/photo-1571172116849-50afb7a38ddd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4096&q=80")'
const useStyles = makeStyles((theme) => ({
  pageheaderContainer: {
    padding: '3rem',
    background: deskWatch,
    backgroundSize:'cover',
    backgroundPosition: 'bottom',
    
    [theme.breakpoints.down('xs')]: {
    padding: 0,
   
    },
   
  },
  headerFirstSection1: {
    fontSize: '4rem',
    color: 'gray',
    fontWeight: 100,
   
    [theme.breakpoints.down('lg')]: {
    
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
     
      fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
    
      fontSize: '3rem'
    },
  },
  headerFirstSection: {
    fontSize: '5rem',
    color: 'orangered',
    fontWeight: 'bold',
    lineHeight: '1.5rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('lg')]: {
     
    },
    [theme.breakpoints.down('md')]: {
     fontSize: '3rem'
    },
    [theme.breakpoints.down('sm')]: {
     
      fontSize: '4rem',
    },
    [theme.breakpoints.down('xs')]: {
   
      fontSize: '3rem',
    },
  },
  headerFirstSectionService: {
    fontSize: '2rem',
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    margin: '3rem 6rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem',
    },
  },
  paragraphContainer: {
    width: '30rem',
    marginLeft: '-1rem',
   
    [theme.breakpoints.down('lg')]: {
     
    },
    [theme.breakpoints.down('md')]: {
    
      width: '20rem',
    },
    [theme.breakpoints.down('sm')]: {
     
    },
    [theme.breakpoints.down('xs')]: {
     
      fontSize: '3rem',
     
    },
  },
  mainContainer: {
    minHeight: '80vh',
    background: serviceBackgoundColor
    
  },

  img: {
    margin: 0,
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  illustration: {
    margin: '4rem 0',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  header: {
    padding: '3rem 8rem',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2rem',
    },
  },
  text: {
    paddingLeft: '8rem',
    color: theme.palette.secondary.main,
    fontSize: '1.2rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2rem',
    },
  },
  text2: {
    paddingLeft: '8rem',
    paddingRight: '8rem',
    color: theme.palette.secondary.main,
    fontSize: '1rem',
    marginBottom: '2rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2rem',
      marginBottom: '3rem'
    },
  },
  list: {
    color: theme.palette.secondary.main,
    marginLeft: '8rem',
    fontSize: '1rem',
    [theme.breakpoints.down('lg')]: {
     fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1rem',
      marginBottom: '2.5rem'
    }
  },
  header2knives: {
    color: theme.palette.secondary.main,
    fontSize: '1.1rem',
    paddingBottom: '2rem',
    marginLeft: '8rem',
    fontWeight: 600,
    [theme.breakpoints.down('lg')]: {
     fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem'
    }
  },
  logo: {
    height: '4rem',
    marginLeft: '8rem',
  
    [theme.breakpoints.down('md')]: {
      marginLeft: '7rem',
      marginBottom: '2rem',
      height: '3rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem',
      marginBottom: '2rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '2rem',
      marginBottom: '2rem',
      height: '3rem'
    }
  },
  productTextBox: {
    [theme.breakpoints.between(2000, 6000)]: {
      padding: '3rem',
      margin: '8rem 0 8rem 20rem',
    },
    [theme.breakpoints.between(1900, 1990)]: {
      padding: '3rem',
      margin: '2rem 0 2rem 10rem'
    },
  
    [theme.breakpoints.down('lg')]: {
      padding: '1rem',
      margin: '2rem 0 2rem 10rem'
    },
    [theme.breakpoints.down('md')]: {
      padding: '1rem',
      margin: '0rem 0 0rem 2rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2rem',
      margin: '0rem 0 0rem 0rem',
      background: 'rgba(256,256,256,.6)',
      width: '100vw'
    }
   
  },
  computerContainer: {
    minWidth: '80vw',
    background: serviceBackgoundColor,
    [theme.breakpoints.down('md')]: {
      maxWidth: '100vw',
    },
   
  }
 
}));




const SlipeserviceComponent = (props) => {
  const classes = useStyles();
  const themes = useTheme()
  const matches = useMediaQuery(themes.breakpoints.down('sm'));

const computer = (
<>

  <div style={{backgroundColor: serviceBackgoundColor}}>
 <Container className={classes.computerContainer}>
  <div className={classes.mainContainer}>
  <Grid container>
    <Grid xs={12} sm={12} md={6} item>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </Grid>
    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
            Sirkelsagblad
          </Typography>
          <Typography className={classes.text}>
            Skreddersyr etter ønsker og behov
          </Typography>
          <ul className={classes.list}>
            <li>Tilpasser</li>
            <li>Problemløsere</li>
            <li>Kompetanse</li>
            <li>Finish</li>
            <li>Standtid</li>
            <li>Klyvsagblader</li>
            <li>Kappsagblader</li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  <Grid container>
    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
            Båndsagblad
          </Typography>
          <Typography className={classes.text2}>
            Kvarnstrands & Stridsbergs A/S har et automatisk rettesenter
            som planerer, strekker og retter båndsagblad med stor
            nøyaktighet.
          </Typography>
          <Typography className={classes.text2}>
            Helautomatisk pålegg av stellit, som er høylegert verktøystål.
            Dette er noe som øker standtiden betraktelig.
          </Typography>
        </Grid>
      </Grid>
    </Grid>

    <Grid xs={12} sm={12} md={6} item>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
        alt=""
      />
    </Grid>
  </Grid>

  <Grid container>
    <Grid xs={12} sm={12} md={6} item>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </Grid>
    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
            Kniver
          </Typography>
          <Typography className={classes.header2knives}>Motstål - Huggerkniver - Reduserkniver - Rillestål</Typography>
          <Typography className={classes.text2}>
            Vi har egen knivsliper slik at vi kan møte våre kunders behov
            for slipeservice av kniver.
          </Typography>
          <Typography className={classes.text2}>
            Vi sliper kniver inntil 2600mm lengde. Kontakt oss for mere
            info og pris - vi kan hjelpe dere med det meste.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  <Grid container>
  
    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
           Fresere
          </Typography>
        
          <Typography className={classes.text2}>
            Kontakt: Kvarnstrands Verktøy Norge AS
            
          </Typography>
          <Typography className={classes.text2}>
          v/Morten Flatset, mob 951 30 191
          </Typography>
          <Typography className={classes.text2}>
          www.kvarnstrands.no
          </Typography>
          <img className={classes.logo} src={kvarnstrandsLogo} alt=""/>
        </Grid>
      </Grid>
    </Grid>
    <Grid xs={12} sm={12} md={6} item>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1465113959084-ffb1c2c55a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1273&q=80"
        alt=""
      />
    </Grid>
  </Grid>

  <Grid container>
    <Grid xs={12} sm={12} md={6} item>
      <img
        className={classes.img}
        src="https://admin.mekke.no/thumbnail.php?img=/data/images/2575/IMG_20170706_050142_edited.jpg&h=1201&w=2761"
        alt=""
      />
    </Grid>
    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
            Servicerute
          </Typography>
          <Typography className={classes.text}>
            Vi har servicerute som kjører hver 14. dag i følgende områder
          </Typography>
          <ul className={classes.list}>
            <li>Ringeriket</li>
            <li>Sør-Trøndelag</li>
            <li>Telemark/Vestfold/Buskerud</li>
            <li>Akerhus/Østfold</li>
            <li>Gudbrandsdalen</li>
            <li>Sørlandet/Vestfold</li>
           
          </ul>
          <Typography className={classes.text}>Ring oss for nærmere informasjon: 95 23 68 82 eller vår sjåfør Bjørn: 91 11 66 22</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

</div>
</Container>
</div>
</>
)

const cellphone = (

  <>

  <div className={classes.mainContainer}>
 
  <Grid container>
    <Grid xs={12} sm={12} md={12} item>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </Grid>
    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
            Sirkelsagblad
          </Typography>
          <Typography className={classes.text}>
            Skreddersyr etter ønsker og behov
          </Typography>
          <ul className={classes.list}>
            <li>Tilpasser</li>
            <li>Problemløsere</li>
            <li>Kompetanse</li>
            <li>Finish</li>
            <li>Standtid</li>
            <li>Klyvsagblader</li>
            <li>Kappsagblader</li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  <Grid container>

  <Grid xs={12} sm={12} md={12} item>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
        alt=""
      />
    </Grid> 

    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
            Båndsagblad
          </Typography>
          <Typography className={classes.text2}>
            Kvarnstrands & Stridsbergs A/S har et automatisk rettesenter
            som planerer, strekker og retter båndsagblad med stor
            nøyaktighet.
          </Typography>
          <Typography className={classes.text2}>
            Helautomatisk pålegg av stellit, som er høylegert verktøystål.
            Dette er noe som øker standtiden betraktelig.
          </Typography>
        </Grid>
      </Grid>
    </Grid>

    
  </Grid>

  <Grid container>
    <Grid xs={12} sm={12} md={12} item>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </Grid>
    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
            Kniver
          </Typography>
          <Typography className={classes.header2knives}>Motstål - Huggerkniver - Reduserkniver - Rillestål</Typography>
          <Typography className={classes.text2}>
            Vi har egen knivsliper slik at vi kan møte våre kunders behov
            for slipeservice av kniver.
          </Typography>
          <Typography className={classes.text2}>
            Vi sliper kniver inntil 2600mm lengde. Kontakt oss for mere
            info og pris - vi kan hjelpe dere med det meste.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  <Grid container>
  <Grid xs={12} sm={12} md={12} item>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1465113959084-ffb1c2c55a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1273&q=80"
        alt=""
      />
    </Grid>
  
    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
           Fresere
          </Typography>
        
          <Typography className={classes.text2}>
            Kontakt: Kvarnstrands Verktøy Norge AS
            
          </Typography>
          <Typography className={classes.text2}>
          v/Morten Flatset, mob 951 30 191
          </Typography>
          <Typography className={classes.text2}>
          www.kvarnstrands.no
          </Typography>
          <img className={classes.logo} src={kvarnstrandsLogo} alt=""/>
        </Grid>
      </Grid>
    </Grid>
  
  </Grid>

  <Grid container>
    <Grid xs={12} sm={12} md={12} item>
      <img
        className={classes.img}
        src="https://admin.mekke.no/thumbnail.php?img=/data/images/2575/IMG_20170706_050142_edited.jpg&h=1201&w=2761"
        alt=""
      />
    </Grid>
    <Grid md={6} container>
      <Grid container>
        <Grid item>
          <Typography
            className={classes.headerFirstSectionService}
            variant="h4"
          >
            Servicerute
          </Typography>
          <Typography className={classes.text}>
            Vi har servicerute som kjører hver 14. dag i følgende områder
          </Typography>
          <ul className={classes.list}>
            <li>Ringeriket</li>
            <li>Sør-Trøndelag</li>
            <li>Telemark/Vestfold/Buskerud</li>
            <li>Akerhus/Østfold</li>
            <li>Gudbrandsdalen</li>
            <li>Sørlandet/Vestfold</li>
           
          </ul>
          <Typography className={classes.text}>Ring oss for nærmere informasjon: </Typography>
          <Typography className={classes.text}>95 23 68 82 eller vår sjåfør</Typography>
          <Typography className={classes.text}>Bjørn: 91 11 66 22</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

</div>
</>
)
  return (
    <>
     <div className={classes.pageheaderContainer}>

<Grid container>
  <Grid md={6} container>
    <Grid className={classes.productTextBox} item>
      <Typography className={classes.headerFirstSection1}>
        Vi utfører
      </Typography>
      <Typography className={classes.headerFirstSection}>
        Slipeservice
      </Typography>
      <Container>
        <Grid className={classes.paragraphContainer} container>
          <Grid item>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorem molestiae asperiores, quo similique quam illum
              iste eligendi enim molestias atque corporis amet odit in,
              cupiditate eveniet pariatur sequi temporibus
              soluta!Molestiae dignissimos rerum nemo? Sed enim
              repudiandae.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  </Grid>


</Grid>
 

</div>

      {matches ? cellphone : computer }
     {/* <SlipeserviceComponentComputer /> */}
      
     
    </>
  );
};

export default SlipeserviceComponent;
//https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
