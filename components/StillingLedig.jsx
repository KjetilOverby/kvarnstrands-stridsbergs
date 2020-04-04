import React from 'react'
import { makeStyles, Container, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: 'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1531053326607-9d349096d887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
        height: '68vh',
        width: '100vw',
        backgroundSize: 'cover',
    },
    header: {
        color: 'white',
        paddingTop: '10rem'
    }
}))

const StillingLedig = () => {
    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>
            <Container>
                <Typography className={classes.header} variant='h2'>Ledige Stillinger</Typography>
            </Container>
        </div>
    )
}

export default StillingLedig
