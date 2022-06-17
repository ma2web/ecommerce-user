import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: theme.spacing(5),
  },
  products: {
    width: 80 + '%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  filter: {
    width: 20 + '%',
  },
  product: {
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    width: '33.33%',
  },
  productData: {
    padding: theme.spacing(1),
  },
  formControl: {
    width: 100 + '% !important',
  },
  filterRow: {
    margin: theme.spacing(3, 0),
  },
  [theme.breakpoints.down('md')]: {
    products: {
      width: 100 + '%',
    },
    filter: {
      width: 100 + '%',
    },
    product: {
      paddingRight: theme.spacing(0),
      paddingBottom: theme.spacing(3),
      width: 100 + '%',
    },
  },
}));

export default useStyles;
