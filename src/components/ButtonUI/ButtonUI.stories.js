import React from 'react';
import { ButtonUI } from '.';

export default {
  title: 'UI/ButtonUI',
  component: ButtonUI,
};

const Template = (args) => <ButtonUI {...args} />;

export const Test3 = Template.bind({});
Test3.args = {};
