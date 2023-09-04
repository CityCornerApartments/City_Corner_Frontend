import { Card, Avatar } from 'antd';
import Flag from 'react-world-flags';
import { Review } from './Review';
import { BookingRating } from './BookingRating';

export interface ReviewCardProps {
  review: Review;
  updateHoverCounter?: (number: number) => void;
}

export const ReviewCard = ({ review, updateHoverCounter }: ReviewCardProps) => {
  const { name, country, reviewNumber, date, reviewText } = review;

  const dateObj = typeof date === 'object' ? date : new Date(date);
  const isLongReviewText = review.reviewText.length > 600;

  return (
    <div
      className={'min-w-[25rem] max-w-[25rem] max-h-[170px] group hover:z-20'}
      onMouseEnter={() => updateHoverCounter !== undefined && updateHoverCounter(1)}
      onMouseLeave={() => updateHoverCounter !== undefined && updateHoverCounter(-1)}
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
          <BookingRating rating={reviewNumber} />
        </div>
        <div className={'h-3'}></div>
        <div className={'line-clamp-3 text-ellipsis group-hover:line-clamp-none break-words'}>{reviewText}</div>
      </Card>
    </div>
  );
};

export default Review;
