import styles from './register.less'
import {Form, Input, Button, Checkbox, Layout, Card} from 'antd';
import { registerUser } from '@/service/service';
import {history, Link} from 'umi';
const { Sider, Content } = Layout;
import { Userlogin } from '@/service/service'



export default function register() {
    function register(data) {
        console.log(data)
        registerUser(data).then(() => {
            alert('注册成功')
            history.push('/login')
        })
    }
    return (
        // <div className={styles.register}>
        //
        //
        //
        // </div>


  <Layout>
    <Sider theme={"light"} width={300}>
      <Card title="关于速竞" extra={<a href="#">帮助</a>} style={{ width: '300px', paddingTop: '30px' }}>
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
      <div className={styles.register}>
        <Card title="注册" style={{ width: '100%' }}>

          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 10 }}
            initialValues={{ remember: true }}
            onFinish={register}
            autoComplete="off"
          >

            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: 'Please input your account!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="电话号码"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 5, span: 10 }}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                注册
              </Button>
            </Form.Item>




          </Form>




        </Card>
      </div>
    </Content>

  </Layout>

    )
}
