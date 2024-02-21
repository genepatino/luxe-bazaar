import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/LB.png";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import {
  Container,
  NavbarContainer,
  SearchInput,
  ProductsPanelContainer,
} from "./styled";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setProductsByCategory,
  setSearchProduct,
} from "../../redux/slices/productsDataSlices";
import { ShoppingCartPorducts } from "../ShoppingCartPorducts";

function Navbar() {
  const [t] = useTranslation("global");
  const product = useAppSelector((state) => state.ProductsData.searchProduct);
  const dispatch = useAppDispatch();

  const leftNavbarList = [
    { to: "/groceries", name: t("layout.navbar.groceries") },
    { to: "/home-decoration", name: t("layout.navbar.home") },
    { to: "/skincare", name: t("layout.navbar.skincare") },
    { to: "/fragrances", name: t("layout.navbar.fragrances") },
    { to: "/smartphones", name: t("layout.navbar.smartphones") },
    { to: "/laptops", name: t("layout.navbar.laptops") },
  ];

  return (
    <Container>
      <NavbarContainer>
        <div className="container">
          <figure>
            <Link to="/" onClick={() => dispatch(setProductsByCategory("/"))}>
              <img src={Logo} alt="logo luxe bazaar" />
            </Link>
          </figure>
          <ul>
            {leftNavbarList.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  onClick={() =>
                    dispatch(setProductsByCategory(item.to.slice(1)))
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
              onChange={(e) => dispatch(setSearchProduct(e.target.value))}
            />
            <FiSearch className="search-icon" />
          </form>
          <div>
            <span>{t("layout.navbar.shopCart")}</span>
            <IoCartOutline className="cart-icon" />
          </div>
        </div>
      </NavbarContainer>
      <ProductsPanelContainer>
        <ShoppingCartPorducts />
      </ProductsPanelContainer>
    </Container>
  );
}

export { Navbar };
