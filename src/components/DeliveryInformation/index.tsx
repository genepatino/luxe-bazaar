import { useTranslation } from "react-i18next";
import { DeliveryContainer, InputContainer } from "./styled";
import delivery from "../../images/delivery.avif";

function DeliveryInformation() {
  const [t] = useTranslation("global");
  return (
    <DeliveryContainer>
      <div>
        <h2>{t("shoppingCart.delivery")}</h2>
        <div>
          <InputContainer>
            <label htmlFor="name">{t("shoppingCart.name")}</label>
            <input type="text" id="name" placeholder="Génesis Patiño" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="addres">{t("shoppingCart.address")}</label>
            <input type="text" id="addres" placeholder="Los Naranjos" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="city">{t("shoppingCart.city")}</label>
            <input type="text" id="city" placeholder="Caracas" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="country">{t("shoppingCart.country")}</label>
            <input type="text" id="country" placeholder="Venezuela" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">{t("shoppingCart.email")}</label>
            <input type="text" id="email" placeholder="gene1234@gmail.com" />
          </InputContainer>
        </div>
      </div>
      <figure>
        <img src={delivery} alt="delivery image" />
      </figure>
    </DeliveryContainer>
  );
}

export { DeliveryInformation };
