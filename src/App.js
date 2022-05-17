import { TextField, ThemeProvider } from '@mui/material';
import { RTL } from './theme/RTL';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <div className='App'>
          <TextField label='سلام' />
        </div>
      </RTL>
    </ThemeProvider>
  );
}

export default App;
