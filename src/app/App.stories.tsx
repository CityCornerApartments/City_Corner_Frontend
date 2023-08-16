import type { Meta, StoryObj } from '@storybook/react';
import { App } from './App';

const meta: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default meta;
type Story = StoryObj<typeof App>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
