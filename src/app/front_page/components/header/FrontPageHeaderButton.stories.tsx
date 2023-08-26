import type { Meta, StoryObj } from '@storybook/react';
import { FrontPageHeaderButton } from './FrontPageHeaderButton';

const meta: Meta<typeof FrontPageHeaderButton> = {
  component: FrontPageHeaderButton,
  title: 'FrontPageHeaderButton',
};
export default meta;
type Story = StoryObj<typeof FrontPageHeaderButton>;

export const Primary = {
  args: {},
};