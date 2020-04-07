import React from 'react';
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.customWhite.white,
    height: '32rem',
    margin: '1rem 1rem',
    width: '20rem',
    boxShadow: '3px 3px 40px rgba(0,0,0,.3)',
    '&:hover': {
      boxShadow: '10px 10px 10px rgba(0,0,0,.5)',
    },
   
  },
  img: {
    margin: 0,
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    height: '12rem',
  },
  headercard: {
    marginTop: '2rem',
  },
  toolBoxContainer: {
    padding: '5rem 0'
    
  },

  boxTextContainer: {
     minHeight: '10rem',
      paddingTop: '1rem'
  },
  button: {
      color: 'orangered',
      border: '1px solid orangered',
      marginTop: '1rem'
  }
}));

const productCards = [
  {
    image:
      'https://admin.mekke.no/data/images/2575/Kvarnstrand_Klinga_H_copy.png',
    cardTitle: 'Sirkelsagblad',
    cardText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et quos esse recusandae consequatur',
  },
  {
    image:
      'https://www.eberle-augsburg.de/en/wp-content/uploads/sites/2/revslider/home_variante/slider-home-saege1.png',
    cardTitle: 'Båndsagblad',
    cardText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et quos esse recusandae consequatur. Facilis et quos esse recusandae',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/1781/8643/products/Veneer-Lathe-Knife-Isolated_large.png?v=1490635507',
    cardTitle: 'Kniver',
    cardText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et quos esse recusandae consequatur',
  },
  {
    image:
      'https://admin.mekke.no/data/images/2575/Kvarnstrand_Fram_V_copy_copy.png',
    cardTitle: 'Fresere',
    cardText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et quos esse recusandae consequaturdolor sit amet consectetur adipisicing elit.',
  },
];
const ProductComponentBox = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify='center' className={classes.toolBoxContainer}>
        {productCards.map((productCard) => (
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <img className={classes.img} src={productCard.image} alt="" />
              <Typography className={classes.headercard} variant="h4">
                {productCard.cardTitle}
              </Typography>
              <div className={classes.boxTextContainer}>
              <Typography>
                {productCard.cardText}
              </Typography>
              </div>
              <Button variant='outlined' className={classes.button}>Mer Info</Button>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default ProductComponentBox;
