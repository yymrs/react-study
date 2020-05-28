import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { changeInputAction,changelistAction,dellistAction,initListData,getListData } from "../store/actionCreators";
import { message } from 'antd'
import store from '../store/index'
import {get} from '../http/index'
import TodoListUi from './TodoListUi'
class TodoList extends Component {
    constructor(props) {
        // 构造函数执行一次
        super(props)
        this.state = {
            inputValue:'',
            list:[]
        }
        let data = store.getState()
        // this.state.inputValue = data.inputValue
        this.state.list = data.list
        this.chnageValue = this.chnageValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addList = this.addList.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount() {
        // get('list.json').then((res)=>{
        //     console.log(res.data.list)
        //     const data = res.data.list
        //     store.dispatch(initListData(data))
        // })
        const action = getListData()
        store.dispatch(action)
    }
    
    chnageValue(e) {
        this.setState({
            inputValue:e.target.value
        })
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    info = () => {
        message.info('请填写内容');
    }
    addList() {
        if(!this.state.inputValue){
           this.info()
           return
        }
        const action = changelistAction(this.state.inputValue)
        store.dispatch(action)
    }
    deletelist(i) {
        const action = dellistAction(i)
        store.dispatch(action)
    }
    render() { 
        return ( 
            <div>
                {<TodoListUi
                    inputValue={this.state.inputValue}
                    chnageValue={this.chnageValue}
                    addList={this.addList}
                    list={this.state.list}
                    deletelist={this.deletelist}
                ></TodoListUi>}
            </div>
         );
    }
}
export default TodoList;