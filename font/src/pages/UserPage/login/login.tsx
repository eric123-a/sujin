import styles from './login.less'
import {Form, Input, Button, Checkbox, Layout, Card} from 'antd';
import {Link} from 'umi';
import {Userlogin} from '@/service/service'

const {Header, Footer, Sider, Content} = Layout;

export default function login() {
  function login(data: any) {
    Userlogin(data)
  }

  return (


    <Layout>
      <Sider theme={"light"} width={300}>
        <Card title="关于速竞" extra={<a href="#">帮助</a>} style={{width: '300px', paddingTop:'30px'}}>
          <h2>速竞：信息资源交流共享社区</h2>
          <h3>在这里你可以：</h3>
          <ul>
            <li>交流竞赛经历</li>
            <li>寻找备赛经验指南</li>
            <li>个人简历</li>
            <li>招募竞赛队友</li>
            <li>获得最新竞赛咨询</li>
            <li>分享自己的知识</li>
          </ul>
        </Card>
      </Sider>
      <Content>
        <div className={styles.login}>
      <Card title="登录" style={{width:'100%'}}>

          <Form
            name="basic"
            labelCol={{span: 5}}
            wrapperCol={{span: 10}}
            initialValues={{remember: true}}
            onFinish={login}
            autoComplete="off"
          >

            <Form.Item
              label="用户名"
              name="username"
              rules={[{required: true, message: 'Please input your account!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{required: true, message: 'Please input your password!'}]}
            >
              <Input.Password/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 5, span: 10}}>
              <Checkbox>记住密码</Checkbox>
              <Link style={{float: 'right'}} to={'/'}>忘记密码？</Link>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 5, span: 10}}>
              <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                登录
              </Button>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 5, span: 10}}>
              <Link to={'/register'}>新用户注册</Link>
            </Form.Item>


          </Form>
      </Card>
        </div>
      </Content>

    </Layout>
  )
}
