import React from 'react';
import { IntroductionUI } from './';

export default {
  title: 'UI/IntroductionUI',
  component: IntroductionUI,
};

const Template = (args) => <IntroductionUI {...args} />;

export const Test3 = Template.bind({});
Test3.args = {};
