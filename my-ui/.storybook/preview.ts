import type { Preview, Decorator } from '@storybook/react-vite'
import React from 'react';
import '../src/index.css';

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//     a11y: {
//       test: 'todo'
//     }
//   },
//   decorators: [withTheme],
// };

export const globalTypes = {
  theme: {
    description: 'Global theme for component',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark'},
      ],
      showName: true,
    },
  },
};

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme;
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
  return Story();
};

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    controls: {expanded: true},
    a11y: {element: '#root', manual: false},
    layout: 'centered',
  },
};

export default preview;