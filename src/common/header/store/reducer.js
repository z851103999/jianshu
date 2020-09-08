import * as actionTypes from './constants'
import {fromJS} from 'immutable'//把state变成不可修改对象

const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if (action.type === actionTypes.SEATCH_FOCUS) {
        return state.set('focused', true) // 通过这种方法来"写入" set focused
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        // return{
        //    focused:true
        // }
    }

    if (action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state
}