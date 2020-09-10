import * as actionTypes from "./constants";
import { fromJS } from "immutable"; //把state变成不可修改对象

const defaultState = fromJS({
  focused: false,
  mouseIn: false, //进入离开
  list: [],
  page: 1, //页数
  totalPage: 1, //第几页
});

export default (state = defaultState, action) => {
  // if (action.type === actionTypes.SEATCH_FOCUS) {
  //     return state.set('focused', true) // 通过这种方法来"写入" set focused
  //     // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
  //     // return{
  //     //    focused:true
  //     // }
  // }

  // if (action.type === actionTypes.SEARCH_BLUR) {
  //     return state.set('focused', false)
  // }

  // if(action.type === actionTypes.CHANGE_LIST){
  //     return state.set('list',action.data)
  // }

  switch (action.type) {
    case actionTypes.SEATCH_FOCUS:
      return state.set("focused", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false);
    case actionTypes.CHANGE_LIST:
      // return state.set('list',action.data).set('totalPage',action.totalPage)
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      });
    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
