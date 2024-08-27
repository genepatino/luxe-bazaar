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
  saveProductsByCategory,
  setLoader,
  setProductsByCategory,
  setSearchProduct,
  showShoppingCartPanel,
} from "../../redux/slices/productsDataSlices";
import { ShoppingCartPorducts } from "../ShoppingCartPorducts";
import { APIDummy } from "../../services/apiURL";

function Navbar() {
  const [t] = useTranslation("global");
  const product = useAppSelector((state) => state.ProductsData.searchProduct);

  const dispatch = useAppDispatch();

  const leftNavbarList = [
    { to: "/groceries", name: t("layout.navbar.groceries") },
    { to: "/home-decoration", name: t("layout.navbar.home") },
    { to: "/beauty", name: t("layout.navbar.beauty") },
    { to: "/fragrances", name: t("layout.navbar.fragrances") },
    { to: "/smartphones", name: t("layout.navbar.smartphones") },
    { to: "/laptops", name: t("layout.navbar.laptops") },
  ];

  function handleClick(item: string) {
    handleProdudctsByCategory(item);
    saveCategory(item);
  }

  const saveCategory = (item: string) => dispatch(setProductsByCategory(item));
  const handleProdudctsByCategory = async (item: string) => {
    try {
      const response = await fetch(`${APIDummy}/category/${item}`);
      const data = await response.json();
      dispatch(setLoader(true));
      if (data.products.length > 0) {
        dispatch(saveProductsByCategory(data.products));
        dispatch(setLoader(false));
      } else {
        console.log("Tenemos problemas con la petición");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                  onClick={() => handleClick(item.to.slice(1))}
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
          <NavLink
            onClick={() => dispatch(showShoppingCartPanel(false))}
            to={"/order-summary"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <div>
              <span>{t("layout.navbar.shopCart")}</span>
              <IoCartOutline className="cart-icon" />
            </div>
          </NavLink>
        </div>
      </NavbarContainer>
      <ProductsPanelContainer>
        <ShoppingCartPorducts />
      </ProductsPanelContainer>
    </Container>
  );
}

export { Navbar };
