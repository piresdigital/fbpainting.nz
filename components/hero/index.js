export default function Hero({ background }) {
  return (
    <>
      <div
        className='-z-10 h-[370px] md:h-[50vh] relative bg-fixed bg-cover'
        style={{ backgroundImage: `url(${background})` }}></div>
    </>
  );
}
