import type { Meta } from '@storybook/react';
import { ReviewPanelRow } from './ReviewPanelRow';
import { Review } from './Review';

const meta: Meta<typeof ReviewPanelRow> = {
  component: ReviewPanelRow,
  title: 'Review Panel Row',
  argTypes: {},
};
export default meta;

const reviews: Review[] = [
  {
    name: 'Erika',
    country: 'CZ',
    date: '2021.11.11',
    reviewNumber: 10,
    reviewText:
      'A lakás tiszta, jól felszerelt, könnyen megközelíthető, parkolóhely is tartozik hozzá\n' +
      'Jó volt. tiszta, kényelmes, jól felszerelt, nagyon kedves és segítőkész tulajdonos.',
  },
];

export const Primary = {
  args: {
    reviews: reviews,
    pauseAnimation: false,
  },
};
