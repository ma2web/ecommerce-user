import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: theme.spacing(5),
  },
  product: {
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    width: '25%',
  },
}));

export default useStyles;
