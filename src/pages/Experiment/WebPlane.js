import React from 'react';
import { Card } from 'antd';

const WebPlane = () => (
  <Card style={{ padding: '0 10%' }}>
    <Card title="飞机模拟驾驶实验" bordered={false}>
      <iframe
        title="webPlane"
        src="//zhuolinho.gitee.io/moon-fight/webPlane/"
        frameBorder="0"
        style={{ width: '100%', height: '820px' }}
      />
    </Card>
    <Card title="实验内容" bordered={false}>
      <p>（1）vr软件下第三人称飞机的运行过程与环境的交互体验</p>
      <p>（2）vr软件下对于飞机操作的人因参数和飞机虚拟参数可视化与记录过程</p>
    </Card>
  </Card>
);
export default WebPlane;
