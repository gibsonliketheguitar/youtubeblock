import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import AppLayout from "@layout/AppLayout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </SessionProvider>
  );
}

export default MyApp;
