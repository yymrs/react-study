import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,initList}  from './actionTypes'
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})
export const changelistAction = (value)=>({
    type:ADD_ITEM,
    value
})
export const dellistAction = (index)=>({
    type:DELETE_ITEM,
    index
})
export const initListData = (data)=>({
    type:initList,
    data
})