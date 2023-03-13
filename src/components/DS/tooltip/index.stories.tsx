import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tooltip from './index';
import { TooltipProps } from './types'

export default {
  title: 'DS/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip
    content="Este desafio consta como verificado pois o objetivo dele está alinhado às metas da empresa a qual ele pertence"
    direction="bottom"
    trigger='click'
    width='361px'
    height='54px'
    style={{ top: '10px' }}
  >
    <button>Hover me</button>
  </Tooltip>
);

export const Default = Template.bind({});
