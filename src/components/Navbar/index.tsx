import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/LB.png";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { NavbarContainer, SearchInput } from "./styled";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [t] = useTranslation("global");

  const leftNavbarList = [
    { to: "/clothes", name: t("layout.navbar.clothes") },
    { to: "/shoes", name: t("layout.navbar.shoes") },
    { to: "/jewelry", name: t("layout.navbar.jewelry") },
    { to: "/furniture", name: t("layout.navbar.furniture") },
    { to: "/electronics", name: t("layout.navbar.electronics") },
    { to: "/miscellaneous", name: t("layout.navbar.miscellaneous") },
  ];

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
      <div className="container rigth">
        <form>
          <SearchInput placeholder="Search product" />
          <FiSearch className="search-icon" />
        </form>
        <div>
          <IoCartOutline className="cart-icon" />
          <span>{t("layout.navbar.shopCart")}</span>
        </div>
      </div>
    </NavbarContainer>
  );
}

export { Navbar };
