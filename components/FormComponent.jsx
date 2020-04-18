import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Grid, TextField, Button, makeStyles, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
   formContainer: {
     paddingTop: '5rem'
   },
   header: {
     textAlign: 'center',
     paddingTop: '3rem'
   },
   root: {
     '& > *':{
     margin: theme.spacing(1),
     width: '30rem'
     }
   },
   textfields: {
     width: '30rem'
   },
   roots: {
     width: '30rem',
     marginLeft: '.5rem'
   },
   textAboveForm: {
     width: '30rem',
     fontWeight: 600,
     fontStyle: 'italic'
   },
   icon: {
     fontSize: '1rem',
     marginLeft: '1rem'
   }
 
}))

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    telefon: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        telefon: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }
   const classes = useStyles()
  return (
   
    <div style={{background: 'white', height: '70vh'}}>
 
    <Container>
    <Typography className={classes.header} variant='h3'>Kontaktskjema</Typography>
     <Grid alignItems='center' direction='column' className={classes.formContainer} container>
     <Typography className={classes.textAboveForm}>Felt markert med * må fylles ut</Typography>
     <Typography className={classes.textAboveForm}>Avsender får automatisk kopi</Typography>
     <Grid item>
      <form className={classes.root} onSubmit={handleOnSubmit}>
       <Grid item>
        <TextField
        className={classes.textfields}
        variant='outlined'
          label='Navn'
          id="name"
          type="text"
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
        </Grid>
        <Grid item>
        <TextField
        className={classes.textfields}
        variant='outlined'
          label='Email'
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        </Grid>
        <Grid item>
        <TextField
        className={classes.textfields}
        variant='outlined'
          label='Telefon'
          id="telefon"
          type="text"
          onChange={handleOnChange}
          
          value={inputs.telefon}
        />
        </Grid>
        <Grid item>
        
        <TextField
        className={classes.textfields}
        variant='outlined'
        multiline
        rows={10}
        label='Melding'
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        </Grid>
        <Button variant='contained' type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Send'
              : 'Sendt'
            : 'Sender...'}
            <SendIcon className={classes.icon} />
        </Button>
      </form>
      </Grid>
      <Grid item>

      {status.info.error && (
        
        <Alert className={classes.roots} severity="error">{status.info.msg}</Alert>
      )}
      {!status.info.error && status.info.msg && (
        
        <Alert className={classes.roots} severity="success">{status.info.msg}</Alert>
      )}
      </Grid>
      </Grid>
     

     
    </Container>
    
    </div>
    
    
  )
}