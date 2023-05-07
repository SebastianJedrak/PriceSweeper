import BackgroundImg from "./BackgroundImg";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import StoresList from "./StoresList";

export default function Header() {
  return (
    <>
      <BackgroundImg>
        {" "}
        <Nav />
        <Logo />
        <Search />
        <StoresList/>
      </BackgroundImg>
    </>
  );
}
