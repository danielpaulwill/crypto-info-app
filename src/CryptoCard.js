import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { CardMedia } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function CryptoCard({ cryptoCoin, isDarkMode }) {

  const changeStatus = Math.sign(cryptoCoin.price_change_percentage_24h_in_currency)

  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(1)
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));
  

  return (
    <Box sx={{ flexGrow: 1 }} className="card" >
      <Grid container spacing={2} >
        <Grid item xs={0} md={2} >
        </Grid>

          <Grid item xs={3} md={2} theme={darkTheme}>
              <img src={cryptoCoin.image} className="thumbnail" />
          </Grid>
          <Grid item xs={3} md={2} theme={darkTheme}>
            <Typography variant="h6" gutterBottom>
              {cryptoCoin.name}
            </Typography>
          </Grid>
          <Grid item xs={3} md={2} theme={darkTheme}>
            <Typography variant="h6" gutterBottom>
              {cryptoCoin.symbol.toUpperCase()}
            </Typography>
          </Grid>
          <Grid item xs={3} md={2} theme={darkTheme}>
              <h4>Placeholder 2</h4>
          </Grid>

        <Grid item xs={0} md={2} >
        </Grid>
      </Grid>
    </Box>
  )
};

export default CryptoCard;
