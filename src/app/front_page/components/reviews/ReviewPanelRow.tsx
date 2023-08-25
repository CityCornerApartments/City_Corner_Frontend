import Review, { ReviewCard } from './ReviewCard';
import { useEffect, useRef, useState } from 'react';

export interface ReviewPanelRowProps {
  reviews: Review[];
  pauseAnimation: boolean;
  updateHoverCounter: (number) => void;
  animationOffset: number;
}

export const ReviewPanelRow = ({
  reviews,
  pauseAnimation,
  updateHoverCounter,
  animationOffset,
}: ReviewPanelRowProps) => {
  const firstReviewPartRef = useRef();
  const [firstReviewPartWidth, setFirstReviewPartWidth] = useState(0);

  // get the width of the first review part
  useEffect(() => {
    if (!firstReviewPartRef.current) return;

    const div = firstReviewPartRef.current as HTMLDivElement;
    setFirstReviewPartWidth(div.offsetWidth);
  }, [reviews]);

  useEffect(() => {
    if (!firstReviewPartWidth) return;
  }, [firstReviewPartWidth]);

  return (
    <div
      className={'hover:z-10'}
      style={{
        transform: pauseAnimation ? 'translateX(-20px)' : 'translateX(0)',
        transition: 'transform 500ms ease-out',
      }}
    >
      <div style={{ transform: `translateX(${-animationOffset}px)` }}>
        <div
          style={{
            '--animationWidth': firstReviewPartWidth + 'px',
            '--animationSpeed': `${firstReviewPartWidth * 15}ms`,
            transition: 'animation-play-state 300ms',
            animationPlayState: pauseAnimation ? 'paused' : 'running',
          }}
          className={'flex gap-4 animate-reviews'}
        >
          <div className={'flex gap-4'} key={-1} ref={firstReviewPartRef}>
            {reviews.map((r) => (
              <ReviewCard review={r} updateHoverCounter={updateHoverCounter} />
            ))}
          </div>
          {/* Repeat the reviews 5 more times*/}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={'flex gap-4'}>
              {reviews.map((r) => (
                <ReviewCard review={r} updateHoverCounter={updateHoverCounter} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPanelRow;
