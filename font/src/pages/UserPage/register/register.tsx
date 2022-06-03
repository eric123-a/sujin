import styles from './register.less'
import { Form, Input, Button, Checkbox } from 'antd';
import { registerUser } from '@/service/service';
import { history } from 'umi';

export default function register() {
    function register(data) {
        console.log(data)
        registerUser(data).then(() => {
            alert('注册成功')
            history.push('/login')
        })
    }
    return (
        <div className={styles.register}>
            <Form
                name="basic"
                wrapperCol={{ span: 20 }}
                initialValues={{ remember: true }}
                onFinish={register}
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
                    name="phone"
                    label="电话号码"
                    rules={[{ required: true }]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true }]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}