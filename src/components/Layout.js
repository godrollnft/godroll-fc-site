//https://mui.com/getting-started/templates/album/
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import logo from '../assets/logo-foreverdao-400x400.jpg';
import vidShape from '../assets/3094.3748ff8d.mp4';

import ReactPlayer from 'react-player'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://godroll.co/" target="_blank">
        A God Roll Bros project
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(2),
    align: 'left',
    color: 'black',
  },
  logo: {
    maxWidth: 160,
  },
  heroContent: {
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: '#fed229',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
// #fed229; YELLOW

class ResponsivePlayer extends React.Component {
  render () {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={vidShape}
          width='100%'
          height='100%'
          playing={true}
          loop='true'
          muted={true}
        />
      </div>
    )
  }
}

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" color="inherit" color="textSecondary" noWrap style={{ align: 'left', flex: 1 }} >
            &nbsp;
          </Typography>

          <Link href="https://twitter.com/foreverdao_" target="_blank" title="Open ForeverDAO Twitter" >
            <TwitterIcon color="textSecondary" className={classes.icon} />
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <img src={logo} alt="ForeverDAO logo" className={classes.logo} />
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              ForeverDAO
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Welcome to the future of charity.  We are building a project that will change the way people think about evolving the world.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={12} sm={6} md={6} >
              <ResponsivePlayer />
            </Grid>
            <Grid item item xs={12} sm={6} md={6} >
              <Typography variant="h4" align="center" gutterBottom>
                ForeverShapes
              </Typography>
              <Typography variant="h5" align="center" gutterBottom>Concept 💡</Typography>
              <p>Create a quality generative art collection for Solana.
              Balanced styles, patterns, colors, and rarities.
              Decent roadmap, benefits for holders.</p>

              <Typography variant="h5" align="center" gutterBottom>Result ✨</Typography>
              <p>60FPS, Seamless Looping,
              10 Second, Generative Art.</p>
              <Button variant="contained" color="primary" href="https://shapes.foreverdao.org/">View Project / Mint</Button>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Before you go...
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Learn more about the creators!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
