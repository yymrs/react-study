import React, { Component } from "react"
import ReactDOM from "react-dom"
import Hooks from './view/Hooks'
import UseEffect from './view/UseEffect'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li><Link to='/Hooks'>Hooks</Link ></li>
                        <li><Link to='/UseEffect'>UseEffect</Link ></li>
                    </ul>
                    {/* <Hooks></Hooks>
                <UseEffect></UseEffect> */}
                    <Route path="/Hooks" component={Hooks} />
                    <Route path="/UseEffect" component={UseEffect}></Route>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.querySelector('#root'))