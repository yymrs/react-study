// 引入redux里面的createStore方法
import { createStore,applyMiddleware } from 'redux'
// 使用thunk中间件
import thunk from 'redux-thunk'
import reducer from './reducer'
// 创建一个store对象
const store = createStore(reducer,applyMiddleware(thunk)) // 创建数据存储仓库
export default store