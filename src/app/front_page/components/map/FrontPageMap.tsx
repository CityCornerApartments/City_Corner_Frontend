export const FrontPageMap = () => {
  return (
    <div className={'py-12'}>
      <div className={'flex items-center justify-center flex-col'}>
        <div className={'text-4xl'}>Find us on the map</div>
        <br />
        <iframe
          title={'Map of the Apartments'}
          width="700px"
          height="500px"
          allowFullScreen
          allow="geolocation"
          style={{ maxWidth: '95%' }}
          src="//umap.openstreetmap.fr/en/map/city-corner-apartments_958350?scaleControl=true&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false&captionMenus=false#16/47.8768/17.2769"
        ></iframe>
      </div>
    </div>
  );
};
