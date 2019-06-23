import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import moment from 'moment';

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
    rangePickerValue: getTimeDistance('week'),
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const { rangePickerValue } = this.state;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'chart/fetch',
      });
      dispatch({
        type: 'chart/fetchSalesData',
        payload: rangePickerValue,
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
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });

    dispatch({
      type: 'chart/fetchSalesData',
      payload: rangePickerValue,
    });
  };

  selectDate = type => {
    const { dispatch } = this.props;
    const rangePickerValue = getTimeDistance(type);
    this.setState({
      rangePickerValue,
    });

    dispatch({
      type: 'chart/fetchSalesData',
      payload: rangePickerValue,
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
    const { loading, chart } = this.props;
    const { visitData, salesData } = chart;

    const data = { visit: [], vr: [] };

    for (let i = moment(rangePickerValue[0]); i < rangePickerValue[1]; i.add(1, 'd')) {
      if (salesData.visit) {
        data.visit.push({
          x: i.format('MM-DD'),
          y: salesData.visit[i.toJSON()] ? salesData.visit[i.toJSON()].count : 0,
        });
      }
      if (salesData.vr) {
        data.vr.push({
          x: i.format('MM-DD'),
          y: salesData.vr[i.toJSON()] ? salesData.vr[i.toJSON()].count : 0,
        });
      }
    }

    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} visitData={visitData} />
        </Suspense>
        <Suspense fallback={null}>
          <SalesCard
            rangePickerValue={rangePickerValue}
            salesData={data}
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
