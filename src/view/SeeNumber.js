import React,{Component} from 'react'
import {connect} from 'react-redux'
class SeeNumber extends Component {
    constructor(props) {
        super(props)
        console.log(this);
        
    }
    render() {
        return(
            <div>
                SeeNumber组件的number
                {this.props.number}
                <br></br>
                <button onClick={this.props.subNumber}>see的减</button>
            </div>
        )
    }
}
// 映射数据
const stateToProps = (state)=>{
    console.log(state,'seeee');
    return {
        number : state.number
    }
}
// 映射行为
const dispatchToProps = (dispatch) =>{
    return {
        subNumber(){
            let action = {
                type:'sub',
                value:2
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(SeeNumber)