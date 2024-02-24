import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, IProductsDataState, IShoppingCartProduct } from '../types'

// Define a type for the slice state

// Define the initial state using that type

const initialState: IProductsDataState = {
  products: [],
  esLangActive: false,
  category: "",
  searchProduct: "",
  shoppingCartProducts: [],
  shoppingCartPanel: false,
  loader: true
}

export const ProductsDataSlice = createSlice({
  name: 'ProductsData',
  initialState,
  reducers: {
    saveProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload
    },
    changeEsToEn: (state) => {
      state.esLangActive = !state.esLangActive
    },
    setProductsByCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setSearchProduct: (state, action: PayloadAction<string>) => {
      state.searchProduct = action.payload
    },
    setShoppingCartProducts: (state, action: PayloadAction<IShoppingCartProduct>) => {
      state.shoppingCartProducts = /* action.payload  */[...state.shoppingCartProducts, action.payload]
    },
    updateShoppingCartProduct: (state, action: PayloadAction<IShoppingCartProduct>) => {
      const findIndexProduct = state.shoppingCartProducts.findIndex((item) => item.id === action.payload.id)
      state.shoppingCartProducts.splice(findIndexProduct, 1, action.payload)
    },
    showShoppingCartPanel: (state, action: PayloadAction<boolean>) => {
      state.shoppingCartPanel = action.payload
    },
    deleteProduct: (state, action: PayloadAction<IShoppingCartProduct>) => {
      const findIndexProduct = state.shoppingCartProducts.findIndex((item) => item.id === action.payload.id)
      state.shoppingCartProducts.splice(findIndexProduct, 1)
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload
    }
  },
})



export const { saveProducts, changeEsToEn, setProductsByCategory, setSearchProduct, setShoppingCartProducts, updateShoppingCartProduct, showShoppingCartPanel, deleteProduct, setLoader } = ProductsDataSlice.actions
export default ProductsDataSlice.reducer
