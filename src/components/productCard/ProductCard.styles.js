import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
  },
  price: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(1, 2),
    borderRadius: '0 0 10px 0',
  },
  productName: {
    marginBottom: theme.spacing(2) + ' !important',
  },
  productDescription: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
  },
}));

export default useStyles;
