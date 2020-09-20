import React from 'react';
import { AvatarUI } from './';

export default {
  title: 'UI/AvatarUI',
  component: AvatarUI,
};

const Template = (args) => <AvatarUI {...args} />;

export const Test3 = Template.bind({});
Test3.args = {};
