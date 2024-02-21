export const totalProductsPrice = (arr) => {
  const totalPrice = arr.reduce((acum, product) => acum + (product.price * product.quantity), 0)
  return Number(totalPrice.toFixed(2))
}