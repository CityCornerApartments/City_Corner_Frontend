import { Card, Avatar } from 'antd';
import Flag from 'react-world-flags';

export type Countries = 'HU' | 'SK' | 'CZ';

export interface ReviewProps {
  name: string;
  date: Date | string;
  reviewNumber: number;
  reviewText: string;
  country: Countries;
}

export const Review = ({ name, date, reviewNumber, reviewText, country }: ReviewProps) => {
  const roundedNumber = Math.round(reviewNumber * 10) / 10;
  const dateObj = typeof date === 'object' ? date : new Date(date);

  return (
    <div className={'min-w-[12rem] max-w-[30rem] group'}>
      <Card className={'transition group-hover:shadow-lg group-hover:-translate-y-1 '}>
        <div className={'flex justify-between items-center'}>
          <div className={'flex items-center gap-2'}>
            <Avatar shape={'circle'} size={'large'}>
              {name[0]}
            </Avatar>
            <div>
              <div className={'text-lg font-semibold'}>{name}</div>
              <div className={'flex gap-2'}>
                <span className={'text-xs opacity-80'}> {dateObj.toLocaleDateString()}</span>
                {/* https://github.com/smucode/react-world-flags */}
                <Flag code={country} height={20} width={20} />
              </div>
            </div>
          </div>
          <div className={'bg-color-booking text-color-white rounded-r-md rounded-tl-md'}>
            <div className={'h-10 w-10 text-lg flex justify-center items-center font-bold'}>{roundedNumber}</div>
          </div>
        </div>
        <div className={'h-3'}></div>
        <div className={'line-clamp-3 text-ellipsis group-hover:line-clamp-none break-words'}>{reviewText}</div>
      </Card>
    </div>
  );
};

export default Review;
