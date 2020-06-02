import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todolist from "../view/TodoList";
import Index from "../view/index";
import About from "../view/About";

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <div className='box'>
                    <ul>
                        <li> <Link to="/">首页</Link> </li>
                        <li> <Link to="/about/">我的</Link> </li>
                        {/* <li> <Link to="/about/123">我的路由传值</Link> </li> */}
                        <li> <Link to="/todolist/">列表</Link> </li>
                    </ul>
                </div>
                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                {/* <Route exact path="/about/:id" component={About} /> */}
                <Route path="/todolist/" component={Todolist} />

            </Router>

        )
    }
}

export default App