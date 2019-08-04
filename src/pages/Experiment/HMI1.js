import React from 'react';
import { Card } from 'antd';

const HMI1 = () => (
  <Card style={{ padding: '0 10%' }}>
    <Card title="汽车模拟驾驶实验" bordered={false}>
      <iframe
        title="HMI1"
        src="//zhuolinho.gitee.io/moon-fight/HMI1/"
        frameBorder="0"
        style={{ width: '100%', height: '820px' }}
      />
    </Card>
    <Card title="实验内容" bordered={false}>
      <p>（1）vr软件下第一人称汽车的运行过程与环境的交互体验</p>
      <p>（2）vr软件中对于上述体验的人因参数与汽车虚拟参数可视化与记录过程</p>
      <p>（3）vr软件中用户对于虚拟对象的交互操作和数据记录的实施过程</p>
    </Card>
  </Card>
);
export default HMI1;
