import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  showShoppingCartPanel,
  updateShoppingCartProduct,
} from "../../redux/slices/productsDataSlices";
import { IoCloseCircleSharp } from "react-icons/io5";
import {
  ShoppingCartDetailsContainer,
  ShoppingContainer,
  TotalButton,
} from "./styled";
import { Button } from "../ReturnProducts/styled";
import { totalProductsPrice } from "../../utils";
import { useTranslation } from "react-i18next";

function ShoppingCartPorducts() {
  const [t] = useTranslation("global");

  const shoppingCartProducts = useAppSelector(
    (state) => state.ProductsData.shoppingCartProducts
  );

  const shoppingCartPanel = useAppSelector(
    (state) => state.ProductsData.shoppingCartPanel
  );

  const dispatch = useAppDispatch();

  const decrease = (product) => {
    const newProduct = {
      ...product,
      quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity,
    };
    dispatch(updateShoppingCartProduct(newProduct));
  };

  const increase = (product) => {
    const newProduct = { ...product, quantity: product.quantity + 1 };
    dispatch(updateShoppingCartProduct(newProduct));
  };

  const closeShoppingCart = () => {
    dispatch(showShoppingCartPanel(false));
  };

  return (
    <ShoppingContainer $display={shoppingCartPanel}>
      <IoCloseCircleSharp className="icon-close" onClick={closeShoppingCart} />
      {shoppingCartProducts.map((product) => (
        <ShoppingCartDetailsContainer key={product.id}>
          <div>
            <img src={product.images[0]} alt={product.title} />
            <span>{product.title}</span>
          </div>
          <div className="quantity">
            <p className="button" onClick={() => decrease(product)}>
              -
            </p>
            <p>{product.quantity}</p>
            <p className="button" onClick={() => increase(product)}>
              +
            </p>
          </div>
          <span>{product.price}$</span>
        </ShoppingCartDetailsContainer>
      ))}
      <TotalButton>
        <Button>{t("shoppingCart.buy-up")}</Button>
        <div>
          <span>Total:</span>
          <span>{totalProductsPrice(shoppingCartProducts)}</span>
        </div>
      </TotalButton>
    </ShoppingContainer>
  );
}

export { ShoppingCartPorducts };
