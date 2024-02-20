import { FaHeart } from "react-icons/fa";
import { CardContainer, ProductCard, Button } from "./styled";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setShoppingCartProducts } from "../../redux/slices/productsDataSlices";
import { Link } from "react-router-dom";

function Cards() {
  const [t] = useTranslation("global");
  const products = useAppSelector((state) => state.ProductsData.products);
  const shoppingCartProducts = useAppSelector(
    (state) => state.ProductsData.shoppingCartProducts
  );
  const dispatch = useAppDispatch();
  const searchProduct = useAppSelector(
    (state) => state.ProductsData.searchProduct
  );

  const handleClick = (item: object) => {
    const newProduct = { ...item, quantity: 1 };
    dispatch(setShoppingCartProducts(newProduct));
  };

  const returnProducts = () => {
    if (searchProduct !== "") {
      const filterByProductName = products.filter((item) =>
        item.title.toLowerCase().includes(searchProduct.toLowerCase())
      );
      return filterByProductName.map((item) => {
        let selectedProduct = false;
        shoppingCartProducts.some((product) =>
          product.id === item.id ? (selectedProduct = true) : undefined
        );
        return (
          <ProductCard key={item.id}>
            <Link to={`/product/${item.id}`}>
              <figure>
                <img src={item.images[0]} alt={item.title} />
                <div>
                  <FaHeart className="heart-icon" />
                </div>
              </figure>
            </Link>
            <div className="description-container">
              <div className="title-product">
                <p>{item.title}</p>
                <p>{`${item.price}$`}</p>
              </div>
              <p className="description">{item.description}</p>
              <Button
                $active={selectedProduct}
                disabled={selectedProduct}
                onClick={() => handleClick(item)}
              >
                {t("home.add")}
              </Button>
            </div>
          </ProductCard>
        );
      });
    } else {
      return products.map((item) => {
        let selectedProduct = false;
        shoppingCartProducts.some((product) =>
          product.id === item.id ? (selectedProduct = true) : undefined
        );
        return (
          <ProductCard key={item.id}>
            <Link to={`/product/${item.id}`}>
              <figure>
                <img src={item.images[0]} alt={item.title} />
                <div>
                  <FaHeart className="heart-icon" />
                </div>
              </figure>
            </Link>
            <div className="description-container">
              <div className="title-product">
                <p>{item.title}</p>
                <p>{`${item.price}$`}</p>
              </div>
              <p className="description">{item.description}</p>
              <Button
                $active={selectedProduct}
                disabled={selectedProduct}
                onClick={() => handleClick(item)}
              >
                {t("home.add")}
              </Button>
            </div>
          </ProductCard>
        );
      });
    }
  };

  return <CardContainer>{returnProducts()}</CardContainer>;
}

export { Cards };
