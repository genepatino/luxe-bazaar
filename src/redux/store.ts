import { configureStore } from '@reduxjs/toolkit'
import { ProductsDataSlice } from './slices/productsDataSlices'

export const store = configureStore({
  reducer: {
    ProductsData: ProductsDataSlice.reducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch