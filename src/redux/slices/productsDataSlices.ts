import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state



// Define the initial state using that type
const initialState = {
  products: [],
  esLangActive: false,
  category: "",
  productByName: "",
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
    getProductsByCategory: (state, action) => {
      state.category = action.payload
    },
    nameOfProduct: (state, action) => {
      state.productByName = action.payload
    },
  },
})



export const { saveProducts, changeEsToEn, getProductsByCategory, nameOfProduct } = ProductsDataSlice.actions
export default ProductsDataSlice.reducer
