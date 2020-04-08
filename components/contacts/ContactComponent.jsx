import React from 'react'
import { makeStyles, Container, Grid, Typography } from '@material-ui/core'
import ContactCards from '../contacts/ContactCards'

const useStyles = makeStyles(theme => ({
    contactContainer: {
        width: '100vw',
        background: theme.palette.customWhite.white
    },
    container: {
        maxWidth: '90rem'
    },
    header: {
        textAlign: 'center',
        margin: '3rem 0',
        color: 'gray'

    }
}))

const ContactComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.contactContainer}>
        <Typography variant='h4' className={classes.header}>Våre Kontaktpersoner</Typography>
            <Container className={classes.container}>
               
                  
                      <ContactCards />
                    
                  
                    
              
            </Container>
        </div>
    )
}

export default ContactComponent
