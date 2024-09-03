import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducer/carrinho'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddlerware) =>
    getDefaultMiddlerware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
