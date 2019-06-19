import React, { Component, Suspense } from 'react';
import { connect } from 'dva';

import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { getTimeDistance } from '@/utils/utils';

import styles from './Analysis.less';
import PageLoading from '@/components/PageLoading';

const IntroduceRow = React.lazy(() => import('./IntroduceRow'));
const SalesCard = React.lazy(() => import('./SalesCard'));

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Analysis extends Component {
  state = {
    rangePickerValue: getTimeDistance('year'),
  };

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'chart/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleRangePickerChange = rangePickerValue => {
    this.setState({
      rangePickerValue,
    });
  };

  selectDate = type => {
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });
  };

  isActive = type => {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  render() {
    const { rangePickerValue } = this.state;
    const chart = JSON.parse(
      '{"visitData":[{"x":"2019-06-19","y":7},{"x":"2019-06-20","y":5},{"x":"2019-06-21","y":4},{"x":"2019-06-22","y":2},{"x":"2019-06-23","y":4},{"x":"2019-06-24","y":7},{"x":"2019-06-25","y":5},{"x":"2019-06-26","y":6},{"x":"2019-06-27","y":5},{"x":"2019-06-28","y":9},{"x":"2019-06-29","y":6},{"x":"2019-06-30","y":3},{"x":"2019-07-01","y":1},{"x":"2019-07-02","y":5},{"x":"2019-07-03","y":3},{"x":"2019-07-04","y":6},{"x":"2019-07-05","y":5}],"visitData2":[{"x":"2019-06-19","y":1},{"x":"2019-06-20","y":6},{"x":"2019-06-21","y":4},{"x":"2019-06-22","y":8},{"x":"2019-06-23","y":3},{"x":"2019-06-24","y":7},{"x":"2019-06-25","y":2}],"salesData":[{"x":"1月","y":243},{"x":"2月","y":899},{"x":"3月","y":494},{"x":"4月","y":450},{"x":"5月","y":267},{"x":"6月","y":683},{"x":"7月","y":892},{"x":"8月","y":1005},{"x":"9月","y":1034},{"x":"10月","y":895},{"x":"11月","y":388},{"x":"12月","y":743}],"searchData":[{"index":1,"keyword":"搜索关键词-0","count":863,"range":39,"status":1},{"index":2,"keyword":"搜索关键词-1","count":938,"range":12,"status":1},{"index":3,"keyword":"搜索关键词-2","count":645,"range":42,"status":1},{"index":4,"keyword":"搜索关键词-3","count":919,"range":80,"status":0},{"index":5,"keyword":"搜索关键词-4","count":621,"range":59,"status":0},{"index":6,"keyword":"搜索关键词-5","count":117,"range":92,"status":1},{"index":7,"keyword":"搜索关键词-6","count":918,"range":63,"status":0},{"index":8,"keyword":"搜索关键词-7","count":141,"range":38,"status":0},{"index":9,"keyword":"搜索关键词-8","count":414,"range":32,"status":1},{"index":10,"keyword":"搜索关键词-9","count":754,"range":5,"status":1},{"index":11,"keyword":"搜索关键词-10","count":934,"range":86,"status":0},{"index":12,"keyword":"搜索关键词-11","count":364,"range":46,"status":0},{"index":13,"keyword":"搜索关键词-12","count":448,"range":31,"status":0},{"index":14,"keyword":"搜索关键词-13","count":633,"range":20,"status":1},{"index":15,"keyword":"搜索关键词-14","count":44,"range":37,"status":1},{"index":16,"keyword":"搜索关键词-15","count":451,"range":33,"status":0},{"index":17,"keyword":"搜索关键词-16","count":317,"range":65,"status":1},{"index":18,"keyword":"搜索关键词-17","count":629,"range":87,"status":1},{"index":19,"keyword":"搜索关键词-18","count":975,"range":40,"status":0},{"index":20,"keyword":"搜索关键词-19","count":437,"range":62,"status":1},{"index":21,"keyword":"搜索关键词-20","count":18,"range":65,"status":1},{"index":22,"keyword":"搜索关键词-21","count":209,"range":83,"status":1},{"index":23,"keyword":"搜索关键词-22","count":455,"range":49,"status":1},{"index":24,"keyword":"搜索关键词-23","count":457,"range":44,"status":0},{"index":25,"keyword":"搜索关键词-24","count":409,"range":29,"status":1},{"index":26,"keyword":"搜索关键词-25","count":132,"range":60,"status":1},{"index":27,"keyword":"搜索关键词-26","count":404,"range":97,"status":1},{"index":28,"keyword":"搜索关键词-27","count":102,"range":54,"status":1},{"index":29,"keyword":"搜索关键词-28","count":39,"range":12,"status":0},{"index":30,"keyword":"搜索关键词-29","count":658,"range":19,"status":1},{"index":31,"keyword":"搜索关键词-30","count":168,"range":88,"status":0},{"index":32,"keyword":"搜索关键词-31","count":339,"range":34,"status":1},{"index":33,"keyword":"搜索关键词-32","count":654,"range":50,"status":1},{"index":34,"keyword":"搜索关键词-33","count":768,"range":69,"status":0},{"index":35,"keyword":"搜索关键词-34","count":728,"range":0,"status":1},{"index":36,"keyword":"搜索关键词-35","count":52,"range":75,"status":0},{"index":37,"keyword":"搜索关键词-36","count":67,"range":30,"status":0},{"index":38,"keyword":"搜索关键词-37","count":498,"range":10,"status":1},{"index":39,"keyword":"搜索关键词-38","count":787,"range":24,"status":1},{"index":40,"keyword":"搜索关键词-39","count":523,"range":66,"status":1},{"index":41,"keyword":"搜索关键词-40","count":838,"range":38,"status":1},{"index":42,"keyword":"搜索关键词-41","count":627,"range":92,"status":0},{"index":43,"keyword":"搜索关键词-42","count":511,"range":15,"status":1},{"index":44,"keyword":"搜索关键词-43","count":495,"range":27,"status":0},{"index":45,"keyword":"搜索关键词-44","count":443,"range":67,"status":1},{"index":46,"keyword":"搜索关键词-45","count":244,"range":25,"status":0},{"index":47,"keyword":"搜索关键词-46","count":425,"range":97,"status":0},{"index":48,"keyword":"搜索关键词-47","count":833,"range":25,"status":1},{"index":49,"keyword":"搜索关键词-48","count":858,"range":5,"status":0},{"index":50,"keyword":"搜索关键词-49","count":678,"range":59,"status":0}],"offlineData":[{"name":"Stores 0","cvr":0.6},{"name":"Stores 1","cvr":0.7},{"name":"Stores 2","cvr":0.5},{"name":"Stores 3","cvr":0.4},{"name":"Stores 4","cvr":0.4},{"name":"Stores 5","cvr":0.5},{"name":"Stores 6","cvr":0.8},{"name":"Stores 7","cvr":0.6},{"name":"Stores 8","cvr":0.6},{"name":"Stores 9","cvr":0.5}],"offlineChartData":[{"x":1560950181535,"y1":100,"y2":13},{"x":1560951981535,"y1":102,"y2":49},{"x":1560953781535,"y1":48,"y2":84},{"x":1560955581535,"y1":27,"y2":48},{"x":1560957381535,"y1":26,"y2":35},{"x":1560959181535,"y1":53,"y2":77},{"x":1560960981535,"y1":29,"y2":30},{"x":1560962781535,"y1":87,"y2":81},{"x":1560964581535,"y1":100,"y2":26},{"x":1560966381535,"y1":91,"y2":37},{"x":1560968181535,"y1":30,"y2":20},{"x":1560969981535,"y1":109,"y2":91},{"x":1560971781535,"y1":67,"y2":97},{"x":1560973581535,"y1":79,"y2":71},{"x":1560975381535,"y1":54,"y2":62},{"x":1560977181535,"y1":75,"y2":95},{"x":1560978981535,"y1":31,"y2":43},{"x":1560980781535,"y1":67,"y2":98},{"x":1560982581535,"y1":84,"y2":47},{"x":1560984381535,"y1":67,"y2":101}],"salesTypeData":[{"x":"家用电器","y":4544},{"x":"食用酒水","y":3321},{"x":"个护健康","y":3113},{"x":"服饰箱包","y":2341},{"x":"母婴产品","y":1231},{"x":"其他","y":1231}],"salesTypeDataOnline":[{"x":"家用电器","y":244},{"x":"食用酒水","y":321},{"x":"个护健康","y":311},{"x":"服饰箱包","y":41},{"x":"母婴产品","y":121},{"x":"其他","y":111}],"salesTypeDataOffline":[{"x":"家用电器","y":99},{"x":"食用酒水","y":188},{"x":"个护健康","y":344},{"x":"服饰箱包","y":255},{"x":"其他","y":65}],"radarData":[{"name":"个人","label":"引用","value":10},{"name":"个人","label":"口碑","value":8},{"name":"个人","label":"产量","value":4},{"name":"个人","label":"贡献","value":5},{"name":"个人","label":"热度","value":7},{"name":"团队","label":"引用","value":3},{"name":"团队","label":"口碑","value":9},{"name":"团队","label":"产量","value":6},{"name":"团队","label":"贡献","value":3},{"name":"团队","label":"热度","value":1},{"name":"部门","label":"引用","value":4},{"name":"部门","label":"口碑","value":1},{"name":"部门","label":"产量","value":6},{"name":"部门","label":"贡献","value":5},{"name":"部门","label":"热度","value":7}]}'
    );
    const { loading } = this.props;
    const { visitData, salesData } = chart;

    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} visitData={visitData} />
        </Suspense>
        <Suspense fallback={null}>
          <SalesCard
            rangePickerValue={rangePickerValue}
            salesData={salesData}
            isActive={this.isActive}
            handleRangePickerChange={this.handleRangePickerChange}
            loading={loading}
            selectDate={this.selectDate}
          />
        </Suspense>
      </GridContent>
    );
  }
}

export default Analysis;
