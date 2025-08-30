import type { Meta, StoryObj } from '@storybook/react';
//import { within, userEvent, expect } from '@storybook/addon-vitest'
import { ButtonComponent } from './ButtonComponent'

const meta: Meta<typeof ButtonComponent> = {
    title: 'Components/Button',
    component: ButtonComponent,
    parameters: {layout: 'centered'},
    argTypes: {
        bgColor: { control: 'color' },
        textColor: { control: 'color' },
        fontSize: { control: 'number' },
        radius: { control: 'number' },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        fullWidth: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    args: {
        label: 'Button',
        bgColor: '#111827',
        textColor: '#ffffff',
        fontSize: 16,
        radius: 4,
        size: 'md',
        fullWidth: false,
        disabled: false,
    },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Playground: Story = {};

export const Primary: Story = {
    args: {
        label: 'Primary Button',
        bgColor: '#3b82f6',
        textColor: '#ffffff',
        fontSize: 16,
        radius: 4,
        size: 'md',
        fullWidth: false,
        disabled: false,
    }
};

export const Danger: Story = {
    args: {
        label: 'Danger Button',
        bgColor: '#ef4444',
        textColor: '#ffffff',
        fontSize: 16,
        radius: 4,
        size: 'md',
        fullWidth: false,
        disabled: false,
    }
};

// export const Clickable: Story = {
//     args: {
//         label: 'Press',
//     },
//     play: async ({canvasElement}) => {
//         const canvas = within(canvasElement);
//         const btn = await canvas.findByRole('button', {name: /press/i});
//         await userEvent.click(btn);
//         expect(btn).toHaveFocus();
//     }

// }