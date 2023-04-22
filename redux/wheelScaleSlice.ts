import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
type WheelScaleState = {
  value: number
}

// Define the initial state using that type
const initialState: WheelScaleState = {
  value: 1.00
}

export const wheelScaleSlice = createSlice({
  name: 'wheelScale',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 0.1
    },
    decrement: (state) => {
      state.value -= 0.1
    },
    setValue: (state, action: PayloadAction<number>) => {
        state.value = action.payload
      },
  },
})

export const { increment, decrement, setValue } = wheelScaleSlice.actions

//! Other code such as selectors can use the imported `RootState` type
export const selectWheelScale = (state: RootState) => state.wheelScale

export default wheelScaleSlice.reducer