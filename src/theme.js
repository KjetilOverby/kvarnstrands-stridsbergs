import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#303c6c'
    },
    secondary: {
      main: '#b4dfe5'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#303c6c'
    },

    myColor: {
      cl: '#303c6c'
    },
    customWhite: {
      white: '#f4efe8'
    }
  },
  typography: {
    tab: {
      color: '#b4dfe5',
      fontSize: '1rem',
      marginLeft: '25px',
      fontweight: 600
    
    }
  }
});

export default theme;
