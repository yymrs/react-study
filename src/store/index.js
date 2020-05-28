// 引入redux里面的createStore方法
import { createStore } from 'redux'
import reducer from './reducer'
// 创建一个store对象
const store = createStore(reducer) // 创建数据存储仓库
export default store