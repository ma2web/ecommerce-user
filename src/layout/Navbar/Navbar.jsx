import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useStyles from './Navbar.styles';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const classes = useStyles();
  const userData = JSON.parse(localStorage?.getItem('user'));
  const navigate = useNavigate();

  return (
    <nav className={classes.root}>
      <div>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink to='/' exact>
              <Typography variant='h6'>خانه</Typography>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink to='/products'>
              <Typography variant='h6'>محصولات</Typography>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink to='/about'>
              <Typography variant='h6'>درباره ما</Typography>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink to='/contact'>
              <Typography variant='h6'>تماس با ما</Typography>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        {userData?.firstName ? (
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Typography
                variant='h6'
                styles={{ cursor: 'pointer' }}
                onClick={() => {
                  localStorage.removeItem('user');
                  navigate('/login');
                }}
              >
                سلام {userData?.firstName}! خروج
              </Typography>
            </li>
          </ul>
        ) : (
          <ul className={classes.ul}>
            <li className={classes.li}>
              <NavLink to='/login'>
                <Typography variant='h6'>ورود</Typography>
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to='/register'>
                <Typography variant='h6'>ثبت نام</Typography>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
