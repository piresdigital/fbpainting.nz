export default function Testimonial() {
  return (
    <>
      <div className='flex flex-col w-[85%] mx-auto rounded-lg overflow-hidden -translate-y-[6rem] border-[6px] border-white shadow-2xl bg-white'>
        <div className='h-[200px] overflow-hidden bg-[url(/images/testimonial/testimonial-1.jpg)] bg-no-repeat bg-center bg-cover relative z-20'></div>
        <div className='pt-5 pb-5 px-5 relative'>
          <span className='block absolute -top-[40px] -left-[40px] w-[130px] h-[130px] bg-[url(/images/quotes.gif)] bg-cover bg-no-repeat z-0'></span>

          <div className='relative z-10'>
            <p className='text-xl pt-4 pb-10 indent-16'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
              ultrices gravida.
            </p>
          </div>
          <div className='text-gray-500 text-right'>
            <span>Dhavidy Pires</span>
            <img
              className='inline w-12 h-12 rounded-full ml-4'
              src='/images/profile-pic.jpg'
              alt='client'
            />
          </div>
        </div>
      </div>
    </>
  );
}
