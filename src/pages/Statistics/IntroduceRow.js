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

const IntroduceRow = memo(({ loading }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="注册人数"
        loading={loading}
        total={numeral(126560).format('0,0')}
        footer={<Field label="日注册人数" value={numeral(12423).format('0,0')} />}
        contentHeight={46}
      />
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title={<FormattedMessage id="app.analysis.visits" defaultMessage="Visits" />}
        total={numeral(88460).format('0,0')}
        footer={
          <Field
            label={<FormattedMessage id="app.analysis.day-visits" defaultMessage="Daily Visits" />}
            value={numeral(1234).format('0,0')}
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
        total={numeral(6560).format('0,0')}
        footer={<Field label="日实验人数" value="320" />}
        contentHeight={46}
      />
    </Col>
  </Row>
));

export default IntroduceRow;
