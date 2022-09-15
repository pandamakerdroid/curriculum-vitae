import '@styles/globals.scss'
import type { AppProps } from 'next/app'
  // Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
function CurriculumVitae({ Component, pageProps }: AppProps) {

  const THEME = createTheme({
    typography: {
     "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
 });
  
  return  ( 
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>)

}

export default CurriculumVitae;
