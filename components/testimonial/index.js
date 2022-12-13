export default function Testimonial({ children, name, profile, pic, variant }) {
  return (
    <>
      <div
        className={`flex flex-col w-[85%] mx-auto rounded-lg overflow-hidden ${
          variant ? '-translate-y-[6rem]' : ''
        } border-[6px] border-white shadow-2xl bg-gray-50
        md:transition-transform md:flex-row md:max-w-[800px] md:hover:scale-105`}>
        <div
          className={
            'w-full h-[200px] overflow-hidden relative z-20 md:flex-1 md:h-[290px]'
          }>
          <img src={pic} alt='Client Name' />
        </div>
        <div className='pt-5 pb-5 px-5 relative md:flex-1'>
          <span className='block absolute -top-[40px] -left-[40px] w-[130px] h-[130px] bg-[url(/images/quotes.gif)] bg-cover bg-no-repeat z-0'></span>

          <div className='relative z-10'>
            <p className='text-xl pt-4 pb-10 indent-16'>{children}</p>
          </div>
          <div className='text-gray-500 text-right'>
            <span>{name}</span>
            <img
              className='inline w-12 h-12 rounded-full ml-4'
              src={profile}
              alt='client'
            />
          </div>
        </div>
      </div>
    </>
  );
}
