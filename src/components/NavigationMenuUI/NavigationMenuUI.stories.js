import React from 'react';
import { NavigationMenuUI } from './';

export default {
  title: 'UI/NavigationMenuUI',
  component: NavigationMenuUI,
};

const Template = (args) => <NavigationMenuUI {...args} />;

export const Test3 = Template.bind({});
Test3.args = {};
