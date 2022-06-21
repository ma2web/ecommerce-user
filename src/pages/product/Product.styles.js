import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: theme.spacing(5),
  },
  product: {},
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    padding: theme.spacing(2),
  },
  name: {
    marginBottom: theme.spacing(5),
    color: theme.palette.secondary.main,
  },
  price: {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(2),
  },
  description: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
  },
  store: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  storeTitle: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1) + ' !important',
  },
  storeOwner: {
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    '& svg': {
      marginLeft: theme.spacing(1),
    },
  },
  storePhone: {
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginLeft: theme.spacing(1),
    },
  },
  category: {
    marginBottom: theme.spacing(1),
    '& span': {
      color: theme.palette.text.secondary,
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  },
  filter: {
    marginBottom: theme.spacing(1),
    '& span': {
      color: theme.palette.text.secondary,
      cursor: 'pointer',
      display: 'inline-block',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  },
  subFilter: {
    '& span': {
      color: theme.palette.text.secondary,
      cursor: 'pointer',
      display: 'inline-block',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  },
  slider: {
    display: 'flex',
    '& img': {
      width: 150,
      height: 150,
      cursor: 'pointer',
    }
  },
  [theme.breakpoints.down('md')]: {
    root: {
      display: 'block',
    },
  },
}));

export default useStyles;
