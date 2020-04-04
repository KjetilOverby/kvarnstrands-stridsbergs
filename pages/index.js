import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div>
      <Header />
      <Home />

      <Footer />
    </div>
  );
}
