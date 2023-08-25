import { useState } from 'react';
import ReviewPanelRow from './ReviewPanelRow';
import { Review } from './Review';

const reviews: { hungarian: Review[]; english: Review[]; german: Review[]; others: Review[] } = {
  hungarian: [
    {
      name: 'János',
      date: '2023.07.02.',
      reviewNumber: 10,
      country: 'HU',
      reviewText:
        'Ha erre járunk, ide még visszatérünk.' +
        'Igényesen kialakított, második emeleti tágas, tiszta, jó felszerelt apartman. A szállásadó kedves, mindenben segített. A parkolás tágas, zárt parkolóban lehetséges. A környék rendezett, csendes.',
    },
    {
      name: 'Mihály',
      date: '2023.05.01.',
      reviewNumber: 10,
      country: 'HU',
      reviewText:
        'Remek szálláshely.' +
        'Szép, tágas és csendes helyen lévő apartmanról van szó, családosoknak teljesen megfelelő. Főként, ha nem nagyon picik a gyerekek, mert a második emeletre kell felgyalogolni, de így sem leküzdhetetlen a távolság.\n' +
        'A tulajdonosnő igen aranyos, közlékeny, már napokkal korábban felhívott, érdeklődött az igényeink felől, az érkezés napján pedig ott várt mosolyogva az épület előtt a kulcsokkal és mindenféle szóbeli és írásbeli (reklámanyagok) tájékoztatóval. Közvetlen, rokonszenves, az a típus, akit a turista könnyen a szívébe zár.\n' +
        'Kitűnő, zárt parkoló állt a rendelkezésünkre, a kerítésen túl egy szép kis tóval, amely néhány szelíd nutriának is a lakhelye. A jövés-menésük megfigyelése külön mindennapos látványosság (benne van az árban). :)\n' +
        'Teljesen felszerelt, tágas apartmanról van szó, amelyben a mosó- és mosogató gépig minden megtalálható.\n' +
        'Kedves figyelmességként mindannyiunkat apró csokik vártak a szobában, nem is szólva a kávé-tea-cukor-só, illetve mosogatótabletta-készletről.\n' +
        '3 napig teljesen a magunk gazdái voltunk, senki nem zavart bennünket.\n' +
        'A tulajdonosnő extra "juttatásként" a pozsonyi és a bécsi kiránduláshoz is kitűnő tanácsokat adott, látnivalók és parkolási lehetőségek ügyében. Csak ajánlani tudom mindenkinek!\n' +
        'Ami a várost illeti, nagyon jó a termál fürdőjük (még ha enyhén zsúfolt is az odaszokott cseh és szlovák turisták miatt), és jól főznek az éttermekben is. Mi a Hársfa Éttermet próbáltuk ki. Nem olcsó (manapság mi az?), de finom a kaja és nagyok az adagok, kedvesek a pincérek.',
    },
    {
      name: 'Attila',
      date: '2023.04.25.',
      reviewNumber: 10,
      country: 'HU',
      reviewText:
        'Kitűnő.\n' +
        'A környék kitűnő, nagyon elégedett voltam a szállással. A lakás felszereltsége nem hagy maga után kívánni valót. Minden közel van, és a szállásadó nagyon segítőkész.',
    },
    {
      name: 'Rita',
      date: '2022.07.18.',
      reviewNumber: 9,
      country: 'HU',
      reviewText:
        'Igényes, csendes szállás a belváros szívében\n' +
        'Kiváló helyen (frekventált, mégis csendes), igényes belső tér és berendezés, remek felszereltség és barátságos fogadtatás várt minket.\n' +
        'A szállás parkolójából megközelíthető a Lajta és az egyik gyalogos hídja, ahonnan még vidrákat és kacsákat is volt szerencsénk látni. Rugalmasságban, segítőkészségben is példaértékű volt amit tapasztaltunk, szívesen ajánljuk őket, bármikor szívesen szállnánk meg itt újra.',
    },
    {
      name: 'Gabriella',
      date: '2022.03.01.',
      reviewNumber: 10,
      country: 'HU',
      reviewText:
        'Maximális elégedettség\n' +
        'Rendkívül ízléses,minden kényelmet kielégítő.A szállásadó közvetlen,nagyon kedves.',
    },
    {
      name: 'Edina',
      date: '2021.08.22.',
      reviewNumber: 10,
      country: 'HU',
      reviewText:
        'Szuper választás, ha újszerű, rendezett lakásra van igény.\n' +
        'Minden tekintetben kiváló választás.A lakás igényes, szép, tiszta, modern,Zárt parkoló.Jó az elhelyezkedése is.A tulajdonos nagyon kedves, segítőkész, informatív.Szuper a kommunikáció is.Nyugodt szívvel ajánlom mindenkinek, mert nem fognak csalódni.Örülünk, hogy ott járhattunk!Köszönünk mindent!',
    },
  ],
  english: [
    {
      name: 'Claudia',
      date: '2023.04.22.',
      reviewNumber: 10,
      country: 'GB',
      reviewText:
        'Amazing accomodation\n' +
        'One of the best accomodation that we stayed.\n' +
        'Spotless clean, the smell of the fresh cleaned bed linen and towels amazing, the host so professional, very communicative, very friendly.\n' +
        'Bathroom and kitchen very well equipped.\n' +
        "Honestly, we didn't want to leave, it really felt like home.\n" +
        'We will deffinetly be back to explore the area.\n' +
        'If I could I would give 20 stars !!!',
    },
    {
      name: 'Margaret',
      date: '2023.04.28.',
      reviewNumber: 9,
      country: 'CH',
      reviewText:
        'Great place to stay, I would definitely stay here again even with my family. Suzanne is an amazing host.\n' +
        'Very clean, comfortable, modern, proximity to shops & restaurants was just perfect! Everything was within a short walking distance.',
    },
    {
      name: 'Panos',
      date: '2023.04.25.',
      reviewNumber: 10,
      country: 'GR',
      reviewText:
        'The place to stay when in Mosonmagyarovar\n' +
        'The apartment was fabulous, spacious and greatly located. Our host was simply the best!',
    },
    {
      name: 'Jana',
      date: '2023.01.21.',
      reviewNumber: 10,
      country: 'CZ',
      reviewText:
        'Really nice flat with great position. Spa, restaurants, shops, running paths....everything is near to the flat. The owner, Zuzka is so kind. We were fully satisfied.',
    },
    {
      name: 'Georgiana',
      date: '2022.08.26.',
      reviewNumber: 10,
      country: 'RO',
      reviewText:
        'I liked that the apartment matches with the pictures show on the website. It was very nice decorated and organised so you can enjoy your staying there. We were welcomed by Suzana, a very nice lady that is taking care of this apartment. She helped us with good recomandations regarding a good place for shopping.\n' +
        'On the other hand the apartment is located very close to the highway and the border to Austria.\n' +
        'I highly recommend City Corner apartment!',
    },
    {
      name: 'Nina',
      date: '2022.07.25.',
      reviewNumber: 10,
      country: 'SK',
      reviewText:
        'Big, modern apartment furnished with everything you need in the perfect condition. Definitely 10 of 10.',
    },
    {
      name: 'Michael',
      date: '2022.04.19.',
      reviewNumber: 10,
      country: 'DE',
      reviewText:
        'Zsuzsanna, the host, is super friendly and will help you with anything you need! The appartment is tidy, clean and well equipped. The loaction is also great, as it has a bakery right next door, as well as a super-market. Can only recommend!',
    },
  ],
  german: [],
  others: [],
};

export const ReviewPanel = () => {
  const [hoverCounter, setHoverCounterState] = useState(0);
  const setHoverCounter = (counter: number) => setHoverCounterState((prev) => prev + counter);

  return (
    <div className={'flex flex-col gap-4 overflow-x-clip w-full'}>
      <ReviewPanelRow
        reviews={reviews.hungarian}
        pauseAnimation={hoverCounter !== 0}
        updateHoverCounter={setHoverCounter}
        animationOffset={200}
      />
      <ReviewPanelRow
        reviews={reviews.english}
        pauseAnimation={hoverCounter !== 0}
        updateHoverCounter={setHoverCounter}
        animationOffset={0}
      />
      <ReviewPanelRow
        reviews={reviews.german}
        pauseAnimation={hoverCounter !== 0}
        updateHoverCounter={setHoverCounter}
        animationOffset={100}
      />
      <ReviewPanelRow
        reviews={reviews.others}
        pauseAnimation={hoverCounter !== 0}
        updateHoverCounter={setHoverCounter}
        animationOffset={100}
      />
    </div>
  );
};

export default ReviewPanel;
