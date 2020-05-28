import React, {Component } from "react";
import { Input,Button,List,  } from 'antd'
class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return ( 
            <div>
                <div>
                    <Input placeholder={'Write Something'} value={this.props.inputValue} onChange={this.props.chnageValue} style={{ width:'250px'}}/>
                    <Button type="primary" onClick={this.props.addList}>增加</Button>
                    <List
                        style={{margin:'10px auto',width:'300px'}}
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index) => (
                            <List.Item>
                                {item}
                                <Button size='small' type="primary" danger onClick={()=>this.props.deletelist(index)}>删除</Button>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
         );
    }
}
export default TodoList