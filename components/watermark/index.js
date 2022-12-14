export default function Watermark({ color }) {
  return (
    <>
      <div className='fixed top-[60vh] md:top-[50vh] xl:top-[40vh] right-0 -z-50 opacity-10 overflow-hidden'>
        <img
          className='block w-[1000px] md:w-[700px] xl:w-[1000px] translate-x-24 md:translate-x-48'
          src={`/images/${color}-brush-logo.gif`}
          alt='brush logo watermark'
        />
      </div>
    </>
  );
}
