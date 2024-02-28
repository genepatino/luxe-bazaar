import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setShoppingCartProducts,
  showShoppingCartPanel,
} from "../../redux/slices/productsDataSlices";
import { Button, ProductCard } from "./styled";
import { useTranslation } from "react-i18next";
import { IProduct, IShoppingCartProduct } from "../../redux/types";

function ReturnProducts({ products }: { products: IProduct[] }) {
  const [t] = useTranslation("global");
  const shoppingCartProducts = useAppSelector(
    (state) => state.ProductsData.shoppingCartProducts
  );
  const dispatch = useAppDispatch();

  const addToCart = (item: IProduct) => {
    const newProduct = { ...item, quantity: 1 };
    dispatch(setShoppingCartProducts(newProduct));
    dispatch(showShoppingCartPanel(true));
  };

  return products.map((item: IProduct) => {
    let selectedProduct = false;
    shoppingCartProducts.some(
      (product: IShoppingCartProduct) =>
        (selectedProduct = product.id === item.id)
    );
    return (
      <ProductCard key={item.id}>
        <Link to={`/product/${item.id}`}>
          <figure onClick={() => dispatch(showShoppingCartPanel(false))}>
            <img src={item.images[0]} alt={item.title} />
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
            onClick={() => addToCart(item)}
          >
            {t("home.add")}
          </Button>
        </div>
      </ProductCard>
    );
  });
}

export { ReturnProducts };
