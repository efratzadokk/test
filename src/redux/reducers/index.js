import {combineReducers} from 'redux'
import userReducer from './user.reducer'
import funnelReducer from './funnel.reducer'

export default combineReducers({
    user: userReducer,
    funnel: funnelReducer,
})


