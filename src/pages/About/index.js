import React from 'react';
import mv from '@/assets/MV 720P .mp4';
import { Card } from 'antd';
import styles from './index.less';
// import classNames from 'classnames';
//   const clsString = classNames(styles.globalFooter, className);

const Home = () => (
  <Card>
    <Card className={styles.context} title="关于我们">
      <video src={mv} controls>
        <track kind="captions" />
      </video>
      这里是关于我们的介绍
    </Card>
    <Card className={styles.context} title="网络要求" />

    <Card className={styles.context} title="联系我们">
      <p>电话：12300000000</p>
      <p>邮箱：123@sjtu.edu.com</p>
    </Card>
  </Card>
);
export default Home;
