import React from "react";
import { Input,Button,List } from 'antd'
function TodoList(props) {
    return ( 
        <div>
            <div>
                <Input placeholder={'Write Something'} value={props.inputValue} onChange={props.chnageValue} style={{ width:'250px'}}/>
                <Button type="primary" onClick={props.addList}>增加</Button>
                <List
                    style={{margin:'10px auto',width:'300px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (
                        <List.Item>
                            {item}
                            <Button size='small' type="primary" danger onClick={()=>props.deletelist(index)}>删除</Button>
                        </List.Item>
                    )}
                />
            </div>
        </div>
        )
}
export default TodoList