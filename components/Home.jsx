import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  image: {
  /*   background:
      'url("https://images.unsplash.com/photo-1518345598672-283ca2f7c022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")', */
    background:
      'url("https://images.unsplash.com/photo-1559568967-3234afd7f360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1361&q=80")',

    height: '60vh',
    width: '100vw',
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '2rem 5rem 5rem 5rem',
    opacity: '0.6',
    [theme.breakpoints.down('md')]: {
      margin: '-3rem 0 3rem 0'
    }
  },
  textContainer: {
    color: 'white'
  },
  typo: {
    marginBottom: '3rem'
  },
  section2: {
    paddingTop: '1rem',
    background: 'white'
  },
  typo2: {
    color: 'black',
    marginBottom: '2rem',
    '&:last-child': {
        marginBottom: '6rem'
    }
  },
  typo2header: {
     margin: '3rem 0',
     color: 'black'
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center">
        <div className={classes.image}></div>
      </Grid>

      <section className={classes.section}>
        <Container className={classes.container}>
          <Grid
            container
            direction="row"
            className={classes.textContainer}
            xl={10}
          >
            <Grid conatiner md={6}>
              <Grid item>
                <Typography className={classes.typo} variant="h4">
                  Kvarnstrands & Stridsbergs AS
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.typo}>
                  Kvarnstrands & Stridsbergs AS er en av Norges ledende
                  leverandører av skjærende verktøy til sagbrukindustrien.
                  Kundene befinner seg fra lengst i sør til lengst nord i landet
                  vårt. Hovedmålgruppen er sagbruk og høvlerier, men også papir,
                  cellulose,møbelindustrien,metallindustrien, snekkerverksteder
                  og enkeltkunder er representert.
                </Typography>
              </Grid>
            </Grid>

            <Grid container md={3}></Grid>

            <Grid
              container
              md={3}
              direction="column"
              alignItems="center"
              className={classes.gridContainer}
            >
              <Grid item>
                <Typography className={classes.typo} variant="h4">
                  Åpningstider
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Verksted:</Typography>
                <Typography className={classes.typo}>
                  Mandag - Torsdag: 07:00 - 16:00
                </Typography>
                <Typography variant="h5">Administrasjon:</Typography>
                <Typography>Mandag - Torsdag: 08:00 - 16:00</Typography>
                <Typography className={classes.typo}>
                  Fredag: 08:00 - 13:00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.section2}>
        <Container>
          <Grid container className={classes.textContainer} justify="center">
            <Grid item>
              <Typography variant="h4" className={classes.typo2header}>
                Om Stridsbergs Norge A/S
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typo2}>
                Stridsbergs Norge A/S startet opp i Oslo 1. januar 1987 som
                datterselskap av Stridsbergs og Biörck, Trollhättan med 4
                ansatte. I 1993 ble Stridsbergs Norge A/S et selvstendig
                selskap. I dag holder vi til i Stange, ca. 1 mil syd for Hamar.
                (Se kart)
              </Typography>
              <Typography className={classes.typo2}>
                Historien bak Stridsbergs produkter er ikke glemt, med 18
                ansatte gjør vi halvfabrikata om til et ferdig produkt. Dette
                skal gjøre våre nye og gamle kunder fornøyde; på slipeservice og
                nytt verktøy. Vi har meget moderne maskinpark som
                tilfredsstiller markedets mest krevende pressisjon og kundens
                behov.
              </Typography>
              <Typography className={classes.typo2}>
              Produktene vi jobber med i dag er sirkelsagblad og båndsagblad i alle dimensjoner.
              </Typography>
              <Typography className={classes.typo2}>
              Endret navn til Kvarnstrands & Stridsbergs AS 02. juli 2018 og jobber med å fusjonere Stridsbergs Norge og Kvarnstrands Verktøy 
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Home;
