import React from 'react';
import mv from '@/assets/ddy.mp4';
// import homeImg from '@/assets/home.jpg';
import { Card, Button } from 'antd';
import { connect } from 'dva';
// import classNames from 'classnames';
import styles from './index.less';
//   const clsString = classNames(styles.globalFooter, className);

const VR = ({ primaryColor }) => (
  <Card>
    <Card className={styles.context} title="VR实验 > 多导仪实验">
      <Card style={{ textAlign: 'center', border: 'none' }}>
        <video controls style={{ width: '80%' }}>
          <source src={mv} />
          <track kind="captions" />
        </video>
      </Card>
      <Card
        title="多导仪实验"
        bordered={false}
        extra={
          <Button
            type="primary"
            style={{ backgroundColor: primaryColor }}
            onClick={() => {
              window.location = '/vr/vr1';
            }}
          >
            开始实验
          </Button>
        }
      >
        <p>发布时间：2019年2月21日</p>
        <p>负责人：韩挺</p>
      </Card>
      <Card title="实验反馈" bordered={false} />
    </Card>
  </Card>
);
export default connect(({ setting }) => ({ primaryColor: setting.primaryColor }))(VR);
