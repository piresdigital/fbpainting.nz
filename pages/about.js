import Header from '../components/header';
import Breadcrumb from '../components/breadcrumb';
import SectionTitle from '../components/typography/section-title';
import Partners from '../components/partners';
import Footer from '../components/footer';
import ToTop from '../components/toTop';
import Watermark from '../components/watermark';

export default function AboutUs() {
  return (
    <>
      <ToTop />
      <Header />
      <Breadcrumb title='About Us' />
      <Watermark color='yellow' />
      <div className='flex flex-col lg:flex-row gap-24 w-[80%] max-w-6xl mx-auto justify-between items-center mb-32'>
        <div className='lg:w-5/12'>
          <img
            className='rounded-xl shadow-xl'
            src='/images/team-example.jpg'
            alt='FB Painting Team'
          />
        </div>
        <div className='lg:w-7/12'>
          <h2 className='text-4xl mb-10'>Personal Statement</h2>
          <div className='text-lg'>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
              ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
              ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.{' '}
            </p>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
              ultrices gravida.{' '}
            </p>
            <div>
              <img
                className='block rounded-full w-16 mb-4'
                src='/images/profile-pic.jpg'
                alt='Fabricio Barboza'
              />
              <span className='text-lg text-gray-500'>Fabricio Barboza</span>
            </div>
          </div>
        </div>
      </div>

      <section className='mb-48'>
        <SectionTitle title='Meet Out Team' subtitle='Who We Are' />
        <div className='w-[80%] max-w-4xl mx-auto flex flex-col md:flex-row gap-10 justify-center items-center'>
          <div className='text-center group profile'>
            <div className='transition-all rounded-full p-1 mb-4 bg-gradient-to-bl from-brand-red-500 via-brand-yellow to-brand-green md:from-white md:to-white md:group-[.profile]:hover:from-brand-red-500 md:group-[.profile]:hover:via-brand-yellow md:group-[.profile]:hover:to-brand-green md:group-[.profile]:hover:scale-110'>
              <img
                className='inline-block rounded-full h-[180px]'
                src='/images/profile-pic.jpg'
                alt='Employee Name'
              />
            </div>

            <div className='text-2xl'>
              Empoloyee Name
              <span className='block text-lg text-brand-blue opacity-50'>Painter</span>
            </div>
          </div>

          <div className='text-center group profile'>
            <div className='transition-all rounded-full p-1 mb-4 bg-gradient-to-bl from-brand-red-500 via-brand-yellow to-brand-green md:from-white md:to-white md:group-[.profile]:hover:from-brand-red-500 md:group-[.profile]:hover:via-brand-yellow md:group-[.profile]:hover:to-brand-green md:group-[.profile]:hover:scale-110'>
              <img
                className='inline-block rounded-full h-[180px]'
                src='/images/profile-pic.jpg'
                alt='Employee Name'
              />
            </div>

            <div className='text-2xl'>
              Empoloyee Name
              <span className='block text-lg text-brand-blue opacity-50'>Painter</span>
            </div>
          </div>

          <div className='text-center group profile'>
            <div className='transition-all rounded-full p-1 mb-4 bg-gradient-to-bl from-brand-red-500 via-brand-yellow to-brand-green md:from-white md:to-white md:group-[.profile]:hover:from-brand-red-500 md:group-[.profile]:hover:via-brand-yellow md:group-[.profile]:hover:to-brand-green md:group-[.profile]:hover:scale-110'>
              <img
                className='inline-block rounded-full h-[180px]'
                src='/images/profile-pic.jpg'
                alt='Employee Name'
              />
            </div>

            <div className='text-2xl'>
              Empoloyee Name
              <span className='block text-lg text-brand-blue opacity-50'>Painter</span>
            </div>
          </div>

          <div className='text-center group profile'>
            <div className='transition-all rounded-full p-1 mb-4 bg-gradient-to-bl from-brand-red-500 via-brand-yellow to-brand-green md:from-white md:to-white md:group-[.profile]:hover:from-brand-red-500 md:group-[.profile]:hover:via-brand-yellow md:group-[.profile]:hover:to-brand-green md:group-[.profile]:hover:scale-110'>
              <img
                className='inline-block rounded-full h-[180px]'
                src='/images/profile-pic.jpg'
                alt='Employee Name'
              />
            </div>

            <div className='text-2xl'>
              Empoloyee Name
              <span className='block text-lg text-brand-blue opacity-50'>Painter</span>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <Footer />
    </>
  );
}
