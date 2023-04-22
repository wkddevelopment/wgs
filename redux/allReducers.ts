import {combineReducers} from 'redux'
import jahrgangReducer from '../redux/jahrgangSlice'
import ebenenReducer from '../redux/ebenenSlice'
import wheelScaleReducer from './wheelScaleSlice'

const allReducers = combineReducers({
    jahrgangReducer: jahrgangReducer,
    ebenenReducer: ebenenReducer,
    wheelScaleReducer: wheelScaleReducer,
})

export default allReducers