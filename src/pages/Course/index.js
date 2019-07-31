import React from 'react';
import { Card, List } from 'antd';
import router from 'umi/router';
// import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';
import one1 from '@/assets/1111.png';
import two1 from '@/assets/2222.png';
import three1 from '@/assets/3333.png';
import four1 from '@/assets/4444.png';

import one from '@/assets/111.jpg';
import two from '@/assets/222.jpg';
import three from '@/assets/333.jpg';
import four from '@/assets/444.jpg';
import five from '@/assets/555.jpg';
import six from '@/assets/666.jpg';
import seven from '@/assets/777.jpg';
import eigth from '@/assets/888.jpg';

const data1 = [
  { name: '步态分析实验', src: one1, router: '/course/course1' },
  { name: '眼动仪实验', src: two1, router: '/course/course2' },
  { name: '多导仪实验', src: three1, router: '/course/course3' },
  { name: '面部识别实验', src: four1, router: '/course/course4' },
];

const data = [
  { name: '产品设计', src: one },
  { name: '色彩构成', src: two },
  { name: '静物素描', src: three },
  { name: '人因工程学I', src: four },
  { name: '汽车界面交互', src: five },
  { name: '人因工程学II', src: six },
  { name: '3D打印', src: seven },
  { name: '用户研究', src: eigth },
];

const About = () => (
  <Card>
    <Card className={styles.context} title="实验教学">
      <List
        grid={{ column: 4 }}
        dataSource={data1}
        renderItem={item => (
          <List.Item
            onClick={() => {
              router.push(item.router);
            }}
          >
            <img src={item.src} alt={item.name} style={{ height: '150px', cursor: 'pointer' }} />
            <p>{item.name}</p>
          </List.Item>
        )}
      />
    </Card>
    <Card className={styles.context} title="实验课程列表">
      <List
        grid={{ column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <img src={item.src} alt={item.name} style={{ height: '150px' }} />
            <p>{item.name}</p>
          </List.Item>
        )}
      />
    </Card>
  </Card>
);
export default About;
