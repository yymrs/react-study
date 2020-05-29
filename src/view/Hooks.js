import React, { Component, useState, useEffect } from 'react'

// class Hooks extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
//             </div>
//         )
//     }
// }
// 自定义hook
function useFriendStatus() {
    const [isOnline, setIsOnline] = useState('自定义hook');
    console.log('自定义');

    useEffect(() => {
        console.log(isOnline);
    });
    function handleStatusChange(status) {
        console.log(status);
        setIsOnline(status.isOnline);
    }
    return { isOnline, handleStatusChange };
}

function Hooks() {
    const [count, setCount] = useState(1);
    const [text, setTodos] = useState([{ text: 'Learn Hooks' }]);
    console.log(useState([{ text: 'Learn Hooks' }]));
    console.log(text);
    console.log(window.location.hash.substr(1));
    const obj = useFriendStatus()
    console.log(obj);

    return (
        <div>
            Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
            <p>
                {count}--{text[0].text}--{obj.isOnline}
            </p>
            <button onClick={() => setCount(count + 1)}>点击加1</button>
            <button onClick={() => obj.handleStatusChange({ isOnline: '修改文字' })}>修改自定义hook</button>

            <h3>什么是 Hook?</h3>
            <p>
                Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React。（我们不推荐把你已有的组件全部重写，但是你可以在新组件里开始使用 Hook。）
                React 内置了一些像 useState 这样的 Hook。你也可以创建你自己的 Hook 来复用不同组件之间的状态逻辑。我们会先介绍这些内置的 Hook
            </p>
        </div>
    )
}

export default Hooks