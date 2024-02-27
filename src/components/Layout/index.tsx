import { DiscountBar } from "../DiscountBar";
import { Navbar } from "../Navbar";
import { LayoutContainer } from "./styled";

type Props = {
  children: string | any | null;
};

function Layout({ children }: Props) {
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
