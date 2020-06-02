import { get } from '../http';
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
export const getListData = ()=>{
    return (dispatch)=>{
        get('http://localhost:3000/list.json').then((res)=>{
            const data = res.data.list
            const action = initListData(data)
            dispatch(action)
        })
    }
}