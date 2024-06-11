import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

export default function Navbar() {
  console.log("Nav bar rendered");
  return (
    <>
      <NavLinks />
      <NavSearch />
    </>
  );
}
