import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import '../sytle/login.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.history.push("/home")
          }
        });
      };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
          <div className="Login" id='login'>
              <div className="form">
                 <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
                </Form.Item>
            </Form>
            </div>
          </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;
ReactDOM.render(<WrappedNormalLoginForm />,document.getElementById('root'));

