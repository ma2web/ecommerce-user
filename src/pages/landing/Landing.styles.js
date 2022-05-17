import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  seeAll: {
    marginBottom: theme.spacing(3),
    textAlign: 'left',
  },
  products: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
  product: {
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    width: '25%',
  },
}));

export default useStyles;
