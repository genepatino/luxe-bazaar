import { useTranslation } from "react-i18next";
import { DiscountContainer } from "./styled";

function DiscountCard() {
  const [t] = useTranslation("global");
  return (
    <DiscountContainer>
      <aside>
        <h1>
          {t("home.discount")}
          <br />
          {t("home.article")}
        </h1>
        <button>{t("home.buyNow")}</button>
      </aside>
      <figure>
        <img
          src="https://i.pinimg.com/564x/06/a6/e7/06a6e7471e5e9586515b09436cafe095.jpg"
          alt=""
        />
      </figure>
    </DiscountContainer>
  );
}

export { DiscountCard };
