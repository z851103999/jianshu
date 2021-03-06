import {combineReducers} from 'redux-immutable' //redux整合
import { reducer as headerReducer } from '../common/header/store'

const reducer =  combineReducers({
    header:headerReducer
})

export default reducer