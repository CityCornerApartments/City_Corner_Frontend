import type { Meta, StoryObj } from '@storybook/react';
import FrontPage from './FrontPage';

const meta: Meta<typeof FrontPage> = {
  component: FrontPage,
  title: 'FrontPage',
};
export default meta;
type Story = StoryObj<typeof FrontPage>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
