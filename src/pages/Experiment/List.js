import React, { Fragment } from 'react';
import { Card, Row, Col, List } from 'antd';
// import styles from './index.less';
import one1 from '@/assets/content-01.png';
import two1 from '@/assets/content-02.png';
import three1 from '@/assets/content-03.png';
import four1 from '@/assets/content-04.png';
import button1 from '@/assets/button1.png';
import button2 from '@/assets/button2.png';
import button3 from '@/assets/button3.png';
import { getAuthority } from '@/utils/authority';
import request from '@/utils/request';
import router from 'umi/router';

const data = [
  { name: '汽车模拟驾驶实验', src: one1, router: '/experiment/HMI1' },
  { name: '飞机模拟驾驶实验', src: two1, router: '/experiment/webPlane' },
  { name: '车身色彩认知实验', src: three1, router: '/experiment/webVRCarTest' },
  { name: '产品造型语义评价', src: four1, router: '/experiment/vrtool' },
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
                        router.push(item.router);
                      });
                    } else {
                      router.push('/user/login');
                    }
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    style={{ height: '200px', cursor: 'pointer' }}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="实验学习" bordered={false}>
            <img
              src={button1}
              alt=""
              style={{ width: '70%', cursor: 'pointer', margin: '15px' }}
              onClick={() => {
                router.push('/experiment/wenjuan');
              }}
            />
            <img
              src={button2}
              alt=""
              style={{ width: '70%', cursor: 'pointer', margin: '15px' }}
              onClick={() => {
                router.push('/experiment/report');
              }}
            />
            <img
              src={button3}
              alt=""
              style={{ width: '70%', cursor: 'pointer', margin: '15px' }}
              onClick={() => {
                router.push('/experiment/score');
              }}
            />
          </Card>
        </Col>
      </Row>
    </Card>
  </Fragment>
);
export default ExList;
