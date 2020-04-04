import React from 'react'
import { makeStyles, Container, Grid } from '@material-ui/core'
import ContactCards from './ContactCards'

const useStyles = makeStyles(theme => ({
    contactContainer: {
        width: '100vw',
        background: theme.palette.customWhite.white
    },
    container: {
        maxWidth: '90rem'
    }
}))

const ContactComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.contactContainer}>
            <Container className={classes.container}>
               
                  
                      <ContactCards />
                    
                  
                    
              
            </Container>
        </div>
    )
}

export default ContactComponent
