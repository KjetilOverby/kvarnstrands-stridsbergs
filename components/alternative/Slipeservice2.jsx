import React from 'react';
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  siteContainer: {
    background: theme.palette.secondary.main,
  },
  imgBackgound: {
    background: 'url("https://images.unsplash.com/photo-1514300403573-6d9a8fe888f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80")',
    height: '60vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('md')]: {
    backgroundAttachment: 'initial'
    },
    [theme.breakpoints.down('xs')]: {
    height: '60vh'
    },
    [theme.breakpoints.down(350)]: {
    height: '90vh'
    },
  },
  textBoxContainer: {
     marginLeft: '50vw',
     [theme.breakpoints.down('xs')]: {
       marginLeft: '0vw'
     
     },
  },
  productTextBox: {
      background: 'rgba(256,256,256,.7)',
      height: '28rem',
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
      margin: '2rem 0 0rem 2rem',
      height: '23rem'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '4rem 0rem 0 -3rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2rem',
      margin: '0rem 0 0rem 0rem',
      background: 'rgba(256,256,256,.8)',
      width: '100vw'
    }
   
  },
  headerFirstSection1: {
    fontSize: '3rem',
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
    
      fontSize: '2rem'
    },
    [theme.breakpoints.down(350)]: {
    
      fontSize: '2rem'
    },
  },
  headerFirstSection: {
    fontSize: '4rem',
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
   
      fontSize: '2rem',
    },
    [theme.breakpoints.down(350)]: {
   
      fontSize: '2rem',
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
    [theme.breakpoints.down(350)]: {
       width: '17rem',

     
    },
  },
  toolsContainer: {
    maxWidth: '60vw',
    [theme.breakpoints.between(1900, 1990)]: {
        maxWidth: '80vw'
    },
    [theme.breakpoints.down('lg')]: {
        maxWidth: '90vw',
       
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    },
   
   
  },
  gridToolsContainer: {
     [theme.breakpoints.down('sm')]: {
     alignItems: 'center'
     },
  },
  illustration: {
    height: '18em',
    [theme.breakpoints.down('sm')]: {
    height: '15em'
    },
    [theme.breakpoints.down(350)]: {
    height: '12rem'
    },
  },
  bandsawIllustration: {
    height: '18em',
    [theme.breakpoints.down('sm')]: {
     height: '15em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '12em'
    },
    [theme.breakpoints.down(350)]: {
    height: '10em'
    },
  },
  knifeIllustration: {
     height: '12em'
  },
  fresIllustration: {
     height: '26em',
     [theme.breakpoints.down('sm')]: {
     height:'20em'
     },
     [theme.breakpoints.down(350)]: {
     height: '16em'
     },
  },
  serviceCarIllustration: {
  height: '14em',
  [theme.breakpoints.down(350)]: {
  height: '11em'
  },
  
  },
  sawbladeContainer: {
    flexDirection: 'row',
    width: '50rem',

  
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
    width: '100vw',
    justifyContent: 'center'
    },
  
  },
  bandsawContainer: {
    justifyContent: 'flex-end',
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
    width: '100vw',
    justifyContent: 'center'
    },
  },
  servicecarContainer: {
      marginBottom: '10rem',
      [theme.breakpoints.down('xs')]: {
      marginTop: '7rem'
      },
      
  },
  innerContainer: {
    width: '20rem',
    [theme.breakpoints.down(350)]: {
    width: '15rem'
    },
    
  },
  knifeContainer: {
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
    width: '100vw',
    justifyContent: 'center',
    
    },
  },
  serviceHeader: {
    fontWeight: 'bold',
    fontSize: '1.8rem'
    
  },
  btn: {
    color: theme.palette.customOrange.main,
    border: `1px solid ${theme.palette.customOrange.main}`,
    marginTop: '2rem',
  },
}));



