import React,{Component} from 'react';
import axios from 'axios';
import { Table, Divider, Tag } from 'antd';
import { Pagination } from 'antd';
const { Column, ColumnGroup } = Table;
export default class layout extends Component {
    constructor(props){
        super(props);
        this.data = [
            {
              key: '1',
              firstName: 'John',
              lastName: 'Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              firstName: 'Jim',
              lastName: 'Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              firstName: 'Joe',
              lastName: 'Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];
          
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3000/bannerImg").then(res =>{
            
        })
    }
    render(){
        const divStyle = {
            "textAlign": 'right',
          };
        return (
          <div className="Login">
            <Table dataSource={this.data} pagination={false}>
              
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
                {/* </ColumnGroup> */}
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <span>
                    {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                        {tag}
                        </Tag>
                    ))}
                    </span>
                )}
                />
                <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <span>
                    <a>Invite {record.lastName}</a>
                    <Divider type="vertical" />
                    <a>Delete</a>
                    </span>
                )}
                />
            </Table>,
            
            <Pagination defaultCurrent={1} total={50} style={divStyle} />
            <header className="App-header">
              <p>
                随便一个登陆页面
              </p>
              <span>
                Learn React
              </span>
            </header>
          </div>
        );
    }
}


