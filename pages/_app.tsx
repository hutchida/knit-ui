import { AppProps } from 'next/app'
import 'knit-hutchida/lib/style.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}