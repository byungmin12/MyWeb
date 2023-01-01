import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/GlobalStyles'
import {Roboto} from "@next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400","700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <main className={roboto.className}>
      <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
