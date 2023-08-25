import type { Meta, StoryObj } from '@storybook/react';
import { FrontPageIntroduction } from './FrontPageIntroduction';

const meta: Meta<typeof FrontPageIntroduction> = {
  component: FrontPageIntroduction,
  title: 'FrontPageIntroduction',
};
export default meta;
type Story = StoryObj<typeof FrontPageIntroduction>;

export const Primary = {
  args: {},
};
