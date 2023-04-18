import jahrgangReducer from '../redux/jahrgangSlice'
import wheelScaleReducer from '../redux/wheelScaleSlice'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    jahrgangReducer: jahrgangReducer,
    wheelScaleReducer: wheelScaleReducer
})
export default allReducers