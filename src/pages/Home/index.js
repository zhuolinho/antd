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
        <p>
          经过近30年来的学科建设，上海交通大学设计类学科着力于交融人文艺术与科学技术，旨在培养理论与实践相结合的精英人才，具有家国情怀、领袖才能、国际视野、求真精神。于人才培养、研究、社会服务、实践与国际化等领域均取得瞩目成就，在近年英国QS世界大学学科排名上，“建筑与人居环境学科”（Architecture
          and the Build Environment）在国内外高校中排名前列，“艺术与设计学科”（Art and
          Design）与2015、2016年连续进入全球50强。
        </p>
        <p>
          设计学院目前拥有100多位教职员工，1000余名学生。大部分教师拥有国际一流大学博士及工作访学阅历。在今后3到5年内，我们将大幅增强研究与教学力度，诚邀海内外英才加盟。
        </p>
        <p>
          上海交通大学设计学院目前面临千载难逢的历史机遇：“中国制造”转向“中国设计”的广阔前景，上海市“设计之都”与“科技创新中心”的地域优势，都让学院的未来充满希望。在上海交大世界级平台，以及一流生源、一流研究的基础上，设计学院正在打造国际化教育高地，汇聚全球顶级学者与设计大师，创建有鲜明交大特色、国际一流的设计学院。
        </p>
      </div>
    </Card>
  </Fragment>
);
export default Home;
