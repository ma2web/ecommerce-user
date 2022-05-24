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
    paddingLeft: theme.spacing(3),
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
}));

export default useStyles;
