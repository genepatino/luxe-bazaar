export interface IProductsDataState {
  products: IProduct[],
  productsByCategory: IProduct[],
  esLangActive: boolean,
  category: string,
  searchProduct: string,
  shoppingCartProducts: IShoppingCartProduct[],
  shoppingCartPanel: boolean,
  loader: boolean
}

export interface IProduct {
  id: number,
  title: string,
  description: string,
  price: number,
  rating: number,
  brand: string,
  category: string,
  images: string[],
}

export interface IShoppingCartProduct extends IProduct {
  quantity: number
}