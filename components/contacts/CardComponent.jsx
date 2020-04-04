import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core';
import { useContext } from 'react';
import Kontaktpersoner from './Kontaktpersone';

const useStyles = makeStyles(theme => ({
    cardMainContainer: {
     margin: '2rem',
     boxShadow: '5px 5px 20px rgba(0,0,0,.3)'
    },
  cardcontent: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main

  },
  cardheader: {
    marginLeft: '7rem',
    [theme.breakpoints.down('xs')]: {
        marginLeft: 0
    }
  },
  name: {
      marginLeft: '7rem',
      marginTop: '5rem',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginTop: '1rem'
    }
  },
  info: {
      marginLeft: '7rem',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0
    },
   
  },
  image: {
    height: '13rem',
    borderRadius: '5px'
}
}));


const CardComponent = () => {
    const contacts = useContext(Kontaktpersoner)
  const classes = useStyles();
  return (

    
    <div>
    {contacts.map((contact) => (
        <Card className={classes.cardMainContainer}>
        <CardContent className={classes.cardcontent}>
          <Grid direction="row" container>

            <Grid item>
              <img
                src={contact.image}
                alt={contact.name}
                className={classes.image}
              />
            </Grid>

            <Grid item>
              <Typography variant="h5" className={classes.cardheader}>
                {contact.title}
              </Typography>
              <Typography 
              variant='h4' 
              className={classes.name}
              >
              {contact.name}
              </Typography>
              <Typography className={classes.info}>{contact.mob}</Typography>
              <Typography className={classes.info}>{contact.epost}</Typography>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    ))}
      
    </div>
  );
};

export default CardComponent;
