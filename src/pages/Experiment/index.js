import React from 'react';
import { Card, List } from 'antd';
// import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';
import one from '@/assets/1111.png';
import two from '@/assets/2222.png';
import three from '@/assets/3333.png';
import four from '@/assets/4444.png';

const data = [
  { name: '步态分析实验', src: one },
  { name: '眼动仪实验', src: two },
  { name: '多导仪实验', src: three },
  { name: '面部识别实验', src: four },
];

const About = () => (
  <Card>
    <Card className={styles.context} title="VR实验">
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
