import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  deleteProduct,
  showShoppingCartPanel,
  updateShoppingCartProduct,
} from "../../redux/slices/productsDataSlices";
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import {
  ShoppingCartDetailsContainer,
  ShoppingContainer,
  TotalButton,
} from "./styled";
import { Button } from "../ReturnProducts/styled";
import { totalProductsPrice } from "../../utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IShoppingCart } from "../../redux/types";

function ShoppingCartPorducts() {
  const [t] = useTranslation("global");

  const shoppingCartProducts = useAppSelector(
    (state) => state.ProductsData.shoppingCartProducts
  );

  const shoppingCartPanel = useAppSelector(
    (state) => state.ProductsData.shoppingCartPanel
  );

  const dispatch = useAppDispatch();

  const decrease = (product: IShoppingCart) => {
    const newProduct = {
      ...product,
      quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity,
    };
    dispatch(updateShoppingCartProduct(newProduct));
  };

  const increase = (product: IShoppingCart) => {
    const newProduct = { ...product, quantity: product.quantity + 1 };
    dispatch(updateShoppingCartProduct(newProduct));
  };

  const deleteProductFromCart = (product: IShoppingCart) => {
    dispatch(deleteProduct(product));
  };

  const closeShoppingCart = () => {
    dispatch(showShoppingCartPanel(false));
  };

  return (
    <ShoppingContainer $display={shoppingCartPanel}>
      <IoCloseCircleSharp className="icon-close" onClick={closeShoppingCart} />
      <div className="list-products-details">
        {shoppingCartProducts.map((product: IShoppingCart) => (
          <ShoppingCartDetailsContainer key={product.id}>
            <AiFillDelete
              className="iconDeleteProduct"
              onClick={() => deleteProductFromCart(product)}
            />
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
            <span>{product.price * product.quantity}$</span>
          </ShoppingCartDetailsContainer>
        ))}
      </div>
      <TotalButton>
        <Link to={"/order-summary"}>
          <Button onClick={() => dispatch(showShoppingCartPanel(false))}>
            {t("shoppingCart.buy-up")}
          </Button>
        </Link>
        <div>
          <span>Total:</span>
          <span>{totalProductsPrice(shoppingCartProducts)}$</span>
        </div>
      </TotalButton>
    </ShoppingContainer>
  );
}

export { ShoppingCartPorducts };
