import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state



// Define the initial state using that type
const initialState = {
  products: [],
  esLangActive: false,
  category: "",
  searchProduct: "",
  shoppingCartProducts: [],
  shoppingCartPanel: false,
}

export const ProductsDataSlice = createSlice({
  name: 'ProductsData',
  initialState,
  reducers: {
    saveProducts: (state, action) => {
      state.products = action.payload
    },
    changeEsToEn: (state) => {
      state.esLangActive = !state.esLangActive
    },
    setProductsByCategory: (state, action) => {
      state.category = action.payload
    },
    setSearchProduct: (state, action) => {
      state.searchProduct = action.payload
    },
    setShoppingCartProducts: (state, action) => {
      state.shoppingCartProducts.push(action.payload)
    },
    updateShoppingCartProduct: (state, action) => {
      const findIndexProduct = state.shoppingCartProducts.findIndex((item) => item.id === action.payload.id)
      state.shoppingCartProducts.splice(findIndexProduct, 1, action.payload)
    },
    showShoppingCartPanel: (state, action) => {
      state.shoppingCartPanel = action.payload
    },
  },
})



export const { saveProducts, changeEsToEn, setProductsByCategory, setSearchProduct, setShoppingCartProducts, updateShoppingCartProduct, showShoppingCartPanel } = ProductsDataSlice.actions
export default ProductsDataSlice.reducer
