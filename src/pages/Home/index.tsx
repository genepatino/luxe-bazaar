import { useEffect } from "react";
import { APIDummy } from "../../services/apiURL";
import { Card } from "../../components/Card";
import { DiscountCard } from "../../components/DiscountCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveProducts } from "../../redux/slices/productsDataSlices";

function Home() {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.ProductsData.category);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        if (category === "/") {
          const response = await fetch(APIDummy);
          const data = await response.json();
          dispatch(saveProducts(data.products));
        } else {
          const response = await fetch(APIDummy + category);
          const data = await response.json();
          dispatch(saveProducts(data.products));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, [category]);

  return (
    <>
      <DiscountCard />
      <Card />
    </>
  );
}

export { Home };
