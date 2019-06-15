import React from 'react';
import mv from '@/assets/MV 720P .mp4';
import { Card } from 'antd';
// import classNames from 'classnames';
// import styles from './index.less';
//   const clsString = classNames(styles.globalFooter, className);

const Home = () => (
  <Card style={{ textAlign: 'center' }}>
    <video src={mv} controls>
      <track kind="captions" />
    </video>
  </Card>
);
export default Home;
