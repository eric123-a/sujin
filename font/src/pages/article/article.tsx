import styles from './article.less'

// import { useRequest } from 'ahooks';
// import { getBlogList } from '@/service/service';
import React, {useEffect, useState} from 'react';
import {history} from 'umi';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {Avatar, Comment, Divider, Calendar, List, MenuProps, Tooltip, Card} from "antd";
import Sider from "antd/lib/layout/Sider";
import {Layout, Menu, Breadcrumb} from 'antd';
import moment from 'moment';
import type {CalendarMode} from 'antd/lib/calendar/generateCalendar';
import type {Moment} from 'moment';
import Icon, {HeartFilled, DislikeOutlined, LikeFilled, HomeOutlined} from '@ant-design/icons';


export default function ArticlePage() {
  // 日历相关
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const {Header, Content, Footer, Sider} = Layout;

  // const [blogList, setblogList] = useState([]);
  // const { loading, run } = useRequest(getBlogList, {
  //   retryCount: 3,
  //   manual: true,
  //   onError: (error) => {
  //     message.error(error.message);
  //   },
  //   onSuccess: (res) => {
  //     console.log(res.data)
  //     setblogList(res.data)
  //   }
  // });
  // function selectTab(e) {
  //   run({ tag: e })
  // }
  // useEffect(() => {
  //   run({ tag: 'info' })
  // }, [])
  //
  // function gotodetail(id) {
  //   history.push({
  //     pathname: '/detail',
  //     query: {
  //       blogId: id
  //     }
  //   })
  // }

  const title = '物联网大赛讯息';
  const article = "“全国大学生物联网设计竞赛”是以促进国内物联网相关专业建设和人才培养为目标，以物联网技术为核心，激发物联网相关专业学生的创造、创新、创业活力，推动高校创新创业教育而举办的面向大学生的学科竞赛。在成功举办2014——2021年连续八届“全国大学生物联网设计竞赛”的基础上，竞赛组委会决定继续主办“2022年全国大学生物联网设计竞赛”(以下简称“竞赛”）。";

  // 评论数据mock
  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          含金量很高的比赛，学习资料和奖品都很丰富，安利一下，大家都可以冲！！
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(1, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          有没有前辈说说这个比赛大概要准备多久啊？
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(2, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
  ];
  return (
    <div className={styles.main}>
      <Breadcrumb style={{paddingTop: '20px'}}>
        <Breadcrumb.Item href="">
          <HomeOutlined/>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UserOutlined/>
          <span>竞赛讯息 列表</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>2022年度</Breadcrumb.Item>
      </Breadcrumb>

      <Layout className="site-layout-background" style={{padding: '24px 0'}}>
        <Sider className="site-layout-background" width={300} theme={"light"}>

          <Avatar shape="square" size={100} icon={<UserOutlined/>} className={styles.avatar}/>
          <Card size={"small"} title="作者信息" bordered={false} style={{width: 300}}>

            <div className="site-card-border-less-wrapper">
              <p>昵称： content</p>
              <p>在读年级： 大三</p>
              <p>学校： whu</p></div>
          </Card>
          <div className={styles.calendar}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
          </div>
        </Sider>

        <Content className={styles.content}>

          {/*以下是帖子内容*/}
          <h1 className={styles.arttitle}>{title}</h1>
          <div className={styles.artinfo}>last edit time:xxxx-xx-xx xx:xx:xx</div>

          <article>{article}</article>
          <article>{article}</article>
          <article>{article}</article>
          {/*帖子内容到这里结束*/}

          <Divider plain>喜欢这篇文章吗？可以赞或收藏哦~~</Divider>
          <div className={styles.actions}>
            <LikeFilled style={{fontSize: '36px', color: '#08c', padding: '10px'}}/>
            <DislikeOutlined style={{fontSize: '36px', padding: '10px'}}/>
            <HeartFilled style={{fontSize: '36px', color: '#f8c', padding: '10px'}}/>
          </div>
          <Divider plain>评论区</Divider>
          <List
            className="comment-list"
            header={`${data.length} replies`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <li>
                <Comment
                  actions={item.actions}
                  author={item.author}
                  avatar={item.avatar}
                  content={item.content}
                  datetime={item.datetime}
                />
              </li>
            )}
          />

        </Content>
      </Layout>


    </div>
  );
}






