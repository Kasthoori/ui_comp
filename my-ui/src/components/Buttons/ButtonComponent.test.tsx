import { composeStories } from "@storybook/react-vite";
import * as stories from './ButtonComponent.stories';
import test from "node:test";
import { render, screen } from '@testing-library/react';
import { expect } from "storybook/internal/test";

const { Primary, Danger } = composeStories(stories);

test('render Primary button', () => {
    render(<Primary />);
    expect(screen.getByRole('button', {name: /primary/i})).toBeInTheDocument();
});

test('render Danger Story', () => {
    render(<Danger />);
    expect(screen.getByRole('button', {name: /danger/i})).toBeInTheDocument();
})