import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import ContactComponent from '../components/kontakter/ContactComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacts from '../components/contacts/Contacts';
import ContactCards from '../components/kontakter/ContactCards';



const About = () => {
  return (
    <div>
       <Header />
       <ContactCards />
       <Footer />
    </div>
  );
}

export default About
