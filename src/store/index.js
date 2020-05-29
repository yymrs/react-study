// 创建仓库
import { createStore} from 'redux'
// 引入reducer函数
import reducer from './reducer'
// import {} from 'react-redux'
// 
const store = createStore(reducer)
// 暴露仓库
export default store