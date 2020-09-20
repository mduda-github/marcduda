import React from 'react';
import { BannerUI } from './';

export default {
  title: 'UI/BannerUI',
  component: BannerUI,
};

const Template = (args) => <BannerUI {...args} />;

export const Test3 = Template.bind({});
Test3.args = {};
