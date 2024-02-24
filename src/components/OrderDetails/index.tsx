import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteProduct } from "../../redux/slices/productsDataSlices";
import { ProductDetailContainer, ProductDetail } from "./styled";
import { AiFillDelete } from "react-icons/ai";

function OrderDetails() {
  const shoppingCartProducts = useAppSelector(
    (state) => state.ProductsData.shoppingCartProducts
  );
  const dispatch = useAppDispatch();

  return (
    <ProductDetailContainer>
      {shoppingCartProducts.map((product) => (
        <ProductDetail key={product.id}>
          <AiFillDelete
            className="delete"
            onClick={() => dispatch(deleteProduct(product))}
          />
          <figure>
            <img src={product?.images[0]} alt={product.title} />
          </figure>
          <div className="details">
            <div>
              <p>{product.title}</p>
              <p>{product.category}</p>
            </div>
            <div>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <div>
              <p>Total:</p>
              <p>{product.quantity && product.quantity * product.price}$</p>
            </div>
          </div>
        </ProductDetail>
      ))}
    </ProductDetailContainer>
  );
}

export { OrderDetails };
