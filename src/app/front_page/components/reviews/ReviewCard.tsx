import { Card, Avatar } from 'antd';
import Flag from 'react-world-flags';
import { Review } from './Review';

export interface ReviewCardProps {
  review: Review;
  updateHoverCounter?: (number) => void;
}

export const ReviewCard = ({ review, updateHoverCounter }: ReviewCardProps) => {
  const { name, country, reviewNumber, date, reviewText } = review;

  const roundedNumber = Math.round(reviewNumber * 10) / 10;
  const dateObj = typeof date === 'object' ? date : new Date(date);
  const isLongReviewText = review.reviewText.length > 600;

  return (
    <div
      className={'min-w-[25rem] max-w-[30rem] max-h-[170px] group hover:z-20'}
      onMouseEnter={() => updateHoverCounter(1)}
      onMouseLeave={() => updateHoverCounter(-1)}
    >
      <Card
        className={
          'transition group-hover:shadow-lg group-hover:-translate-y-1 group-hover:max-w-[40rem]' +
          (isLongReviewText ? ' group-hover:w-[40rem]' : '')
        }
      >
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
