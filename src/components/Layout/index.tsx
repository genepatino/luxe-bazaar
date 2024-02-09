import { useTranslation } from "react-i18next";
import { useState } from "react";
import { LayoutContainer, DiscountBar } from "./styled";
import { PiPhoneIncomingThin } from "react-icons/pi";
import Switch from "react-switch";

type Props = {
  children: string | any | null;
};

function Layout({ children }: Props) {
  const [t] = useTranslation("global");

  const [checked, setChecked] = useState(false);

  const handleChange = (newChecked) => {
    setChecked(newChecked);
  };
  return (
    <LayoutContainer>
      <DiscountBar>
        <div>
          <PiPhoneIncomingThin style={{ fontSize: "1.8rem" }} />
          <span>+0005439160</span>
        </div>
        <p>{t("layout.discount-bar")}</p>
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#bcc3cc"
          offColor="#bcc3cc"
          offHandleColor="#54835d"
          onHandleColor="#54835d"
          checkedIcon={<span className="iconLanguage iconLanguageES">ES</span>}
          uncheckedIcon={
            <span className="iconLanguage iconLanguageEN">EN</span>
          }
          activeBoxShadow="0 0 2px 3px #add1b4"
          width={40}
          height={20}
        />
      </DiscountBar>
      <div>{children}</div>
    </LayoutContainer>
  );
}

export { Layout };
