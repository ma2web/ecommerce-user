import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './Navbar.styles';

export default function SimpleListMenu({ firstName }) {
  const navigate = useNavigate();
  const classes = useStyles();
  const options = ['لیست علاقه مندی ها', 'ورود به پنل فروشگاه'];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);

    if (index === 0) {
      navigate('/watchlist');
    }
    if (index === 1) {
      window.open(
        `http://45.92.95.60:7070/#/login?token=${
          JSON.parse(localStorage.user).token
        }&userId=${JSON.parse(localStorage.user)._id}&role=admin`,
        '_self'
      );
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.flex}>
      <div>
        <MenuItem onClick={(event) => handleMenuItemClick(event, 1)}>
          ایجاد آگهی
        </MenuItem>
      </div>
      <div>
        <List component='nav' aria-label='Device settings'>
          <ListItem
            button
            id='lock-button'
            aria-haspopup='listbox'
            aria-controls='lock-menu'
            aria-label='profile'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText primary='حساب کاربری' />
          </ListItem>
        </List>
        <Menu
          id='lock-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
          <MenuItem
            onClick={(event) => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            خروج
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
