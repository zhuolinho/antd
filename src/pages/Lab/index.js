import React from 'react';
import mv from '@/assets/产品设计虚拟仿真与认知评价教学实验引导720p.mp4';
import { Card, List } from 'antd';
import poster1 from '@/assets/poster2.jpg';
import styles from './index.less';
import one from '@/assets/11.jpg';
import two from '@/assets/22.png';
import three from '@/assets/33.jpg';
import four from '@/assets/44.jpg';
import five from '@/assets/大疆 飞行眼镜.png';
import six from '@/assets/大疆 晓spark 无人机.png';
import seven from '@/assets/大疆osmo.png';
import eight from '@/assets/精灵 Phantom 4 Pro.png';
import nine from '@/assets/Baropodometric Platforms.jpg';
import ten from '@/assets/Desktop-MakerBot-Replicator-Z18-Product-Image.png';
import eleven from '@/assets/eego™mylab全移动脑电记录分析系统.jpg';
import twelve from '@/assets/maxhub.jpg';
import thirteen from '@/assets/nexus10 markii.jpg';
import fourteen from '@/assets/tobii T60眼动仪.jpeg';
import fifteen from '@/assets/WacomPTH-851.jpg';

const data = [
  { name: 'Tobii glass 2', src: one },
  { name: 'MakerBot Replicator+', src: two },
  { name: 'Hololens', src: three },
  { name: 'Vive VR Glass', src: four },
  { name: '大疆 飞行眼镜', src: five },
  { name: '大疆 晓spark 无人机', src: six },
  { name: '大疆osmo', src: seven },
  { name: '精灵 Phantom 4 Pro', src: eight },
  { name: 'Baropodometric Platforms', src: nine },
  { name: 'Desktop-MakerBot-Replicator-Z18', src: ten },
  { name: 'eego™mylab全移动脑电记录分析系统', src: eleven },
  { name: 'maxhub', src: twelve },
  { name: 'nexus10 markii', src: thirteen },
  { name: 'tobii T60眼动仪', src: fourteen },
  { name: 'WacomPTH-851', src: fifteen },
];

const Lab = () => (
  <Card>
    <Card className={styles.context} title="实验中心简介">
      <video controls style={{ width: '80%', margin: 'auto', display: 'block' }} poster={poster1}>
        <source src={mv} />
        <track kind="captions" />
      </video>
    </Card>
    <Card className={styles.context}>
      <p>
        2018年，设计学院建成人因工学实验室，将成系统的人因工学研究结果应用于产品设计各个环节是课程的重要内容。实验室拥有成系统的教学实验设备，可将人的神经层面、神经与行为交互层面、行为层面、心理层面等因素科学地融入到产品设计中，在设计初始作为理论基础，结束时作为评估手段，大大提高设计效率、产品竞争性与教育科学性。创造出更加人性化、有价值的产品与服务。
      </p>
    </Card>
    <Card className={styles.context} title="设备介绍">
      <List
        grid={{ column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item style={{ textAlign: 'center' }}>
            <div style={{ padding: '10px' }}>
              <img src={item.src} alt={item.name} style={{ height: '100px' }} />
              <p>{item.name}</p>
            </div>
          </List.Item>
        )}
      />
    </Card>
  </Card>
);
export default Lab;