const Slipeservice2 = () => {
  const classes = useStyles();
  const themes = useTheme()
  const matches = useMediaQuery(themes.breakpoints.down('sm'));
  const computer = (
    <>
    <Grid className={classes.sawbladeContainer} spacing={10} container>
    <Grid item>
      <img
        className={classes.illustration}
        src="https://thumbs.dreamstime.com/b/circular-saw-blade-illustration-drawing-engraving-ink-line-art-vector-illustration-what-made-ink-pencil-paper-then-135192386.jpg"
        alt=""
      />
    </Grid>
    <Grid item>
      <Typography className={classes.serviceHeader}>
        Sirkel sagblad
      </Typography>
      <br/>
      <Grid container className={classes.innerContainer}>
      <Typography>Skreddersyr etter ønsker og behov</Typography>
      <ul>
        <li>Tilpasser</li>
        <li>Problemløsere</li>
        <li>Kompetanse</li>
        <li>Finish</li>
        <li>Standtid</li>
        <li>Klyvsagblad</li>
        <li>Kappsagblad</li>
      </ul>
</Grid>
      <Button
        className={classes.btn}
        variant="outlined"
        color="customOrange"
      >
        Les mer
      </Button>
    </Grid>
  </Grid>

  <Grid className={classes.bandsawContainer} container>
    <Grid item>
      <Typography className={classes.serviceHeader}>
        Båndsagblad
      </Typography>
      <br />
      <Grid className={classes.innerContainer} container>
        <Typography>
          Stridsbergs Norge A/S har ett automatisk rettesenter som
          planerer, strekker og retter båndsdagblad med stor
          nøyaktighet.
        </Typography>
        <br />
        <Typography>
          Helautomatisk pålegg av stellit, som er høylegert verktøystål.
          Dette er noe som øker standtiden betraktelig.
        </Typography>
      </Grid>
      <Button className={classes.btn}>Les mer</Button>
    </Grid>
    <Grid item>
      <img
        className={classes.bandsawIllustration}
        src="https://www.spectrummachinetools.com/wp-content/uploads/2019/02/Band-Saw-Blade.jpg"
        alt=""
      />
    </Grid>
  </Grid>

  <Grid className={classes.knifeContainer} spacing={10} container>
    <Grid item>
      <img
        className={classes.knifeIllustration}
        src="data:image/jpeg;base64,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"
        alt=""
      />
    </Grid>
    <Grid item>
      <Typography className={classes.serviceHeader}>Kniver</Typography>
      <br/>
      <Grid className={classes.innerContainer}>
        <Typography>
          Motstål - Huggkniver - Reduserkniver - Rillestål
        </Typography>
        <br />
        <Typography>Vi sliper kniver inntil 2600mm lengde.</Typography>
        <Typography>
          Kontakt oss for mere info og pris - vi kan hjelpe dere med det
          meste.
        </Typography>
        <Button className={classes.btn}>Les mer</Button>
      </Grid>
    </Grid>
  </Grid>

  <Grid className={classes.bandsawContainer} spacing={10} container>
    <Grid className={classes.innerContainer}>
      <Grid item>
        <Typography className={classes.serviceHeader}>
          Fresere
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          deleniti, necessitatibus, ipsum ipsa odit magni ipsam veniam
          voluptas.
        </Typography>
        <Button className={classes.btn}>Les mer</Button>
      </Grid>
    </Grid>
    <Grid item>
      <img
        className={classes.fresIllustration}
        src="https://images-na.ssl-images-amazon.com/images/I/31tspNtPH%2BL._SL500_AC_SS350_.jpg"
        alt=""
      />
    </Grid>
  </Grid>

  <Grid className={classes.servicecarContainer} spacing={4} container>
    <Grid item>
      <img
        className={classes.serviceCarIllustration}
        src="https://thumbs.dreamstime.com/b/cartoon-driver-generic-delivery-van-showing-thumbs-up-cartoon-stick-drawing-conceptual-illustration-driver-fast-131940591.jpg"
        alt=""
      />
    </Grid>
    <Grid className={classes.innerContainer}>
      <Grid item>
        <Typography className={classes.serviceHeader}>
          Servicebil
        </Typography>
        <br />
        <Typography>
          Vi har servicerute som kjører hver 14.dag i følgende områder :
        </Typography>
        <ul>
          <li>Ringeriket</li>
          <li>Sør-Trøndelag</li>
          <li>Telemark/Vestfold/Buskerud</li>
          <li>Akerhus/Østfold</li>
          <li>Gudbrandsdalen</li>
          <li>Sørlandet/Vestfold</li>
        </ul>
        <Button className={classes.btn}>Les mer</Button>
      </Grid>
    </Grid>
  </Grid>
  </>
  )

 const mobile = (
   <>
  <Grid className={classes.sawbladeContainer} spacing={10} container>
  <Grid item>
    <img
      className={classes.illustration}
      src="https://thumbs.dreamstime.com/b/circular-saw-blade-illustration-drawing-engraving-ink-line-art-vector-illustration-what-made-ink-pencil-paper-then-135192386.jpg"
      alt=""
    />
  </Grid>

  <Grid item>
    <Typography className={classes.serviceHeader}>
      Sirkelsagblad
    </Typography>
    <br/>
    <Grid container className={classes.innerContainer}>
    <Typography>Skreddersyr etter ønsker og behov</Typography>
    <ul>
      <li>Tilpasser</li>
      <li>Problemløsere</li>
      <li>Kompetanse</li>
      <li>Finish</li>
      <li>Standtid</li>
      <li>Klyvsagblad</li>
      <li>Kappsagblad</li>
    </ul>
</Grid>
    <Button
      className={classes.btn}
      variant="outlined"
      color="customOrange"
    >
      Les mer
    </Button>

   
  </Grid>
</Grid>

<Grid className={classes.bandsawContainer} container>
<Grid item>
    <img
      className={classes.bandsawIllustration}
      src="https://www.spectrummachinetools.com/wp-content/uploads/2019/02/Band-Saw-Blade.jpg"
      alt=""
    />
  </Grid>
  <Grid item>
    <Typography className={classes.serviceHeader}>
      Båndsagblad
    </Typography>
    <br />
    <Grid className={classes.innerContainer} container>
      <Typography>
        Stridsbergs Norge A/S har ett automatisk rettesenter som
        planerer, strekker og retter båndsdagblad med stor
        nøyaktighet.
      </Typography>
      <br />
      <Typography>
        Helautomatisk pålegg av stellit, som er høylegert verktøystål.
        Dette er noe som øker standtiden betraktelig.
      </Typography>
    </Grid>
    <Button className={classes.btn}>Les mer</Button>
  </Grid>

</Grid>

<Grid className={classes.knifeContainer} spacing={10} container>
  <Grid item>
    <img
      className={classes.knifeIllustration}
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBAVFhUXFxAVFRUVFRUVFhgVFRIWFhUYFhUYHSggGBolHRUVITEhJSorLi4uFx8zODMtNyotLisBCgoKDg0NFQ8PFSsZFRkrKysrKystKysrKystKysrKystKystNy0rLSstKystLS0rNzcrLTctKy0rKy0rLSstK//AABEIALQBGAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAgMEB//EAEQQAAEDAgMFBQQHBgQGAwAAAAEAAgMEEQUSIQYxQVFxEyJhgZEjMjRSFEJTYnKSoTNDgrHR8BUWk8EHJGNzg7JkouH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAbEQEBAQACAwAAAAAAAAAAAAAAEQESMQIhUf/aAAwDAQACEQMRAD8A+4oiICIiAiIgIiICKOxzGoaSLtZ3EC7WgNGZznHcGtG88fIqHG3UBuRT1ZANiRTPIBsDY23GxB8xzQWlFVTtxH9WirndKVw/9yFzqNuMjHSOw6sa1updI2Jjd9hr2hNzcaWugtyKq/5vfGL1WH1MTd5eAJWtG+7y33dFLYZtFSVBAgqI3OOobez/AMjrH9EEoiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC1e8AEuIAAJJJsABvJPJbL51tzjn0iV1FG/LDEA6rkBtfS4hB6au9OBCGPJW17q+qEsYvGwuipGnc5x/aTuG/KLejedld6KkbDE2Jm4A6ne4nVzneJJJPVROzOG9mO0c3K9zQA37OMHusA4HcXeNh9UKaedVGjsgeKisGpxWSipdf6PG4/RmHc97SQahw463DAd1i7eQuNe51XMaKMkRtDTVyDQhp1bA0/M8e8eDeqtkEbWtDWNDWtADQBYAAWAA4BE1uoTGNmqSoHtYGX3h7RkeDzD22Propsri8FVFZhw3EKf4erE7Buiqh3reE7dSeosvQ3avstK2lmpzxfbtYf9Rn9FPRrsAg8tBiUMwvDKx4+64EjqN48161DV2y1HKczoGh3zx3jdfndhGq8TsIq4Pha4ub9nVN7UdBK2zwPVBZkVbO0c0PxlFIB9pT+3j6kCz2jq1SOF7QUtTpBUMe7fkvZ/5DZ36IJNERAREQEREBERAREQEREBERAREQEREBERARFzqJ2sa573BrWgucTuAAuSUEDtrtAaSG0QzTyksgb97i8/dbe/oFVNkMEF+8cwY7M9x/e1Bs4l19+XQ682a6Fawvkrqk1BBBfdlO1wv2cLfekcPO9ubgL6hXahoGxsEcYsGg79++5JPEkkknmVGuiN3e3qP2jr3whjIQHVEzuzgYd17d57/uMGpPQcV7aiZkDXSzOAYwFzj4D+Z4AdFy2ZoXuJrKltppRZrD+5h3sjHI7i7x6IPVgGEtpYezDi9xLnyyO96SV+r3n+9AApJhXSywAqyytHFdFykagy1dAuMa7IC5yBdFq5BxaFWNpmtp6qnrnRAxs7SOZwbcs7QAMl01NtRfk7xVqAWTGCCCAQQQQdQQd4I4qBBM17Q9jg5pAIc03BB4gjeuirkuzTobuw6bsCbkxOGeBx55D7h8W+iw3Fq6Af8ANUfaNG+Skdn8zC+zvS6osiKKw3aKlnNo52Zvs3HJIDxBY6x/RSqAiIgIiICIiAiIgIiICIiAiIgIiICoe3mJ9tI2iY7uNtLVEHQNGrIyfH3iOQCse1ONikgLwM0jiGRM+aR27yG8/wD6qjsxhBLi6R2Y5u0lcf3kx735W3B/L4hTVzE9gND2bc7m2e8Du/Iwe4y3A63PibagBWKnbYePFeSJvH+7qO2gxB/dpKc2qJ7gH7KLdJKeVhcDmeiLrxhv0+p/+JTyDXhPUM4eMbD6nnbS2hebD6FkETIYhZjGhoHTieZJ1J5legKst1gFFjKg2XKRdAVzlKDVhXVpXNjgV0AUGywVlYVGiAraywWoN0WAsoPBieDU9QLTwMf4uaMw6O3jyKh/8tywa0VbLGOEU3/MQ9Bm77fJys6wUFb/AMZrofiaAyNG+SkeJL/+F9n+l178M2ippzlZKA/jHIDHIP4H2J8lKgLyYhhcE4yzwskHDM0Ejod48kHsRV07NyRfB1ssQG6OT28VuWV/eHk5GYvVwfGUhe0fvqS8jeroT7QeWZBYkUZhuP0s5tDUMc75L5ZB1jdZw8wpNAREQEREBERAREQFzqJ2xtc97g1rQXOJ3AAXJXRUbbrEe1kbRMPdGWSo6b4o/MjMfADmgiJq19XKKgtN3HJTRH6rT9Y+JtmJG4DjwuWHUoY1sbTuGpO8ne5x8SST5qL2bobDtnDVwtGOUZsc3V1gegb4qwxttr/dlG3LFMQZTwulkPdYL2G9x3NaOZJIA6rhsxhj2B09R8RPZ0nJjQO5E3waPU3XgwyL6dMKl/w0Lj9Gb9pI0kGdw5A3DPM6K0NVZ1lwWrVutS1EbgouYW5QZXN7VgErJeoOYC3aSsHVbEIrdpWy5Nct7qoyAhWAVzqqpkTHSSODWNF3OOgAQbgrdVaTbOJ3w9NVVA+aKA5PV5C2i24pQQKhs9MTu+kQvYD/ABC4/VBZ0XlocRhmbmglZIObHB3rbcvSCgLKLCDKxZZRBHYlgdNUft6eN5+YtGcdHjvDyKjv8uSx/CV80Y4MltURjwAf3wP4lYkQVz6RicRvJDT1Df8AoudFJ1yyXaemYLX/ADrTsOWqZNTHQe3ic1t+Qkbdp9VZCtXNuLHdyQcqOuimbmhlZI3mxwcPUFehfMdrqanixGiFNCyKQTQvmkjbkOWSVrGtdl0sRnvzuOa+nICIiAiIg8WMYkymhfNJuaCbcXO+q0eJNgvn2CYe6V7jNq+R3bVB5Bx0j8Afd6B9ty7bQ4kayqyMGaGneQwD97UWsSDybcgeNzuVkw+g7JlvrE5nngXEfyAAA6KNYk4WDed3Af3wURtJM6VzKGE2fMCZXj93Tg2e7q73R1K2xWubTxOmefdF7DeTezWgcybDzXbZnDJIw+eo1qJy10nJjQLMib4NHqb70NTFNA2NjY42hrWgNaBwAFgF2aFqFkIy2RYS6oJZEuoMFc3FdLrQsCLjLStgVzEa2QZc0FcnBw3arrdbBB52vPEH0Vd2ujD56GOUXhfJLnafddI2LNCHc9QdOKs7gvDi+FsqYjFJcA2LXNNnMeNWvYeDgUHKobfQrRkdtL6cWnUHqCqBiezkkGY1jJpman6RFJK8HjmliBzMPiLhdcNpXlualxGfL+MTMHIZXg26FGotVfs3SPdnEJik+0p3GF2u/VlrnqCtI6KuiF6fEBKBa0dXFfT/AL0dnE+NioyPFa6IXljZUN+aOzJOpjvY+RXsw7ayGR2XVr+Mbu5IP/G6xPlcJUiRO0M8XxVBJb56YioZ6aPb5tUnhWN09SLwTNfzbezx+Jhs4eYWsc7Xbjc8jofTevBimB085zSRAu4PF2vHK0jbOHqiRYQsqpRUlbD8PW9o0fu6tmf0nZZ/qCu7NqnRfHUskI+1YDNAfHOwXb/EAqkWVYK89BXxTtzwyskb8zHBwvyNtx8F6EGVzqZ2xsc95s1oLnE8ABcre6p//ECuDuzo81g/205vbLTxG5ueGZwA8iggMKpnVlTG5wOaWVtbL9yGIltOy/j/ACX1FVbYGjPZOqntyvqHZg35YW92Fv5dfMK0ouiIiILxY1BK+CRlO8Mkc0hjjewJ6buOvDevaiD43DS1VE9rKiQ0zWBwZKynbPHZ2hcXZrgm51Ivqd2qtGH4dJUDNFjTpLWJ7MRAi/No1b5q71NO14LXC41668iqFtHslGx4kZeN2uWWI9m8G245eKjXb11uxcsgaf8AEZnOY5j2iRrHx5mm4Jj0v5r1NqsUg/awxVbPmiPYy+N2O0PRqiKXFsRhAaXxVDR9oDHJbgMzdD1K91PtyxulXTSwfe/ax/maL/ohElR7X0rjkle6CT5KhpiI8z3f1VgjcCAWkEHcQbg9CouKamrGd10U7eI7r7dWn3T1UU7ZGNhLqSaamcST7N5LCfvRuuCPDREWshYsqv8ATcTp/wBpFFVsFu9FeKa3EmM3BPg1SGE7T0tQcjZMknGGUdnIDyyneel1UTCXWSFqCoMErAcskXWjhZFdmoVza5bZ0ANWwCxmWQ5ECFhbrFlRi6hMQ2UpJXF4j7KT7WE9k+/MlujvMFTlliyCoz4LWRe46OpaODrQzW5Zh3HeYaomump5LRVUWR5vaOpjDTf/AKbz3XfwlfRQuVXSxytLJY2vad7XtDgfIqRa+dwYa6M3pp5IuTCTLFx+q83G/eCFKN2hmiFqqAOAA9pTku9YXd70J6L3T7GQgk0sslOeTXZ4r+MUlxb8NlG1uF1zN8MdQPmhf2b+pjk08g5GriSw7aOlmNo6hmb5HHI/8j7FSwaRuNl8/rJqa+WrhdHwAqIS0X8HG7fQrpRU/Z96gqMnNgd20RvzjLtOrSChFgxPAQXGamP0eo3tlj7rHn5ZmAWc087X6qW2ZxY1UDZXNDXgvZI0G4bIxxa4fyPmqxTbY2zQ1UXtwBkbAC8TX3CNp1a64sQ7rdWXZbDnwQWlAEkj5ZpA3cHyvLi0HjYEC/gjOpclfJ55jX1JynSrl7NpG8UdOe+4HhnN1cdu8ScyFtPEbTVLuyZzay3tpOjW/wDsFH/8PMPa6SapaPZsApKf/txH2jgeOZ/H7qGLxGwNAAFgAAByA0C2RFUEREBERAXOeFr2lrhcHeF0RBX6vZ46mJw6Ov8Az4qGqqCRhs9lvHQj1V5WHNBFiAR46qRrPLXzKbBIXOzhpjeNz4iY3A8+7pfyXWnqq+n/AGVQKhn2dRcutxyyjW/XRXiowaJ+ti38J/2Ki6zAHi5jIcOR0PlwUi3NR1Nt0xulXTSw/fFpo/NzdR6L3zjD8RbYmGYgaWI7Ro8LWe1Q0kNiQ4EEb2neo+rwaGTV0QDt4e3uuB55hqlOKwR4RXU3wdZ2jB+5qru05Nlb3h4DQLvT7Xsa7s66F9LJuBf3oXfhlGnr6qr0tVX0+kVT2rB9Se7j5SDvfqVN022FPI3sq6Ew30IlAkhceWcC35gFakXCN4cA5rgQdxBBBHgQovaDH4aQN7TM57zZkcYzSO52Fxooluy1OR2lFNJTl1yHU8pMburCS1w8BZZwjAHxTPqKmoNRMQ1jHuaGljBfQAbiSd4/3KJAbYPAu7DK0N4nsrkeNrrvSbbUDzYz9m75ZWujI6ki36r0z4nAw5H1EbXad10jQ70JuFtVUscrbPa17TwcA5vodEWJaKRr2hzHBzTqCCCCPAhGnVU52yEDCXU5lp3/ADQyPZ+hJFvCy1acUhN4546po+pMwRPI8JGbz4uRIu4KZlU4duYm2bW081K69rvaXxX+7Kzf6KepquOYZ4ZWSN5scHettyCQBWSuUZW5KqMogKBBiyOWVglBo5txY6jiDqD5KJqdlKGTV9HDffcMDT6tsplYsg8GGYHTU5vBBHGToXNaMxHIu3lSK1UFttiboaYtjPtZnCCL8UmhPkLm/OyCn4vVunmmqY9SSKKjH3i4hzx1cSb8m2X0PBMNbTQRQM92NrW9SN56k3PmqnsnhzX1F2j2NG3so+Tp3N9q7qGkDq4q8qYuiIiqCIiAiIgIiICIiAiIg4z0rH++xruoB9DwULVbO63if/C7+qsCIubFFrcOkZ77SOF+HqvI+EE9dF9EcAdCo6qwWJ+oblP3d3puUjWeX1RGYaYyXUsz4HHUhtjGT4xnun0WauvxCX2L3xsZvdPDdr3N+UAk5HHeSB/Q2eXBHtvazh4aH0UVVU5bvaR1BCi+tRMeCwAW7Jp4kuGZxJ3kuOpPms/4DE0XiL4Xb80cjxr0JKkqele73WkjwBP8l63UrgO81w6ghFRlPidbD72SqZy0ilA8Ld0+epXvw/aylccsjjA8b45x2TvInQ+q0bH4Ly11EyQZZGBw32cAf5okWywcNQCDz1BH+6g6/Y6lkOeJpgk4SQOMbgfADu/oq5Dhz4fhKmWEfJftI/KN97KTptoquLSembM354HZXW8Ynbz0KqR7Y5sWphb2NawDTMTBOep1Yf5leul24p7hlUySkkP1Z2lrT+GT3SPE2W+HbU0kpydqI36ezmHZO14WdoT0JUxUUzXtLXsa5p3tcA4EHwOiMx6aeVrmhzXBzTqHNIII8CNCul1TzsbEx2ekmlpnb/YvOQn70brgjwFlu2rxOn99kVYwfWZ7Ge3MtPcPQb0It6wQq5h+2tI93ZyPdTy8Y6hpid6nun1Vja8EAggg6gjUEeBVQCOC2WHINCvmeL41208tWBmZBeno27xJM85XvA43cWtB5A8QrXtziToafJCfbTubBF4F5s53k2+vDRV7ZbCWvq2RtHsaFrej6mRvdJG4lrSXeBcouLns3hf0anjiJu4AmR3zSOOaR35if0UmiKoIiICIiAiIgIiICIiAiIgIiICIiAiIgAIiIOcsDXe80HqF4KnBInbrt6G49CpNEFUqNmJPqPaet2/1XE4NO0d6O/4SD+m9XFFIvLVAq6Br+7LG1w5PaDbyO5R0OHSQfCVMsPJl+0i/03/1X0yaFrxZzQR4i6jKvAWO1Ycp9R+uo9Ui8lVp9qKuLSopmytG99O6zupifvPgCpnD9qqSbutnaHcWSXjeDutlfa56XXixDDpIxdzDb5hq314edlGy00UwtJG144Zmg26E7vJRYudRSxytySxte0/Ve0OHoQoZ2ygiuaGpmpjqcrXdpDc84n6fqq9BQTQfB1UkQ+zd7WLyY/3eoUlDtVVQ/FUnaN+0pSXHzid3vMFVNx7m41iFP8VSNnYP3tITnA+9A/Un8JspPCdqaSp0jnaH7jG/uSA8srt56XXPDNoKWp0gnY53yE5ZP9N1nei6YlgtPU2E8DHndcizx0eLOHqiKri1aH1FRWvF46MOghbc6yn9ofxEuaweB8Fadj8JdTU4Ems0jnTTnnLJYkeQs3+FUjZSj7YUtMLljHzVU19bhlRI2JpPG7h/9V9TQ0REVQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFHVOCwv1y5Tzbp+m5SKIK7UYE8e4Q79D/RRs0RGjhY8jorosFoO8KReT5tiGFwzftIw489zh0cNR6pTmtgsKWsc4bhFUDtW+ADvfHRfQvoEV79ky/4W/wBF1ETRuaPQJFqt7BbPPo4Hdtl7aRxc4t1s36rb24anq4qzoirIiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=="
      alt=""
    />
  </Grid>
  <Grid item>
    <Typography className={classes.serviceHeader}>Kniver</Typography>
    <br/>
    <Grid className={classes.innerContainer}>
      <Typography>
        Motstål - Huggkniver - Reduserkniver - Rillestål
      </Typography>
      <br />
      <Typography>Vi sliper kniver inntil 2600mm lengde.</Typography>
      <Typography>
        Kontakt oss for mere info og pris - vi kan hjelpe dere med det
        meste.
      </Typography>
      <Button className={classes.btn}>Les mer</Button>
    </Grid>
  </Grid>
</Grid>

<Grid className={classes.bandsawContainer} spacing={10} container>
<Grid item>
    <img
      className={classes.fresIllustration}
      src="https://images-na.ssl-images-amazon.com/images/I/31tspNtPH%2BL._SL500_AC_SS350_.jpg"
      alt=""
    />
  </Grid>
  <Grid className={classes.innerContainer}>
    <Grid item>
      <Typography className={classes.serviceHeader}>
        Fresere
      </Typography>
      <br />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        deleniti, necessitatibus, ipsum ipsa odit magni ipsam veniam
        voluptas.
      </Typography>
      <Button className={classes.btn}>Les mer</Button>
    </Grid>
  </Grid>
 
</Grid>

<Grid className={classes.servicecarContainer} spacing={4} container>
  <Grid item>
    <img
      className={classes.serviceCarIllustration}
      src="https://thumbs.dreamstime.com/b/cartoon-driver-generic-delivery-van-showing-thumbs-up-cartoon-stick-drawing-conceptual-illustration-driver-fast-131940591.jpg"
      alt=""
    />
  </Grid>
  <Grid className={classes.innerContainer}>
    <Grid item>
      <Typography className={classes.serviceHeader}>
        Servicebil
      </Typography>
      <br />
      <Typography>
        Vi har servicerute som kjører hver 14.dag i følgende områder :
      </Typography>
      <ul>
        <li>Ringeriket</li>
        <li>Sør-Trøndelag</li>
        <li>Telemark/Vestfold/Buskerud</li>
        <li>Akerhus/Østfold</li>
        <li>Gudbrandsdalen</li>
        <li>Sørlandet/Vestfold</li>
      </ul>
      <Button className={classes.btn}>Les mer</Button>
    </Grid>
  </Grid>
</Grid>
</>
 )
   

  return (
    <div className={classes.siteContainer}>
    <Grid container className={classes.imgBackgound}>
    <Grid container className={classes.textBoxContainer}>
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
 
    </Grid>
      <Container className={classes.toolsContainer}>
        <Grid className={classes.gridToolsContainer} container>
         

{matches ? mobile : computer}
        </Grid>
      </Container>
    </div>
  );
};

export default Slipeservice2;
