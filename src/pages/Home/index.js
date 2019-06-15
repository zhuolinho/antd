import React, { Fragment } from 'react';
import mv from '@/assets/MV 720P .mp4';
import { Card } from 'antd';
// import classNames from 'classnames';
import styles from './index.less';
//   const clsString = classNames(styles.globalFooter, className);

const Home = () => (
  <Fragment>
    <Card style={{ textAlign: 'center', border: 'none' }}>
      <video src={mv} controls>
        <track kind="captions" />
      </video>
    </Card>
    <Card style={{ border: 'none' }}>
      <div className={styles.context}>
        <p>
          上海交通大学最早培养人居环境方面的设计人才可追溯于20世纪初上海高等实业学堂。2017年12月校方整合全校设计类学科的优质资源，将建筑系、设计系及风景园林系重组成立了设计学院。上海交通大学以“创新设计”学科群涵盖建筑学、设计学与风景园林学三个一级学科，并已将其列入学校“双一流”重点建设的17个学科群之一。
        </p>
      </div>
    </Card>
  </Fragment>
);
export default Home;
