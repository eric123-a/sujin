import {Button, Card, Input, Layout} from "antd"
import '@wangeditor/editor/dist/css/style.css'
import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig } from '@wangeditor/editor'
import styles from './index.less'
import { publish } from "@/service/service"
import { Select } from 'antd';
const { Sider, Content } = Layout;

const { Option } = Select;


export default function home() {
    const [editor, setEditor] = useState<IDomEditor | null>(null) // 存储 editor 实例
    const [title, settitle] = useState('')
    const [html, setHtml] = useState('<p>hello</p>') // 编辑器内容
    const [tag, settag] = useState('recruit')
    const toolbarConfig = {}
    const editorConfig: Partial<IEditorConfig> = {
        placeholder: '请输入内容...',
    }
    function submit() {
        const data = {
            uid: sessionStorage.getItem('uid'),
            title: title,
            content: html,
            tag: tag
        }
        console.log(data)
        publish(data).then((res) => {
            alert('发布成功')
            window.location.reload()
        })
    }
    function tagChange(value) {
        settag(value)
    }
    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        console.log(html)
        setTimeout(() => {
            setHtml('<p>hello&nbsp;world</p>')
        }, 1500)
    }, [])



    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])
    return (
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

            <div className={styles.main}>
                <div className={styles.title}>
                    <Input placeholder="文章标题" bordered={false} onChange={(e) => settitle(e.target.value)}></Input>
                    <Select defaultValue="recruit" style={{ width: 120 }} onChange={tagChange}>
                        <Option value="recruit">招募</Option>
                        <Option value="experience">经验</Option>
                        <Option value='info'>资讯</Option>
                    </Select>
                </div>

                <div className={styles.content}>
                    <Toolbar
                        editor={editor}
                        defaultConfig={toolbarConfig}
                        mode="default"
                        style={{ borderBottom: '1px solid #ccc'}}
                    />
                    <Editor
                        defaultConfig={editorConfig}
                        value={html}
                        onCreated={setEditor}
                        onChange={editor => setHtml(editor.getHtml())}
                        mode="default"
                        style={{ height: '700px', 'overflow-y': 'hidden' }}
                    />
                    <div className={styles.btn}><Button onClick={submit} type='primary'>提交</Button></div>
                </div>
            </div>
        </Content>

      </Layout>
    )
}
