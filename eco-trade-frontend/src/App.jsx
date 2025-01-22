import React from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4', // Cambia il colore primario
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
