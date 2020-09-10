import * as actionTypes from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data), //不要忘修改，因为引入immutable会生成对应类型对象
  totalPage: Math.ceil(data.length / 10),
});

export const serchFocus = () => ({
  type: actionTypes.SEATCH_FOCUS,
});
export const serchBlur = () => ({
  type: actionTypes.SEARCH_BLUR,
});

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
});

export const changePage = (page) =>({
  type:actionTypes.CHANGE_PAGE,
  page
})

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
