import React from 'react';
import aboutImg from '@/assets/about.jpg';
import { Card, List } from 'antd';
import styles from './index.less';
import ie from '@/assets/ie.png';
import edge from '@/assets/edge.png';
import firefox from '@/assets/firefox.png';
import chrome from '@/assets/chrome.png';
import safari from '@/assets/safari.png';
// import classNames from 'classnames';
//   const clsString = classNames(styles.globalFooter, className);

const data = [
  { name: 'IE', src: ie },
  { name: 'Chrome', src: chrome },
  { name: 'Edge', src: edge },
  { name: 'Firefox', src: firefox },
  { name: 'Safari', src: safari },
];

const About = () => (
  <Card>
    <Card className={styles.context} title="关于我们">
      <img src={aboutImg} alt="about us" style={{ width: '100%' }} />
      这里是关于我们的介绍
    </Card>
    <Card className={styles.context} title="网络要求">
      <List
        grid={{ column: 5 }}
        dataSource={data}
        renderItem={item => (
          <List.Item style={{ textAlign: 'center' }}>
            <img src={item.src} alt={item.name} style={{ height: '100px' }} />
            <p>{item.name}</p>
          </List.Item>
        )}
      />
    </Card>
    <Card className={styles.context} title="联系我们">
      <p>电话：12300000000</p>
      <p>邮箱：123@sjtu.edu.com</p>
    </Card>
  </Card>
);
export default About;
