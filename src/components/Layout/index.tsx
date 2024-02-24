import { useTranslation } from "react-i18next";
import { DiscountBar } from "../DiscountBar/index";
import { Navbar } from "../Navbar/index";
import { LayoutContainer } from "./styled";

type Props = {
  children: string | any | null;
};

function Layout({ children }: Props) {
  const [t] = useTranslation("global");

  return (
    <LayoutContainer>
      <div className="fixed">
        <DiscountBar />
        <Navbar />
      </div>
      {children}
    </LayoutContainer>
  );
}

export { Layout };
