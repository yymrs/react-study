import React, { Component } from "react"
import ReactDOM from "react-dom"
import AddNumber from './view/AddNumber'
import SeeNumber from './view/SeeNumber'
import {Provider} from 'react-redux'
import store from './store'
class App extends Component {
    
    render() {
        return(
            // Provider所包含的组件都可以访问到store
            <Provider store={store}>
                <AddNumber></AddNumber>
                <SeeNumber></SeeNumber>
            </Provider>
        )
    }
}

ReactDOM.render(<App></App>,document.querySelector('#root'))