import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface JahrgangState {
  value: number
}

// Define the initial state using that type
const initialState: JahrgangState = {
  value: 73
}

export const jahrgangSlice = createSlice({
  name: 'jahrgang',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
        state.value -= action.payload
    },
    setValue: (state, action: PayloadAction<number>) => {
        state.value = action.payload
      },
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount, setValue } = jahrgangSlice.actions

//! Other code such as selectors can use the imported `RootState` type
export const selectJahrgang = (state: RootState) => state.jahrgang

export default jahrgangSlice.reducer