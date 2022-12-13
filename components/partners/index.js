import SectionTitle from '../typography/section-title';

export default function Partners() {
  return (
    <>
      <div className='container mx-auto mb-44'>
        <SectionTitle title='' subtitle='Our Partners' />
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          <img
            className='w-[200px] opacity-60 transition-all hover:opacity-100'
            src='/images/partners/bcito-logo.jpg'
            alt='BCITO'
          />
          <img
            className='w-[200px] opacity-60 transition-all hover:opacity-100'
            src='/images/partners/gj-logo.jpg'
            alt='GJ Gardner Homes'
          />
          <img
            className='w-[200px] opacity-60 transition-all hover:opacity-100'
            src='/images/partners/dulux-logo.jpg'
            alt='Dulux'
          />
        </div>
      </div>
    </>
  );
}
