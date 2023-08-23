import type { Meta, StoryObj } from '@storybook/react';
import { Review } from './Review';

const meta: Meta<typeof Review> = {
  component: Review,
  title: 'Reviews',
};
export default meta;
type Story = StoryObj<typeof Review>;

export const Primary = {
  args: {},
};
