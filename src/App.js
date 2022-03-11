import './App.css';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import Layout from './components/Layout.js';

import purple from '@material-ui/core/colors/purple';

const theme = createTheme({
  palette: {
    primary: {
      light: '#b1931c',
      main: '#fed229',
      dark: '#fedb53',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#00f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout/>
      </div>
    </ThemeProvider>
  );
}

export default App;
