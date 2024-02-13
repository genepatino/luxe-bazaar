import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/LB.png";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { NavbarContainer, SearchInput } from "./styled";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getProductsByCategory,
  nameOfProduct,
} from "../../redux/slices/productsDataSlices";

function Navbar() {
  const [t] = useTranslation("global");
  const product = useAppSelector((state) => state.ProductsData.productByName);
  const dispatch = useAppDispatch();

  const leftNavbarList = [
    { to: "/groceries", name: t("layout.navbar.groceries") },
    { to: "/home-decoration", name: t("layout.navbar.home") },
    { to: "/skincare", name: t("layout.navbar.skincare") },
    { to: "/fragrances", name: t("layout.navbar.fragrances") },
    { to: "/womens-jewellery", name: t("layout.navbar.jewellery") },
    { to: "/smartphones", name: t("layout.navbar.smartphones") },
    { to: "/laptops", name: t("layout.navbar.laptops") },
  ];

  return (
    <NavbarContainer>
      <div className="container">
        <figure>
          <Link to="/" onClick={() => dispatch(getProductsByCategory("/"))}>
            <img src={Logo} alt="logo luxe bazaar" />
          </Link>
        </figure>
        <ul>
          {leftNavbarList.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                onClick={() =>
                  dispatch(getProductsByCategory(`/category${item.to}`))
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="container rigth">
        <form>
          <SearchInput
            type="text"
            placeholder={t("layout.navbar.searchProduct")}
            value={product}
            onChange={(e) => dispatch(nameOfProduct(e.target.value))}
          />
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
