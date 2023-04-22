import { configureStore } from '@reduxjs/toolkit'
import jahrgangReducer from './jahrgangSlice'
import ebenenReducer from './ebenenSlice'
import wheelScaleReducer from './wheelScaleSlice'

export const store = configureStore({
  reducer: {
    jahrgang: jahrgangReducer,
    ebene: ebenenReducer,
    wheelScale: wheelScaleReducer,
    //users: usersReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch