import React from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';
// import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';

const Experiment = ({ primaryColor }) => (
  <Card>
    <Card className={styles.context} title="VR实验">
      <Button
        type="primary"
        style={{ backgroundColor: primaryColor }}
        onClick={() => {
          window.location = '/vr/vr1';
        }}
      >
        开始实验
      </Button>
    </Card>
  </Card>
);

export default connect(({ setting }) => ({ primaryColor: setting.primaryColor }))(Experiment);
