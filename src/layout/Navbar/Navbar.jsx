import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useStyles from './Navbar.styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
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
    </nav>
  );
};

export default Navbar;
