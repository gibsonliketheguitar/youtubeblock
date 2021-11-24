import { default as Account } from "@components/ButtonSettings";
import { default as Home } from "@components/ButtonHome";
import { default as Switch } from "@components/darkModeSwitch/DarkModeSwitch";

function TopNav() {
  const position = 'flex flex-row justify-between'
  const style = ''
  return (
    <nav className={`${position} ${style}`}>
      <Home />
      <Switch />
      <Account />
    </nav>
  );
}

export default TopNav;
