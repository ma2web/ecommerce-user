import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  li: {
    display: 'inline-block',
    padding: theme.spacing(2),
    '& a': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      borderBottom: '2px solid transparent',
      display: 'inline-block',
    },
    '& a.active': {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}));

export default useStyles;
