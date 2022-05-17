import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyles from './MainLayout.style';

const MainLayout = ({ children, showBack = false }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.root}>
        {showBack && (
          <div className={classes.back}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => navigate(-1)}
            >
              بازگشت
            </Button>
          </div>
        )}
        <div className={classes.main}>{children}</div>
      </div>
      <div className={classes.copyRight}>
        <Typography variant='body2'>
          تمامی حقوق مادی و معنوی این سایت متعلق به شرکت توسعه epetro می باشد.
        </Typography>
      </div>
    </div>
  );
};

export default MainLayout;
