import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from "../store/actionTypes"; //把action的类型分出来
import { Input,Button,List,message  } from 'antd'
import store from '../store/index'
// const data=[
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]
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
    chnageValue(e) {
        this.setState({
            inputValue:e.target.value
        })
        const action ={
            type:CHANGE_INPUT,
            value:e.target.value
        }
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
        const action = {
            type:ADD_ITEM,
            value:this.state.inputValue
        }
        store.dispatch(action)
    }
    deletelist(i) {
        const action ={
            type:DELETE_ITEM,
            index:i
        }
        store.dispatch(action)
        console.log(i);
    }
    render() { 
        return ( 
            <div>
                <div>
                    <Input placeholder={'Write Something'} value={this.state.inputValue} onChange={this.chnageValue} style={{ width:'250px'}}/>
                    <Button type="primary" onClick={this.addList}>增加</Button>
                    <List
                        style={{margin:'10px auto',width:'300px'}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) => (
                            <List.Item>
                                {item}
                                <Button size='small' type="primary" danger onClick={()=>this.deletelist(index)}>删除</Button>
                            </List.Item>
                        )}
                    />
                </div>
                
            </div>
         );
    }
}
export default TodoList;