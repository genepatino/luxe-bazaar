import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setShoppingCartProducts,
  showShoppingCartPanel,
} from "../../redux/slices/productsDataSlices";
import { Button, ProductCard } from "./styled";
import { FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ReturnProducts({ arr }) {
  const [t] = useTranslation("global");
  const shoppingCartProducts = useAppSelector(
    (state) => state.ProductsData.shoppingCartProducts
  );
  const dispatch = useAppDispatch();

  const handleClick = (item: object) => {
    const newProduct = { ...item, quantity: 1 };
    dispatch(setShoppingCartProducts(newProduct));
    dispatch(showShoppingCartPanel(true));
  };

  return arr.map((item) => {
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

export { ReturnProducts };
