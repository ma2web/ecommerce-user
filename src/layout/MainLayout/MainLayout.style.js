import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    minHeight: 'calc(100vh - 118px)',
  },
  back: {
    textAlign: 'left',
  },
  copyRight: {
    textAlign: 'center',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
  },
}));

export default useStyles;
