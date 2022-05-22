import styles from './index.less';
import { Tabs, List, Typography, Divider, Carousel, message } from 'antd';
import { useRequest } from 'ahooks';
import { getBlogList } from '@/service/service';
import { useEffect, useState } from 'react';
import { history } from 'umi';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const { TabPane } = Tabs;

export default function IndexPage() {

  const [blogList, setblogList] = useState([]);
  const { loading, run } = useRequest(getBlogList, {
    retryCount: 3,
    manual: true,
    onError: (error) => {
      message.error(error.message);
    },
    onSuccess: (res) => {
      console.log(res.data)
      setblogList(res.data)
    }
  });
  function selectTab(e) {
    run({ tag: e })
  }
  useEffect(() => {
    run({ tag: 'info' })
  }, [])

  function gotodetail(id) {
    history.push({
      pathname: '/detail',
      query: {
        blogId: id
      }
    })
  }
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        <Carousel autoplay>
          <div>
            <img height='300px' width='1000px' src='http://cdn1.52jingsai.com/portal/202204/18/145343dr5zf9yeg9f9rpeu.jpg' />
          </div>
          <div>
            <img height='300px' width='1000px' src='http://cdn1.52jingsai.com/portal/202202/10/120212nk7pkplicbjbv88y.jpg' />
          </div>
          <div>
            <img height='300px' width='1000px' src='http://cdn4.52jingsai.com/220216/20220216143006974.jpg' />
          </div>
          <div>
            <img height='300px' width='1000px' src='http://cdn4.52jingsai.com/220216/20220216143232325.jpg' />
          </div>
        </Carousel></h1>
      <div className={styles.list}>
        <Tabs defaultActiveKey="1" onChange={selectTab}>
          <TabPane tab="竞赛讯息" key="info">
            <List
              bordered
              dataSource={blogList}
              renderItem={item => (
                <List.Item onClick={() => gotodetail(item.blogId)}>
                  {item.title}
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="招募队友" key="recruit">
            <List
              bordered
              dataSource={blogList}
              renderItem={item => (
                <List.Item>
                  {item.title}
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="经验分享" key="experience">
            <List
              bordered
              dataSource={blogList}
              renderItem={item => (
                <List.Item>
                  {item.title}
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
