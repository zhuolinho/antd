import React from 'react';
import { Card } from 'antd';

const WebVRCarTest = () => (
  <Card style={{ padding: '0 10%' }}>
    <Card title="车身色彩认知实验" bordered={false}>
      <iframe
        title="webVRCarTest"
        src="//zhuolinho.gitee.io/moon-fight/webVRCarTest/"
        frameBorder="0"
        style={{ width: '100%', height: '820px' }}
      />
    </Card>
    <Card title="实验内容" bordered={false}>
      <p>（1）制作汽车数字模型，并将数字汽车模型的导入实验</p>
      <p>（2）在vr软件中体验第三人称情况下汽车的运行过程与环境的交互过程</p>
      <p>（3）在vr软件中对于汽车的外部颜色进行改变的实施过程</p>
    </Card>
  </Card>
);
export default WebVRCarTest;
