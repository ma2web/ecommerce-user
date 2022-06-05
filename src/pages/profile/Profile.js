import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      ePetro{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Profile() {

  return (
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" style={{marginBottom: 30}}>
            ویرایش پروفایل
          </Typography>
          <React.Fragment>
            <AddressForm />
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
  )};