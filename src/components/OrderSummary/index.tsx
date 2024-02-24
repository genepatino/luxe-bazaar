import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../redux/hooks";
import { DeliveryInformation } from "../DeliveryInformation";
import { OrderDetails } from "../OrderDetails";
import {
  GlobalContainer,
  GridContainer,
  ProductDetailContainer,
} from "./styled";
import { OrderSummaryDetails } from "../OrderSummaryDetails";

function OrderSummary() {
  const [t] = useTranslation("global");
  const shoppingCartProducts = useAppSelector(
    (state) => state.ProductsData.shoppingCartProducts
  );
  const unique = shoppingCartProducts.map((product) => product.category);
  const uniqueCategory = unique.filter(
    (product, index) => unique.indexOf(product) === index
  );

  return (
    <>
      <GlobalContainer>
        {shoppingCartProducts.length > 0 ? (
          <div className="categories">
            {uniqueCategory.map((category, index) =>
              index === uniqueCategory.length - 1 ? (
                <span key={index}>{category}</span>
              ) : (
                <span key={index}>{category} /</span>
              )
            )}
          </div>
        ) : (
          <div className="categories">
            <p className="noProducts">{t("shoppingCart.no-categories")}</p>
          </div>
        )}
        <GridContainer>
          <div className="leftColumn">
            <ProductDetailContainer>
              <h2>{t("shoppingCart.purchase")}</h2>
              {shoppingCartProducts.length > 0 ? (
                <OrderDetails />
              ) : (
                <p>{t("shoppingCart.no-products")}</p>
              )}
            </ProductDetailContainer>
            <DeliveryInformation />
          </div>
          <OrderSummaryDetails />
        </GridContainer>
      </GlobalContainer>
    </>
  );
}

export { OrderSummary };
