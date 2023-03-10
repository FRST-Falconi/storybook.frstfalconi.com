import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tooltip from './index';
import { TooltipProps } from './types'

export default {
  title: 'DS/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip content="Quack!" direction="top" trigger='click'>
    <button>Hover me</button>
  </Tooltip>
);

export const Default = Template.bind({});
