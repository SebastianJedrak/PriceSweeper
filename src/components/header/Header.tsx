import BackgroundImg from "./BackgroundImg";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";

export default function Header() {
  return (
    <>
      <BackgroundImg>
        {" "}
        <Nav />
        <Logo />
        <Search />
      </BackgroundImg>
    </>
  );
}
