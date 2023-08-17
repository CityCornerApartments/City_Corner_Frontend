import type { Meta, StoryObj } from '@storybook/react';
import { FrontPageHeader } from './FrontPageHeader';

const meta: Meta<typeof FrontPageHeader> = {
  component: FrontPageHeader,
  title: 'FrontPageHeader',
};
export default meta;
type Story = StoryObj<typeof FrontPageHeader>;

export const Primary = {
  args: {},
};