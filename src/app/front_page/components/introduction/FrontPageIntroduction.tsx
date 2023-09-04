export const FrontPageIntroduction = () => {
  return (
    <div className={'bg-gradient-to-r from-color-accent to-color-primary h-screen w-full'}>
      <div className={'h-full w-full flex flex-col justify-center md:justify-end pl-6 pb-6 md:pl-16 md:pb-20'}>
        <div className={'text-4xl md:text-6xl font-bold flex flex-col gap-4'}>
          <div>Welcome</div>
          <div>To</div>
          <div className={'capitalize font-extrabold text-5xl md:text-8xl'}>City Corner Apartments</div>
        </div>
      </div>
    </div>
  );
};
