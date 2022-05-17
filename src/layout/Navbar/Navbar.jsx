import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './Navbar.styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link to='/'>
            <Typography variant='h6'>خانه</Typography>
          </Link>
        </li>
        <li className={classes.li}>
          <Link to='/products'>
            <Typography variant='h6'>محصولات</Typography>
          </Link>
        </li>
        <li className={classes.li}>
          <Link to='/about'>
            <Typography variant='h6'>درباره ما</Typography>
          </Link>
        </li>
        <li className={classes.li}>
          <Link to='/contact'>
            <Typography variant='h6'>تماس با ما</Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
