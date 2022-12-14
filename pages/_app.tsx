import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return ( <ThemeProvider theme={{}} >
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>)
}
