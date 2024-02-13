import { useTranslation } from "react-i18next";
import { DiscountBarContainer } from "./styled";
import { PiPhoneIncomingThin } from "react-icons/pi";
import Switch from "react-switch";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeEsToEn } from "../../redux/slices/productsDataSlices";

function DiscountBar() {
  const [t, i18n] = useTranslation("global");
  const translation = useAppSelector(
    (state) => state.ProductsData.esLangActive
  );
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(changeEsToEn());
    if (translation) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }
  };

  return (
    <DiscountBarContainer>
      <div>
        <PiPhoneIncomingThin style={{ fontSize: "1.8rem" }} />
        <span>+0005439160</span>
      </div>
      <p>{t("layout.discount-bar")}</p>
      <Switch
        onChange={handleChange}
        checked={translation}
        onColor="#bcc3cc"
        offColor="#bcc3cc"
        offHandleColor="#54835d"
        onHandleColor="#54835d"
        checkedIcon={<span className="iconLanguage iconLanguageES">ES</span>}
        uncheckedIcon={<span className="iconLanguage iconLanguageEN">EN</span>}
        activeBoxShadow="0 0 2px 3px #add1b4"
        width={43}
        height={21}
      />
    </DiscountBarContainer>
  );
}

export { DiscountBar };
