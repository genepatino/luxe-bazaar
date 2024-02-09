import { NavLink, Link } from "react-router-dom";

import Logo from "../../../images/LB.png";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { NavbarContainer, SearchInput } from "./styled";

const leftNavbarList = [
  { to: "/clothes", name: "Clothes" },
  { to: "/shoes", name: "Shoes" },
  { to: "/jewelry", name: "Jewelry" },
  { to: "/furniture", name: "Furniture" },
  { to: "/electronics", name: "Electronics" },
  { to: "/miscellaneous", name: "Miscellaneous" },
];

function Navbar() {
  return (
    <NavbarContainer>
      <div className="container">
        <figure>
          <Link to="/">
            <img src={Logo} alt="logo luxe bazaar" />
          </Link>
        </figure>
        <ul>
          {leftNavbarList.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <form className="container rigth">
        <SearchInput placeholder="Search product" />
        <FiSearch className="search-icon" />
        <div>
          <IoCartOutline className="cart-icon" />
          <span>Cart</span>
        </div>
      </form>
    </NavbarContainer>
  );
}

export { Navbar };
