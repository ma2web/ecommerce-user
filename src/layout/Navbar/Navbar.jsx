import { Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import useStyles from './Navbar.styles';
import ProfileMenu from './ProfileMenu';

const Navbar = () => {
  const classes = useStyles();
  const userData =
    localStorage?.getItem('user') && JSON.parse(localStorage?.getItem('user'));
  const navigate = useNavigate();

  return (
    <nav className={classes.root}>
      <div>
        {window.innerWidth > 768 ? (
          <ul className={classes.ul}>
            <li className={classes.li}>
              <NavLink to='/' exact>
                <Typography variant='body1'>خانه</Typography>
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to='/products'>
                <Typography variant='body1'>محصولات</Typography>
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to='/about'>
                <Typography variant='body1'>درباره ما</Typography>
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to='/contact'>
                <Typography variant='body1'>تماس با ما</Typography>
              </NavLink>
            </li>
          </ul>
        ) : (
          <MobileNavbar />
        )}
      </div>
      <div>
        {userData?.token ? (
          <ProfileMenu firstName={userData?.email} />
        ) : (
          <ul className={classes.ul}>
            <li className={classes.li}>
              <NavLink to='/login'>
                <Typography variant='body1'>ورود</Typography>
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to='/register'>
                <Typography variant='body1'>ثبت نام</Typography>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
