import { default as Account } from "@components/ButtonSettings";
import { default as Home } from "@components/ButtonHome";
import { default as Switch } from "@components/darkModeSwitch/DarkModeSwitch";
import { useSession } from "next-auth/react";
import { default as SignIn } from "@components/ButtonSignin";

function TopNav() {
  const { data: session } = useSession()

  const position = 'flex flex-row justify-between'
  const style = ''
  return (
    <nav className={`${position} ${style}`}>
      <Home />
      <Switch />
      {!session ? <SignIn /> : <Account />}
    </nav>
  );
}

export default TopNav;
