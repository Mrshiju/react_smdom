import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import ReactDOM from 'react-dom';
import '../sytle/home.css';
import {BrowserRouter as Router,Switch ,Route, Link} from "react-router-dom";
import Contents from './content.js'
// import routers from '../App'
const { Header, Sider, Content } = Layout;
export default class Home extends Component {
    state = {
        collapsed: false,
        paths:'',
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
     
      componentDidMount(){
          console.log('====================================');
          console.log(this.props.location.pathname);
          console.log('====================================');
        this.state.paths = this.props.location.pathname;
      }
      
      
      change(){
        this.props.history.push("/")
      }
    render(){
        return (
              <Router>
                  <div className="Home">
                    <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.paths]}>
                            <Menu.Item key="/home">
                            <Icon type="user" />
                             <span>nav 1</span>
                             <Link to="/home"></Link>
                            </Menu.Item>
                            <Menu.Item key="/home/layout">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                            <Link to="/home/layout"></Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                        </Sider>
                        <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            />
                        </Header>
                        <Content
                            style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                            }}
                        >
                            <Contents />
                        {/* <Route path='/home' component={Datashow}></Route> */}
                        {/* <Switch>
                          <Route exact path='/home/layout' component={Layouts}></Route>
                          <Route exact path='/home' component={Datashow}></Route>
                        </Switch> */}
                        </Content>
                        </Layout>
                    </Layout>
               </div>
             </Router>
        );
    }
}
// ReactDOM.render(<Home />, document.getElementById('root'));
