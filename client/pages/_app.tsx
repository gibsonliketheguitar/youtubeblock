import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import AppLayout from '@layout/AppLayout'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme='light' attribute='class'>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
