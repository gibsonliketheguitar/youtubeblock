import { useSession, signIn, signOut } from "next-auth/react";

function Client() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Sign in as {session.user.emal} <br />
        <button onClick={() => signOut()}> Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}> Sign In </button>
    </>
  );
}
