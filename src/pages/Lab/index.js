import React from 'react';
import mv from '@/assets/MV 720P .mp4';
import { Card, List } from 'antd';
import poster1 from '@/assets/poster2.jpg';
import styles from './index.less';
import one from '@/assets/11.jpg';
import two from '@/assets/22.png';
import three from '@/assets/33.jpg';
import four from '@/assets/44.jpg';

const data = [
  { name: 'Tobii glass 2', src: one },
  { name: 'MakerBot Replicator+', src: two },
  { name: 'Hololens', src: three },
  { name: 'Vive VR Glass', src: four },
];

const Lab = () => (
  <Card>
    <Card className={styles.context} title="实验中心简介">
      <video controls style={{ width: '80%', margin: 'auto', display: 'block' }} poster={poster1}>
        <source src={mv} />
        <track kind="captions" />
      </video>
    </Card>
    <Card className={styles.context} title="实验项目特色">
      实验项目特色
    </Card>
    <Card className={styles.context} title="设备介绍">
      <List
        grid={{ column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item style={{ textAlign: 'center' }}>
            <img src={item.src} alt={item.name} style={{ height: '100px' }} />
            <p>{item.name}</p>
          </List.Item>
        )}
      />
    </Card>
    <Card className={styles.context} title="持续服务计划">
      持续服务计划
    </Card>
  </Card>
);
export default Lab;
