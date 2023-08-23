import type { Meta, StoryObj } from '@storybook/react';
import { Review } from './Review';

const meta: Meta<typeof Review> = {
  component: Review,
  title: 'Review',
  argTypes: {
    date: {
      control: 'date',
    },
  },
};
export default meta;

export const Primary = {
  args: {
    name: 'Janos',
    date: new Date(),
    reviewNumber: 9.5,
    reviewText:
      '\n' +
      'Ez az apartman egyszerűen lenyűgöző! Az igényes kialakítás és a második emeleten való elhelyezkedése egyaránt ' +
      'lenyűgöző. Azonnal érezni a kényelmet és a tágasságot, amint belépünk. Az egész hely rendkívül tiszta és gondosan' +
      ' karbantartott, látszik, hogy a tulajdonosok odafigyelnek a részletekre.\n' +
      '\n' +
      'A szállásadóval való tapasztalatom is kivételes volt. Nagyon kedves és segítőkész, mindenben a rendelkezésünkre' +
      ' állt, hogy kellemes legyen az ott tartózkodásunk. Bármilyen kérdésünk vagy kérésünk volt, azonnal megpróbált' +
      ' segíteni, és sok helyi tippel látott el minket, amik segítettek felfedezni a környéket.\n' +
      '\n' +
      'A parkolás is kényelmes és biztonságos volt. A zárt parkoló lehetővé tette, hogy ne kelljen aggódnunk az' +
      ' autónkért, és mindig volt elegendő hely.\n' +
      '\n' +
      'A környék is lenyűgöző volt. Rendezett és csendes, tökéletes hely a pihenésre és a feltöltődésre.' +
      ' A helyi éttermek és üzletek könnyen elérhetőek voltak, és mindent megtaláltunk, amire szükségünk volt a tartózkodásunk alatt.\n' +
      '\n' +
      'Minden összességében fantasztikus élmény volt, és szívesen visszatérnénk ide. Nagyon ajánlom ezt ' +
      'az apartmant mindenkinek, aki egy nyugodt és komfortos helyet keres a pihenéshez és a kikapcsolódáshoz.',
  },
};
