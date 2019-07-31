import React, { Fragment } from 'react';
import { Card, Row, Col, List } from 'antd';
// import styles from './index.less';
import one1 from '@/assets/content-01.png';
import two1 from '@/assets/content-02.png';
import three1 from '@/assets/content-03.png';
import four1 from '@/assets/content-04.png';
import fake from '@/assets/fake.png';
import { getAuthority } from '@/utils/authority';
import request from '@/utils/request';
import router from 'umi/router';

const data = [
  { name: '汽车模拟驾驶实验', src: one1, router: '//zhuolinho.gitee.io/moon-fight/HMI1/' },
  { name: '飞机模拟驾驶实验', src: two1, router: '//zhuolinho.gitee.io/moon-fight/webPlane/' },
  {
    name: '车身色彩认知实验',
    src: three1,
    router: '//zhuolinho.gitee.io/moon-fight/webVRCarTest/',
  },
  { name: '产品造型语义评价', src: four1, router: '//dschool.sjtu.edu.cn/home/research/vrtool/' },
];

const ExList = () => (
  <Fragment>
    <Card style={{ padding: '0 100px' }}>
      <Row>
        <Col span={12}>
          <Card title="选择实验" bordered={false}>
            <List
              grid={{ column: 2 }}
              dataSource={data}
              renderItem={item => (
                <List.Item
                  onClick={() => {
                    if (getAuthority().indexOf('guest') < 0) {
                      request('/api/vr').then(() => {
                        window.location = item.router;
                      });
                    } else {
                      router.push('/user/login');
                    }
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    style={{ height: '150px', cursor: 'pointer' }}
                  />
                  <p>{item.name}</p>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="实验学习" bordered={false}>
            <img src={fake} alt="" style={{ width: '70%', cursor: 'pointer' }} />
          </Card>
        </Col>
      </Row>
    </Card>
  </Fragment>
);
export default ExList;
