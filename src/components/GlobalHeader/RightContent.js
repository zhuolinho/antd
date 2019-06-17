import React, { PureComponent, Fragment } from 'react';
import { FormattedMessage } from 'umi/locale';
import { Button, Menu, Icon } from 'antd';
import router from 'umi/router';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import avatar from '@/assets/icon.png';

export default class GlobalHeaderRight extends PureComponent {
  render() {
    const { currentUser, onMenuClick, theme } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        {/* <Menu.Item key="userinfo">
          <Icon type="setting" />
          <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
        </Menu.Item> */}
        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    );
    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    const login = () => {
      router.push('/user/login');
    };
    const register = () => {
      router.push('/user/register');
    };
    return (
      <div className={className}>
        {currentUser.username ? (
          <HeaderDropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <img size="small" className={styles.avatar} src={avatar} alt="avatar" />
              <span className={styles.name}>{currentUser.username}</span>
            </span>
          </HeaderDropdown>
        ) : (
          <Fragment>
            <Button type="link" onClick={register}>
              注册
            </Button>
            <Button type="link" onClick={login}>
              登录
            </Button>
          </Fragment>
        )}
      </div>
    );
  }
}
