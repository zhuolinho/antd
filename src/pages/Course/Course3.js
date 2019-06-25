import React from 'react';
import mv from '@/assets/ddy.mp4';
// import homeImg from '@/assets/home.jpg';
import { Card } from 'antd';
import { connect } from 'dva';
// import classNames from 'classnames';
import styles from './index.less';
//   const clsString = classNames(styles.globalFooter, className);

const Course = () => (
  <Card>
    <Card className={styles.context} title="实验课程 > 多导仪实验">
      <Card style={{ textAlign: 'center', border: 'none' }}>
        <video controls style={{ width: '80%' }}>
          <source src={mv} />
          <track kind="captions" />
        </video>
      </Card>
      <Card title="多导仪实验" bordered={false}>
        <p>发布时间：2019年2月21日</p>
        <p>负责人：韩挺</p>
      </Card>
      <Card title="实验反馈" bordered={false} />
    </Card>
  </Card>
);
export default connect(({ setting }) => ({ primaryColor: setting.primaryColor }))(Course);
