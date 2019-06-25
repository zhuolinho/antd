import React from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';
import request from '@/utils/request';
import router from 'umi/router';
// import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';
import { getAuthority } from '@/utils/authority';

const Experiment = ({ primaryColor }) => (
  <Card>
    <Card className={styles.context} title="VR实验">
      <Button
        type="primary"
        style={{ backgroundColor: primaryColor }}
        onClick={() => {
          if (getAuthority().indexOf('guest') < 0) {
            request('/api/vr').then(res => {
              window.location = res.path;
            });
          } else {
            router.push('/user/login');
          }
        }}
      >
        开始实验
      </Button>
    </Card>
  </Card>
);

export default connect(({ setting }) => ({ primaryColor: setting.primaryColor }))(Experiment);
