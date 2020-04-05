import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//BlueTheme
const blueThemePrimary = '#303c6c'
const blueThemeSecondary = '#b4dfe5'
//Black Theme
const blackThemePrimary = '#000'
const blackThemeSecondary = '#fff'
//Gray Theme
const greenThemePrimary = '#2c3531'
const greenThemeSecondary = '#d9b08c'
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: greenThemePrimary
    },
    secondary: {
      main: greenThemeSecondary
    },
    error: {
      main: red.A400
    },
    background: {
      default: greenThemePrimary
    },

    myColor: {
      cl: greenThemePrimary
    },
    customWhite: {
      white: '#f4efe8'
    }
  },
  typography: {
    tab: {
      color: greenThemeSecondary,
      fontSize: '1rem',
      marginLeft: '25px',
      fontweight: 600
    
    }
  }
});

export default theme;
