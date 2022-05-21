import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
  },
  categoryName: {
    marginBottom: theme.spacing(2) + ' !important',
  },
}));

export default useStyles;
