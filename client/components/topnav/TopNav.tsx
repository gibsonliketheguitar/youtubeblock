import DarkModeSwitch from "@components/darkModeSwitch/DarkModeSwitch";

function TopNav() {
  return (
    <nav className="flex flex-row justify-end">
      <DarkModeSwitch />
    </nav>
  );
}

export default TopNav;
