import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LightTooltip } from './index';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const meta: Meta<typeof LightTooltip> = {
    title: 'DS/LightTooltip',
    component: LightTooltip,
    args: {
        title: 'Este é um tooltip reutilizável do Design System',
        placement: 'top',
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Conteúdo do tooltip',
        },
        placement: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof LightTooltip>;

export const Default: Story = {
    render: (args) => (
        <LightTooltip title={'texto aqui'} {...args}>
            <span style={{ cursor: 'help' }}>
                <InfoOutlinedIcon fontSize="small" />
            </span>
        </LightTooltip>
    ),
};

export const WithTextTrigger: Story = {
    render: (args) => (
        <LightTooltip title={'Tooltip com gatilho em texto'} {...args}>
            <span style={{ cursor: 'help' }}>Passe o mouse</span>
        </LightTooltip>
    ),
};
