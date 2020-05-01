import React, { useState } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import {
  Container,
  Grid,
  TextField,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';
import ContactUs from '../ContactUs';

const useStyles = makeStyles((theme) => ({
 
  formContainer: {
    width: '55em',
    margin: '10rem 0 0 25em',
    [theme.breakpoints.between(1900, 1990)]: {
    marginLeft: '10em'
    },
    [theme.breakpoints.down('lg')]: {
     width: '40em',
     marginLeft: '10em',
     marginTop: '6em'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '5em',
      marginTop: '6em',
      marginBottom: '7em',
      width: '30em'
    },
    [theme.breakpoints.down('sm')]: {
       marginTop: 0
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '1em',
      width: '25em'
    },
    [theme.breakpoints.down(350)]: {
     width: '20em'
    },
   
  },
  textfields: {
    width: '45rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('lg')]: {
      width: '40em'
    },
    [theme.breakpoints.down('md')]: {
       width: '30em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '25em'
    },
    [theme.breakpoints.down(350)]: {
      width: '20em'
     },
  },
   header: {
     marginBottom: '3rem',
     [theme.breakpoints.between(1900, 1990)]: {
      fontSize: '1.8rem',
     
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem'
    },
    
   },
   icon: {
     marginLeft: '1rem',
     fontSize: '1rem'
   },
  btn: {
    width: '100%'
  },
   info: {
     marginTop: '1rem'
   }
  
}));

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    telefon: '',
    message: '',
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        telefon: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };
  const classes = useStyles();
  return (
    <Grid direction='row' container className={classes.formMainContainer}>


   <Grid item>
     <ContactUs />
   </Grid>


      <Grid
        alignItems="flex-end"
        direction="column"
        className={classes.formContainer}
        item
        container
        
      >
        <Grid className={classes.contactFormContainer} item>
          <Typography className={classes.header} variant="h3">
            Kontaktskjema
          </Typography>
          <Typography className={classes.textAboveForm}>
            Felt markert med * må fylles ut
          </Typography>
          <Typography className={classes.textAboveForm}>
            Avsender får automatisk kopi
          </Typography>
          <Grid item>
            <form className={classes.root} onSubmit={handleOnSubmit}>
              <Grid item>
                <TextField
                  className={classes.textfields}
                  variant="outlined"
                  label="Navn"
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
                  variant="outlined"
                  label="Email"
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
                  variant="outlined"
                  label="Telefon"
                  id="telefon"
                  type="text"
                  onChange={handleOnChange}
                  value={inputs.telefon}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.textfields}
                  variant="outlined"
                  multiline
                  rows={10}
                  label="Melding"
                  id="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                />
              </Grid>
              <Button
                variant="contained"
                type="submit"
                disabled={status.submitting}
                className={classes.btn}
              >
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
              <Alert className={classes.info} severity="error">
                {status.info.msg}
              </Alert>
            )}
            {!status.info.error && status.info.msg && (
              <Alert className={classes.info} severity="success">
                {status.info.msg}
              </Alert>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
