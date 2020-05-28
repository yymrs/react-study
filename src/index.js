import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Todolist from './view/TodoList'
class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='box'>
                react
                <Todolist>
                    
                </Todolist>
            </div>
        )
    }
}

ReactDOM.render(<App></App>,document.querySelector("#root"))