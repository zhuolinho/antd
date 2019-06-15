import React, { Fragment } from 'react';
import { Layout } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import { connect } from 'dva';

const { Footer } = Layout;

const FooterView = ({ primaryColor }) => (
  <Footer style={{ padding: 0, backgroundColor: primaryColor }}>
    <GlobalFooter
      address={
        <Fragment>地址：上海市闵行区东川路800号 上海交通大学设计学院 电话：021-54749097</Fragment>
      }
      copyright={<Fragment>All rights reserved. 沪交ICP备20190091</Fragment>}
    />
  </Footer>
);
export default connect(({ setting }) => ({ primaryColor: setting.primaryColor }))(FooterView);
