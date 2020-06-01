import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Todolist from './view/TodoList'

let About = () => <div>这是aboutaboutaboutaboutaboutaboutabout页面</div>
let Inbox = () => <div>这是indexindexindexindexindexindexindex页面</div>
let Home = () => <div>这是homehomehomehomehomehomehomehome页面</div>
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: window.location.hash.substr(1)
        }
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }
    render() {
        let Child
        switch (this.state.route) {
            case 'about': Child = About; break;
            case 'inbox': Child = Inbox; break;
            default: Child = Home;
        }
        return (
            <div className='box'>
                学习router
                <br></br>
                <section style={{ background: '#fff', border: '1px solid #000', display: 'inline-block' }}>
                    <p>不使用react-router的写法</p>
                    <p>使用window.location 里面的api匹配当前url地址，根据匹配渲染组建</p>
                </section>
                <section>
                    <br></br>
                    <a href='#about'>about页面</a>
                    <br></br>
                    <a href='#inbox'>inbox页面</a>
                    <Child></Child>
                </section>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.querySelector("#root"))