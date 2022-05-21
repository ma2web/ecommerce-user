import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  slider: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  seeAll: {
    marginBottom: theme.spacing(3),
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  categories: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
  category: {
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    width: '25%',
  },
}));

export default useStyles;
