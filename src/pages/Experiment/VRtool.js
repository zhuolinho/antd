import React from 'react';
import { Card } from 'antd';

const VRtool = () => (
  <Card style={{ padding: '0 10%' }}>
    <Card title="产品造型语义评价" bordered={false}>
      <iframe
        title="vrtool"
        src="//dschool.sjtu.edu.cn/home/research/vrtool/"
        frameBorder="0"
        style={{ width: '100%', height: '820px' }}
      />
    </Card>
    <Card title="实验内容" bordered={false}>
      <p style={{ textIndent: '40px' }}>
        本项目VR工具开发与应用，使借助传统调研方式不可能完成的用户调研活动，能够顺利而且可靠地完成，从而获得较准确的调研数据，用来分析用户对造型的认知特性和美学偏好，指导设计教学和课程设计中设计创新过程。
      </p>
      <p>（1）在实验准备阶段，建立VR场景、对象、界面等内容</p>
      <p>
        （2）在调研任务阶段，用户通过交互式操作界面元素和客体对象，做出选择、判断和评价，完成调研任务
      </p>
      <p>（3）在数据处理阶段，VR工具系统所记录的数据，家已导出，进行数据分析</p>
    </Card>
  </Card>
);
export default VRtool;
