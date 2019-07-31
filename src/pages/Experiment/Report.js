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
        <img style={{ width: '80%' }} alt="" src={button2} />
      </Col>
      <Col span={12}>
        <img style={{ width: '80%' }} alt="" src={button3} />
      </Col>
    </Row>
  </Card>
);
export default Report;
