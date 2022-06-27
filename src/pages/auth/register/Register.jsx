import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import MuiAlert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../../../redux/actions/auth';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function Register() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const result = await dispatch(
      authActions.register({
        body: {
          email: data.get('email').toLocaleLowerCase(),
          password: data.get('password'),
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          countryCode: data.get('countryCode'),
          phoneNumber: data.get('phoneNumber'),
        },
      })
    );
    if (result?.data?.message) {
      setError('کاربری با این ایمیل یا شماره از قبل وجود دارد');
      setLoading(false);
    } else {
      navigate('/login');
      setError('عضویت با موفقیت انجام شد');
    }
    setLoading(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(null);
  };

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity='error'>{error}</Alert>
      </Snackbar>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            ساخت حساب کاربری
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='firstName'
              label='نام'
              name='firstName'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='lastName'
              label='نام خانوادگی'
              name='lastName'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='آدرس ایمیل'
              name='email'
              autoComplete='email'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='countryCode'
              label='کد کشور'
              name='countryCode'
              placeholder='98'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='phoneNumber'
              label='شماره تلفن'
              name='phoneNumber'
              placeholder='9121234567'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='رمز عبور'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='مرا به خاطر بسپار'
            />
            <LoadingButton
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              loading={loading}
            >
              عضویت
            </LoadingButton>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to='/login' variant='body2'>
                  از قبل عضو شده اید؟ ورود کنید
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
