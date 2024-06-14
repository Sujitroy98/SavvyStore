import { Link } from "react-router-dom";
import SearchBar from "../footer/searchBar/SearchBar";

function Navbar() {
  // navList Data
  const navList = (
    <ul className="text-md flex space-x-3 px-5 font-medium text-[#102742]">
      {/* Home */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {/* All Product */}
      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>
      {/* Signup */}
      <li>
        <Link to={"/signup"}>Signup</Link>
      </li>
      {/* User */}
      <li>
        <Link to={"/"}>Kamal</Link>
      </li>
      {/* Admin */}
      {/* <li>
            </li> */}
      {/* logout */}
      {/* <li>
            </li> */}
      {/* Cart */}
      <li>
        <Link to={"/cart"}></Link>
      </li>
    </ul>
  );
  return (
    <nav className="sticky top-0 bg-[#ACE1AF]">
      {/* main  */}
      <div className="items-center py-3 lg:flex lg:justify-between lg:px-3">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="text-center text-2xl font-bold tracking-widest text-[#102742]">
              SavvyStore
            </h2>
          </Link>
        </div>
        {/* right  */}
        <div className="right mb-4 flex justify-center lg:mb-0">{navList}</div>
        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
