import { FrontPageHeaderButton } from './FrontPageHeaderButton';
import Logo from './assets/logo.jpg';

export const FrontPageHeader = () => {

  return (
    <header 
      className={"text-3xl shadow-sm bg-color-background" +
      "sticky flex items-center justify-between flex-wrap transition-all"}
    >
      <img src={Logo} alt={'City Apartments Logo'} className={'w-[200px]'}/>
      <div 
        className={'flex overflow-x-auto no-scrollbar'}
      >
        <FrontPageHeaderButton 
          label='Prices' 
          fun={
            () => {
              console.log("1");
            }
          }
        />

        <FrontPageHeaderButton 
          label='Tourist Attractions' 
          fun={
            () => {
              console.log("2");
            }
          }
        />

        <FrontPageHeaderButton 
          label='Contact us' 
          fun={
            () => {
              console.log("3");
            }
          }
        />
      </div>
    </header>
  );
}