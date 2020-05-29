import React, { Component } from "react"
import ReactDOM from "react-dom"
import AddNumber from './view/AddNumber'
import {Provider} from 'react-redux'
import store from './store'
class App extends Component {
    
    render() {
        return(
            <Provider store={store}>
                <AddNumber></AddNumber>
            </Provider>
        )
    }
}

ReactDOM.render(<App></App>,document.querySelector('#root'))