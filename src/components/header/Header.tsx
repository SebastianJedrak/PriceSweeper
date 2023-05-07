import BackgroundImg from "./BackgroundImg";
import Logo from "./Logo";
import Search from "./Search";
import StoresList from "./StoresList";

export default function Header() {
  return (
    <>
      <BackgroundImg>
        <Logo />
        <Search />
        <StoresList/>
      </BackgroundImg>
    </>
  );
}
