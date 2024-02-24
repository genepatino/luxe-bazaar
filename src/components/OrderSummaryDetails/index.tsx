import { useTranslation } from "react-i18next";
import { Container, BillingDetails } from "./styled";
import { totalProductsPrice } from "../../utils";
import { useAppSelector } from "../../redux/hooks";
import { BsCreditCard } from "react-icons/bs";
import visa from "../../images/visa-mastercard.png";
import { Button } from "../ProductDetails/styled";
import { Link } from "react-router-dom";

function OrderSummaryDetails() {
  const [t] = useTranslation("global");
  const shoppingCartProducts = useAppSelector(
    (state) => state.ProductsData.shoppingCartProducts
  );
  return (
    <Container>
      <h2>{t("shoppingCart.order-summary")}</h2>
      <BillingDetails>
        <div className="price-visa">
          <div className="price">
            <span>
              <i>${totalProductsPrice(shoppingCartProducts)}</i>
            </span>
            <span>
              <i>,00</i>
            </span>
          </div>
          <div className="visa">
            <BsCreditCard className="icon-visa" />
            <div>
              <p>{t("shoppingCart.installments")}</p>
              <figure>
                <img src={visa} alt="tarjeta visa" />
              </figure>
            </div>
          </div>
        </div>
        <div className="delivery">
          <span>{t("shoppingCart.shipping")}</span>
          <span>{t("shoppingCart.shipping-times")}</span>
          <a href="#">{t("shoppingCart.calculate-arrives")}</a>
        </div>
        <div className="buttonContainer">
          <Button $width={180}>{t("shoppingCart.buy-up")}</Button>
          <Link to="/">
            <Button $width={180}>{t("shoppingCart.keep-buying")}</Button>
          </Link>
        </div>
      </BillingDetails>
    </Container>
  );
}

export { OrderSummaryDetails };
