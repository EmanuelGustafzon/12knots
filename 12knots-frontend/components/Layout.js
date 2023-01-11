import { createTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Link,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import jsCookie from 'js-cookie';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '0.8rem',
        fontWeight: 300,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: 'light',
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#E1BF6B',
      },
      secondary: {
        main: '#FFF1DA',
      },
    },
  });
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    jsCookie.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <>
    <div>
    <Head>
      <title>{title ? `${title} - 12 Knots` : '12 Knots'}</title>
      {description && <meta name="description" content={description}></meta>}
    </Head>

      <CssBaseline />
      <AppBar position="static" sx={classes.appbar}>
        <Toolbar sx={classes.toolbar}>
        <Box display="flex" alignItems="center">
              <NextLink href="/" passHref>
                  <Typography sx={classes.brand}>12 Knots</Typography>
              </NextLink>
            </Box>
            <Box>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
            </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={classes.main}>
        {children}
      </Container>
      <Box component="footer" sx={classes.footer}>
        <Typography>All rights reserved. 12 Knots.</Typography>
      </Box>

    </div>
  </>
  );
}