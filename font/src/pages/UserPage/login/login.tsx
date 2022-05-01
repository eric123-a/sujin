import styles from './login.less'
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'umi';
import { Userlogin } from '@/service/service'

export default function login() {
    function login(data) {
          Userlogin(data)
    }
    return (
        <div className={styles.login}>
            <Form
                name="basic"
                wrapperCol={{ span: 20 }}
                initialValues={{ remember: true }}
                onFinish={login}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true }]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <div>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        <Link to={'/register'}>新用户注册</Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}