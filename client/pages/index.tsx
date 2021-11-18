import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session } = useSession()
  if (session) {
    return <>
      Signed in as {session.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    <main className="flex-grow flex flex-col justify-center items-center dark:bg-black">
      <div className="text-2xl sm:text-6xl md:text-9xl">hello World</div>

      Not signed in <br />
    </main>
    <button onClick={() => signIn()}>Sign in</button>
  </>
};

export default Home;
