import { FrontPageIntroduction } from './components/introduction/FrontPageIntroduction';
import ReviewPanel from './components/reviews/ReviewPanel';
import { BookingRating } from './components/reviews/BookingRating';

export const FrontPage = () => {
  return (
    <div>
      <FrontPageIntroduction />

      <div className={'py-12 shadow-top-bottom-large transition ease-in-out duration-300'}>
        <div className={'w-full flex justify-center pb-8'}>
          <div className={'text-2xl md:text-4xl flex items-center gap-2 md:gap-4'}>
            <span className={'capitalize'}>Be the next to give us a</span>
            <span className={'scale-90 md:scale-110 flex items-center h-full'}>
              <BookingRating rating={10} />
            </span>
          </div>
        </div>
        <ReviewPanel />
      </div>
    </div>
  );
};

export default FrontPage;
