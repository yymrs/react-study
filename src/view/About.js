import React, { Component } from "react";
import {Route, Link, Redirect } from "react-router-dom";
import Home from './AboutCompoent/Home'
import Me from './AboutCompoent/Me'
class About extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className='box'>
                    <ul>
                        <li> <Link to="/about/home">首页</Link> </li>
                        <li> <Link to="/about/me/213">我的</Link> </li>
                        {/* <li> <Link to="/about/123">我的路由传值</Link> </li> */}
                    </ul>
                </div>
                {/* <Redirect to="/todolist" />重定向到todolist */}
                    这是about页面
                <Route path="/about/home"   component={Home} />
                <Route path="/about/me/:id"   component={Me} />
            </div>



        )
    }
}
export default About