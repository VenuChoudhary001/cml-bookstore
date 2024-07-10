import { configureStore } from '@reduxjs/toolkit'
import bookStoreReducer from './reducers/book-slice'

export const store = configureStore({
  reducer: {
    bookStore:bookStoreReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch