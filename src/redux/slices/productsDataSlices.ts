import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state



// Define the initial state using that type
const initialState = {
  products: [
    {
      id: 0,
      title: "",
      description: "",
      price: "",
      category: "",
      rating: 0,
      stock: 0,
      brand: "",
      images: [],
    }],
  esLangActive: false,
  category: "",
  searchProduct: "",
  shoppingCartProducts: [],
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
  },
})



export const { saveProducts, changeEsToEn, setProductsByCategory, setSearchProduct, setShoppingCartProducts } = ProductsDataSlice.actions
export default ProductsDataSlice.reducer
