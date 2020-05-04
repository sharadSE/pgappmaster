import {combineReducers} from 'redux'
// import addItemReducer from '../feature/addItem/addItemReducer'
import bedBookingReducer from '../reducer/bedBookingReducer'

const rootReducer = combineReducers({
    bedBook: bedBookingReducer
})


export default rootReducer