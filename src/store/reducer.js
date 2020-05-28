import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,initList } from "./actionTypes";
const defaultState = {
    inputValue : 'Write Something',
    list:[
        
    ]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = ''
        newState.list.push(action.value)
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type === initList){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.list = action.data
        return newState
    }
    return state
}