import React from 'react';
import { HeaderUI } from './';

export default {
  title: 'UI/HeaderUI',
  component: HeaderUI,
};

const Template = (args) => <HeaderUI {...args} />;

export const Test3 = Template.bind({});
Test3.args = {};
