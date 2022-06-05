import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { authActions } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

export default function AddressForm() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [userState, setUserState] = React.useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    countryCode: user.countryCode,
    phoneNumber: user.phoneNumber,
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserState({
      ...userState,
      [event.target.name]: event.target.value,
    });
  }

  const handleClick = () => {
    dispatch(authActions.updateProfile({ body: userState, id: user._id }));
    let newUser = {
      ...userState,
      _id: user._id,
      token: user.token,
    }

    localStorage.setItem('user', JSON.stringify(newUser));
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="نام"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={userState?.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="نام خانوادگی"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={userState?.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="ایمیل"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={userState?.email}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="countryCode"
            name="countryCode"
            label="کد کشور"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={userState?.countryCode}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="شماره همراه"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={userState?.phoneNumber}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
            onClick={handleClick}
          >
            ثبت تغییرات
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}