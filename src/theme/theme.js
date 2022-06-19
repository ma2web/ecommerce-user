import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn',
  },
  palette: {
    primary: {
      main: '#ffd333',
    },
    secondary: {
      main: '#3d464d',
    },
    text: {
      secondary: '#3d464d',
    },
    grey: {
      main: '#979797',
    },
  },
});
