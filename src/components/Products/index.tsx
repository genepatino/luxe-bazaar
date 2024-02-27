import { CardContainer } from "./styled";
import { useAppSelector } from "../../redux/hooks";
import { ReturnProducts } from "../ReturnProducts";
import { LoadingSkeleton } from "../LoadingSkeleton";

function Products() {
  const products = useAppSelector((state) => state.ProductsData.products);
  const category = useAppSelector((state) => state.ProductsData.category);
  const loader = useAppSelector((state) => state.ProductsData.loader);
  const searchProduct = useAppSelector(
    (state) => state.ProductsData.searchProduct
  );

  const returnProducts = () => {
    if (category !== "/") {
      const filterByProductCategory = products.filter((item) =>
        item.category?.includes(category)
      );
      if (searchProduct !== "") {
        const filterByProductName = filterByProductCategory?.filter((item) =>
          item.title.toLowerCase().includes(searchProduct.toLowerCase())
        );
        return <ReturnProducts products={filterByProductName} />;
      }
      return <ReturnProducts products={filterByProductCategory} />;
    } else {
      if (searchProduct !== "") {
        const filterByProductName = products.filter((item) =>
          item.title.toLowerCase().includes(searchProduct.toLowerCase())
        );
        return <ReturnProducts products={filterByProductName} />;
      }
      return <ReturnProducts products={products} />;
    }
  };

  return (
    <CardContainer>
      {loader ? <LoadingSkeleton /> : returnProducts()}
    </CardContainer>
  );
}

export { Products };
