import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  phoneInput: {
    '& input.form-control': {
      width: '100%',
    },
  },
}));

export default useStyles;
