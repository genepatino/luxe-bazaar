import { CardContainer } from "./styled";
import { useAppSelector } from "../../redux/hooks";
import { ReturnProducts } from "../ReturnProducts";

function Cards() {
  const products = useAppSelector((state) => state.ProductsData.products);
  const category = useAppSelector((state) => state.ProductsData.category);
  const searchProduct = useAppSelector(
    (state) => state.ProductsData.searchProduct
  );

  const returnProducts = () => {
    if (searchProduct !== "") {
      const filterByProductName = products.filter((item) =>
        item.title.toLowerCase().includes(searchProduct.toLowerCase())
      );
      return <ReturnProducts arr={filterByProductName} />;
    } else if (category !== "/") {
      const filterByProductCategory = products.filter((item) =>
        item.category.includes(category)
      );
      return <ReturnProducts arr={filterByProductCategory} />;
    } else {
      return <ReturnProducts arr={products} />;
    }
  };

  return <CardContainer>{returnProducts()}</CardContainer>;
}

export { Cards };
