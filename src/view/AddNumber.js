import React, { Component } from "react"
import store from '../store/index'
import {connect} from 'react-redux' //引入连接器
class AddNumber extends Component {
    constructor(props) {
        super(props)
        const data =  store.getState()
        this.state = {
            number:data.number
        }
        this.subNumber = this.subNumber.bind(this)
        this.addNumber = this.addNumber.bind(this)
        this.changeState = this.changeState.bind(this)
        // store.getState() //获取仓库的数据
        // Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。从而更新我们ui
        let unsubscribe = store.subscribe(this.changeState)
        // unsubscribe();用来接触监听
        console.log(store);
    }
    subNumber() {
        // 定义行为
        const action = {
            type:'sub',
            value:1
        }
        // 触发这个行为
        store.dispatch(action)
    }
    changeState() {
        const data = store.getState()
        this.setState({
            number:data.number
        })
    }
    addNumber() {
        const action = {
            type:'add',
            value:1
        }
        console.log(store.getState());
        
        // 触发这个行为
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                {this.state.number}
                <br/>
                <button onClick={this.addNumber}>+</button> 
                <br/>
                <button onClick={this.subNumber}>-</button>
            </div>
        )
    }
}

// const stateToProps = (state)=>{
//     console.log(state);
//     return {
//         number : state.number
//     }
// }
export default AddNumber
// export default connect(stateToProps,null)(AddNumber);