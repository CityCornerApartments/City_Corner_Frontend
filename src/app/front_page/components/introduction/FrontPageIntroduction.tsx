export const FrontPageIntroduction = () => {
  return (
    <div className={'bg-gradient-to-r from-color-accent to-color-primary h-screen w-full relative'}>
      <div className={'flex w-full h-full items-end pb-16'}>
        <div className={'grid justify-between gap-x-4'}>
          <div className={'pl-3 md:pl-10'}>
            <div className={'text-5xl md:text-6xl font-bold flex flex-col gap-4'}>
              <div>Welcome</div>
              <div>To</div>
              <div className={'capitalize font-extrabold text-6xl md:text-8xl'}>City Corner Apartments</div>
            </div>
          </div>
          <div className={'w-[15rem] md:pr-20 hidden lg:block'}>
            <div className={'h-full flex content-end items-end'}>
              {/*<svg viewBox="0 0 200 350" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="7"
                  y="10"
                  width="190"
                  height="350"
                  style={{
                    fill: 'rgba(216, 216, 216, 0)',
                    stroke: 'rgb(0, 0, 0)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '7px',
                  }}
                />
                <rect
                  x="20"
                  y="23"
                  width="165"
                  height="320"
                  style={{
                    fill: 'rgba(216, 216, 216, 0)',
                    stroke: 'rgb(0, 0, 0)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '6px',
                  }}
                />
                <rect
                  x="7"
                  y="10"
                  width="190"
                  height="350"
                  transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -7.105427357601002e-15, -7.105427357601002e-15)"
                  style={{
                    fill: 'rgba(216, 216, 216, 0)',
                    stroke: 'rgb(0, 0, 0)',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '7px',
                  }}
                />
                <ellipse
                  cx="40"
                  cy="180"
                  rx="8.4"
                  ry="8.4"
                  transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -7.105427357601002e-15, -7.105427357601002e-15)"
                  style={{
                    fill: 'rgba(216, 216, 216, 0)',
                    stroke: 'rgb(0, 0, 0)',
                    strokeWidth: '5px',
                  }}
                />
              </svg>*/}
            </div>
          </div>
          <div className={'col-span-2 hidden lg:block'}>
            {/* <div className={'w-screen h-2 bg-color-black'}></div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
