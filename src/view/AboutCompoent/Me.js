import React, { Component } from "react";

class Me extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        // this.props.history.push("/todolist");  编程式重定向就是不再利用<Redirect/>标签，
        this.state = {
            id: null
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id);

        if (this.props.match.params.id) {
            this.setState({
                id: this.props.match.params.id
            })
        }
    }
    render() {
        return (
            <div>
                这是about 的me页面
                {this.state.id? <p>如果有路由传值这里显示路由的参数{this.state.id}</p>:''}
            </div>
        )
    }
}
export default Me