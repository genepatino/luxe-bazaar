import { FaHeart } from "react-icons/fa";
import { CardContainer, Cards } from "./styled";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../redux/hooks";

export interface IProducts {
  id: number | null;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: [string];
}

function Card() {
  const [t] = useTranslation("global");
  const products = useAppSelector((state) => state.ProductsData.products);
  const productByName = useAppSelector(
    (state) => state.ProductsData.productByName
  );

  const filterByProductName = products.filter((item: IProducts) =>
    item.title.toLowerCase().includes(productByName.toLowerCase())
  );

  const returnProducts = () => {
    if (filterByProductName.length > 0) {
      return filterByProductName.map((item: IProducts) => (
        <Cards key={item.id}>
          <figure>
            <img src={item.images[0]} alt={item.title} />
            <div>
              <FaHeart className="heart-icon" />
            </div>
          </figure>
          <div className="description-container">
            <div className="title-product">
              <p>{item.title}</p>
              <p>{`${item.price}$`}</p>
            </div>
            <p className="description">{item.description}</p>
            <button>{t("home.add")}</button>
          </div>
        </Cards>
      ));
    } else {
      return products.map((item: IProducts) => (
        <Cards key={item.id}>
          <figure>
            <img src={item.images[0]} alt={item.title} />
            <div>
              <FaHeart className="heart-icon" />
            </div>
          </figure>
          <div className="description-container">
            <div className="title-product">
              <p>{item.title}</p>
              <p>{`${item.price}$`}</p>
            </div>
            <p className="description">{item.description}</p>
            <button>{t("home.add")}</button>
          </div>
        </Cards>
      ));
    }
  };

  return <CardContainer>{returnProducts()}</CardContainer>;
}

export { Card };
