import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input,Button,List,message  } from 'antd'
// 引入store仓库
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
        // 组建自己的状态，state的更新会更新ui这就是执行render函数
        this.state = {
            inputValue:'',
            list:[]
        }
        // 获取store仓库的数据
        let data = store.getState()
        // this.state.inputValue = data.inputValue
        this.state.list = data.list //赋值给组建的状态更新ui
        // 事件需要绑定this指向
        this.chnageValue = this.chnageValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addList = this.addList.bind(this)
        // 订阅store的更新
        store.subscribe(this.storeChange)
    }
    chnageValue(e) {
        this.setState({
            inputValue:e.target.value
        })
        const action ={
            type:'changeInput',
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
        // 定义行为
        const action = {
            type:'addlist',
            value:this.state.inputValue
        }
        // 触发行为
        store.dispatch(action)
    }
    deletelist(i) {
        const action ={
            type:'dellist',
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