import React, { memo } from 'react';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'umi/locale';
import { ChartCard, Field } from '@/components/Charts';
import numeral from 'numeral';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
  style: { marginBottom: 24 },
};

const IntroduceRow = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="注册人数"
        loading={loading}
        total={numeral(visitData.accountT).format('0,0')}
        footer={<Field label="日注册人数" value={numeral(visitData.accountD).format('0,0')} />}
        contentHeight={46}
      />
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={<FormattedMessage id="app.analysis.visits" defaultMessage="Visits" />}
        total={numeral(visitData.visitT).format('0,0')}
        footer={
          <Field
            label={<FormattedMessage id="app.analysis.day-visits" defaultMessage="Daily Visits" />}
            value={numeral(visitData.visitD).format('0,0')}
          />
        }
        contentHeight={46}
      />
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title="实验人数"
        total={numeral(visitData.vrT).format('0,0')}
        footer={<Field label="日实验人数" value={numeral(visitData.vrD).format('0,0')} />}
        contentHeight={46}
      />
    </Col>
  </Row>
));

export default IntroduceRow;
