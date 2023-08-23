import LucsonyMain from './assets/lucsony_main.jpg';

export const FrontPageIntroduction = () => {
  return (
    <div
      className={'min-h-screen flex items-center justify-center'}
      style={{ backgroundImage: `url('${LucsonyMain}')` }}
    >
      <div className={'flex'}>
        <div>
          <div className={'text-6xl font-bold'}>City Corner Apartments</div>
          <br />
          <div>
            Welcome to the elcome to the elcome to the elcome to the elcome to
            the elcome to the elcome to the elcome to the elcome to the{' '}
          </div>
        </div>
        <div>
          <img
            className={'bg-fixed'}
            alt={'The living room of the apartment.'}
            src={LucsonyMain}
          />
        </div>
      </div>
    </div>
  );
};
