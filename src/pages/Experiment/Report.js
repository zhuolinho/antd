import React from 'react';
import { Card, Row, Col } from 'antd';

import button1 from '@/assets/shit1.png';
import button2 from '@/assets/shit2.png';
import button3 from '@/assets/shit3.png';

const Report = () => (
  <Card style={{ padding: '0 150px' }}>
    <Row>
      <Col span={4}>
        <img style={{ width: '100%' }} alt="" src={button1} />
      </Col>
    </Row>
    <Row style={{ margin: '40px 0' }}>
      <Col span={12}>
        <img
          style={{ width: '80%' }}
          alt=""
          src={button2}
          onClick={() => {
            window.location = '//zhuolinho.gitee.io/moon-fight/产品造型语义评价报告.docx';
          }}
        />
      </Col>
      <Col span={12}>
        <img
          style={{ width: '80%' }}
          alt=""
          src={button3}
          onClick={() => {
            window.location = '//zhuolinho.gitee.io/moon-fight/汽车模拟驾驶实验报告.docx';
          }}
        />
      </Col>
    </Row>
  </Card>
);
export default Report;
