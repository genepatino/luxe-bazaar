import { IShoppingCartProduct } from "../redux/types"

export const totalProductsPrice = (arr: IShoppingCartProduct[]) => {
  const totalPrice = arr.reduce((acum, product) => acum + (product.price * product.quantity), 0)
  return Number(totalPrice.toFixed(2))
}