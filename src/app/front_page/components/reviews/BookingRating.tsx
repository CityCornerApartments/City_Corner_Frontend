export interface BookingRatingProps {
  rating: number;
}

export const BookingRating = ({ rating }: BookingRatingProps) => {
  const roundedNumber = Math.round(rating * 10) / 10;

  return (
    <div className={'bg-color-booking text-color-white rounded-r-md rounded-tl-md h-10 w-10 inline-block'}>
      <div className={'h-10 w-10 text-lg flex justify-center items-center font-bold'}>{roundedNumber}</div>
    </div>
  );
};
