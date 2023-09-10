import { FrontPageIntroduction } from './components/introduction/FrontPageIntroduction';
import { FrontPageMap } from './components/map/FrontPageMap';
import { FrontPageReviewPanel } from './components/reviews/FrontPageReviewPanel';

export const FrontPage = () => {
  return (
    <div>
      <FrontPageIntroduction />
      <FrontPageMap />
      <FrontPageReviewPanel />
    </div>
  );
};

export default FrontPage;
