import React from 'react'
import { useContext } from 'react'
import Kontaktpersoner from '../contacts/Kontaktpersone'
import { Grid, Card, CardContent, Avatar, makeStyles, Typography } from '@material-ui/core';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    card: {
        margin: '4em 2em',
         
        maxWidth: 380,
        background: theme.palette.customWhite.white,
        border: 'none',
        boxShadow: 'none',
        minHeight: '30em',
        [theme.breakpoints.down('sm')]: {
            margin: '1em 2.5em'
        }
    },
    name: {
        color: 'gray',
        margin: '1.5rem 0 0 1.5rem',
        [theme.breakpoints.down('xs')]: {
            margin: '1.5rem 0 0 0'
        }
        
    },
    title: {
        color: 'orangered',
        fontStyle: 'italic',
        marginLeft: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            margin: '1.5rem 0 0 0'
        } 
    },
   
    contact: {
        color: 'gray',
        margin: '0 0 1rem 1.5rem'
    },
    icon: {
        color: 'orangered'
    },
    descriptionContainer: {
        padding: '2rem 0',
        minHeight: '10rem',
        color: 'gray',
        fontStyle: 'italic',
      
        [theme.breakpoints.down('sm')]: {
           minHeight: '1rem',
           padding: '1rem 0'
        }
        
    }
}))


const ContactCards = () => {
    const classes = useStyles()
    const contacts = useContext(Kontaktpersoner)
    return (
        <Grid container justify='space-around'>
          
            {contacts.map((contact) => 
              <Grid item>
                 <Card className={classes.card}>
                   <CardContent>
                      <Grid container>
                        <Grid item>
                       <Avatar className={classes.large} src={contact.image} />
                       </Grid>
                       <Grid item>
                       <Typography className={classes.name} variant='h6'>{contact.name}</Typography>
                       <Typography className={classes.title} variant='p'>{contact.title}</Typography>
                       
                       </Grid>
                       </Grid>

                       <Grid container>
                           <Grid item>
                           <div className={classes.descriptionContainer}>
                               <Typography >{contact.description}</Typography>
                           </div>
                               <Grid container>
                            
                               <PhoneIcon className={classes.icon} />
                               <Typography className={classes.contact}>{contact.mob}</Typography>
                              
                              
                               </Grid>
                               <Grid container >
                                   <EmailIcon className={classes.icon} />
                                   <Typography className={classes.contact}>{contact.epost}</Typography>
                               </Grid>
                           </Grid>
                       </Grid>
                       
                   </CardContent>
                 </Card>
               </Grid>
            )}
            
        </Grid>
    )
}

export default ContactCards
