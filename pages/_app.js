import MovieContextProvider from '@/context/MovieContextProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MovieContextProvider>
      <Component {...pageProps} />
    </MovieContextProvider>
    
  )
}
