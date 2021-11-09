import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import AppLayout from '@layout/AppLayout'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}

export default MyApp
