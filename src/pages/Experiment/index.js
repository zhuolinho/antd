import React from 'react';
import { Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const About = () => (
  <PageHeaderWrapper>
    <Button
      onClick={() => {
        window.location = '/vr1';
      }}
    >
      Click Me
    </Button>
  </PageHeaderWrapper>
);
export default About;
