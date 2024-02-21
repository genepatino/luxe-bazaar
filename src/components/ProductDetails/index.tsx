import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { LuCalendarSearch } from "react-icons/lu";
import { BsTruck } from "react-icons/bs";
import {
  Details,
  MainCategory,
  ProductDetailsContainer,
  ProductImage,
  DeliveryContainer,
  Button,
} from "./styled";
import { useTranslation } from "react-i18next";
import { setShoppingCartProducts } from "../../redux/slices/productsDataSlices";

function ProductDetails() {
  const [t] = useTranslation("global");
  const { id } = useParams();
  const numberID = Number(id);
  const [quantity, setQuantity] = useState<number>(1);
  const products = useAppSelector((state) => state.ProductsData.products);
  const shoppingCartProducts = useAppSelector(
    (state) => state.ProductsData.shoppingCartProducts
  );
  const dispatch = useAppDispatch();

  const starRating = (value: number) => {
    const rating = Math.trunc(value);
    const numbers = Array.from({ length: rating }, (_, index) => index + 1);
    return numbers.map((item) => (
      <MdOutlineStarPurple500 key={item} className="icon-rating" />
    ));
  };

  const handleClick = (item: object) => {
    const newProduct = { ...item, quantity: quantity };
    dispatch(setShoppingCartProducts(newProduct));
  };

  const decrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : quantity;
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const foundProduct = products.find((item) => item.id === numberID);

  let selectedProduct = false;

  shoppingCartProducts.some((product) =>
    product.id === foundProduct?.id ? (selectedProduct = true) : undefined
  );

  return (
    <>
      {foundProduct && (
        <MainCategory key={foundProduct.id}>
          <span>{foundProduct.category}</span>
          <span>/</span>
          <span>{foundProduct.brand}</span>
          <ProductDetailsContainer>
            <ProductImage>
              <img src={foundProduct.images[0]} alt={foundProduct.title} />
            </ProductImage>
            <Details>
              <div className="title-product--container">
                <p>{foundProduct.title}</p>
                <p>{foundProduct.description}</p>
                <div>
                  {starRating(foundProduct.rating)}
                  <span>{foundProduct.rating}</span>
                </div>
              </div>
              <div className="suggeted-payments">
                <p>{`$${foundProduct.price} ${t(
                  "productDetails.discount"
                )}`}</p>
                <p>{t("productDetails.suggested")}</p>
              </div>
              <div className="quantity-product">
                <div className="quantity">
                  <p className="button" onClick={decrease}>
                    -
                  </p>
                  <p>{quantity}</p>
                  <p className="button" onClick={increase}>
                    +
                  </p>
                </div>
                <Button
                  $active={selectedProduct}
                  disabled={selectedProduct}
                  onClick={() => handleClick(foundProduct)}
                >
                  {t("home.add")}
                </Button>
              </div>
              <div className="delivery-return">
                <DeliveryContainer>
                  <div className="right">
                    <BsTruck className="icon" />
                    <span>{t("productDetails.free")}</span>
                  </div>
                  <p>{t("productDetails.delivery")}</p>
                </DeliveryContainer>
                <DeliveryContainer>
                  <div className="right">
                    <LuCalendarSearch className="icon" />
                    <span>{t("productDetails.return")}</span>
                  </div>
                  <p>{t("productDetails.return-delivery")}</p>
                </DeliveryContainer>
              </div>
            </Details>
          </ProductDetailsContainer>
        </MainCategory>
      )}
    </>
  );
}

export { ProductDetails };
