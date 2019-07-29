import React from 'react';
import { Card, Button, Carousel } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import banner1 from '@/assets/b1.jpg';
import banner2 from '@/assets/b2.jpg';
import banner3 from '@/assets/b3.jpg';
import banner4 from '@/assets/b4.jpg';
// import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';

const Experiment = ({ primaryColor }) => (
  <Card>
    <Card bordered={false}>
      <Carousel autoplay dots={false}>
        <img src={banner1} alt="banner" />
        <img src={banner2} alt="banner" />
        <img src={banner3} alt="banner" />
        <img src={banner4} alt="banner" />
      </Carousel>
    </Card>
    <Card className={styles.context} title="实验目的">
      <p>
        本虚拟仿真实验教学项目，借助虚拟现实（Virtual Reality —
        VR）技术和平台，借助数字环境下接近物理真实感的三维客体对象，进行用户调研和研究，从而获得更真实的用户调研结果和更可靠的研究结论。借助VR平台完成用户调研，是实时的、交互的；调研过程是更可控的、更高效的；用户的评价也是更用心、更准确的。
      </p>
      <p>
        依靠设计专业教学中用户调研的VR工具的开发与应用，突破样品购置、物理场地、气候条件、被试招募、调研周期等多方面的限制，从而使原本许多不可能进行的用户调研活动得以能够顺利完成，并得以以最小的成本取得最大的用户调研和研究效能。
      </p>
    </Card>
    <Card className={styles.context} title="实验内容">
      <p>（1）轿车外观造型的三维数字模型建模的实施过程。</p>
      <p>（2）VR环境下场景与展示配置的实施过程。</p>
      <p>（3）数字模型导入VR软件（Unity3D）场景的实施过程。</p>
      <p>（4）在VR软件中进行三维模型对象的材质、灯光和环境设置与处理的实施过程。</p>
      <p>（5）VR环境下界面设定与配置的实施过程。</p>
      <p>（6）VR环境下三维虚拟对象的展示与运动设置的实施过程。</p>
      <p>（7）VR场景中用户对虚拟对象的交互操作及数据记录的实施过程。</p>
    </Card>
    <Card className={styles.context} style={{ textAlign: 'center' }}>
      <Button
        type="primary"
        style={{ backgroundColor: primaryColor }}
        onClick={() => {
          // if (getAuthority().indexOf('guest') < 0) {
          //   request('/api/vr').then(res => {
          //     window.location = res.path;
          //   });
          // } else {
          //   router.push('/user/login');
          // }
          router.push('/experiment/list');
        }}
      >
        开始实验
      </Button>
    </Card>
  </Card>
);

export default connect(({ setting }) => ({ primaryColor: setting.primaryColor }))(Experiment);
