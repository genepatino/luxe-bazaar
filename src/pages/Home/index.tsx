import { useEffect } from "react";
import { APIDummy } from "../../services/apiURL";
import { Products } from "../../components/Products";
import { DiscountCard } from "../../components/DiscountCard";
import { useAppDispatch } from "../../redux/hooks";
import { saveProducts, setLoader } from "../../redux/slices/productsDataSlices";

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(APIDummy);
        const data = await response.json();
        if (data.products.length > 0) {
          dispatch(saveProducts(data.products));
          dispatch(setLoader(false));
        } else {
          console.log("Tenemos problemas con la petición");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <>
      <DiscountCard />
      <Products />
    </>
  );
}

export { Home };
