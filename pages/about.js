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
      <section className='flex flex-col lg:flex-row gap-24 w-[80%] max-w-6xl mx-auto justify-between items-center mb-32'>
        <div className='lg:w-5/12'>
          <img className='rounded-xl shadow-xl' src='/images/slider/family.jpg' alt='FB Painting ' />
        </div>
        <div className='lg:w-7/12'>
          <h2 className='text-4xl mb-10'>Personal Statement</h2>
          <div className='text-xl'>
            <p className='leading-relaxed mb-8'>
              FB Painting is a locally family owned business that started in 2017 with the intention and concept of helping our
              clients achieve their expectations and expressing themselves in a colourful manner.
            </p>
          </div>
          <div className='text-lg'>
            <p className='mb-5'>
              I'm Fabrício Barboza (FAB). I've been in NZ since 2005 working in many different industries, building the kiwi
              dream.
            </p>
            <p className='mb-5'>
              Back on 2015 I decided to become a tradesman. Painting has been a thing that ran in the family, as my father worked
              for years in Sherwin Williams factory, I grew up seeing him displaying a very strong painting abilities through many
              of his spraying samples, which I still remember to this day.
            </p>
            <p className='mb-5'>
              Years ago, thought a great friend David Driscall I had the privilege of meeting Brent Pickworth (Owner of Precision
              Painter in Motueka ) and He made me realise how renovating a home with a well put together paint work, could change
              the whole idea of it all, giving a home the fresh look it's owners will identify with.
            </p>
            <p className='mb-5'>
              Focused on that, I started a BCITO apprenticeship in Queenstown, which granted me a (National Certificate as
              Qualified Painter and Decorator).
            </p>
            <div>
              <span className='text-lg text-gray-500'>Fabricio Barboza</span>
            </div>
          </div>
        </div>
      </section>

      <section className='w-[80%] max-w-4xl mx-auto mb-32'>
        <h4 className='text-xl mb-16'>
          Recognising the suporte of special individuals that help me with a hard start. <br />
          Thanking God for the love of you all.
        </h4>
        <div className='flex flex-col md:flex-row gap-24 justify-between items-start md:items-center'>
          <ul>
            <li>Family</li>
            <li>Church</li>
            <li>Shane & Kelly Campbell</li>
            <li>Avelar & Mara</li>
          </ul>
          <ul>
            <li>Marcos</li>
            <li>Rocker</li>
            <li>Ari De Paula</li>
            <li>John Kerrigan (Ara Institute)</li>
          </ul>
          <ul>
            <li>Jonathan Price (training advisor)</li>
            <li>Pickworth Family</li>
            <li>Driscoll Family</li>
            <li>Brain</li>
            <li>And all the employees I had to this day.</li>
          </ul>
        </div>
      </section>

      {/* <section className='mb-48'>
        <SectionTitle title='Meet Out Team' subtitle='Who We Are' />
        <div className='w-[80%] max-w-4xl mx-auto flex flex-col md:flex-row gap-10 justify-center items-center'>
          <div className='text-center group profile'>
            <div className='transition-all rounded-full p-1 mb-4 bg-gradient-to-bl from-brand-red-500 via-brand-yellow to-brand-green md:from-white md:to-white md:group-[.profile]:hover:from-brand-red-500 md:group-[.profile]:hover:via-brand-yellow md:group-[.profile]:hover:to-brand-green md:group-[.profile]:hover:scale-110'>
              <img className='inline-block rounded-full h-[180px]' src='/images/profile-pic.jpg' alt='Employee Name' />
            </div>

            <div className='text-2xl'>
              Empoloyee Name
              <span className='block text-lg text-brand-blue opacity-50'>Painter</span>
            </div>
          </div>

          <div className='text-center group profile'>
            <div className='transition-all rounded-full p-1 mb-4 bg-gradient-to-bl from-brand-red-500 via-brand-yellow to-brand-green md:from-white md:to-white md:group-[.profile]:hover:from-brand-red-500 md:group-[.profile]:hover:via-brand-yellow md:group-[.profile]:hover:to-brand-green md:group-[.profile]:hover:scale-110'>
              <img className='inline-block rounded-full h-[180px]' src='/images/profile-pic.jpg' alt='Employee Name' />
            </div>

            <div className='text-2xl'>
              Empoloyee Name
              <span className='block text-lg text-brand-blue opacity-50'>Painter</span>
            </div>
          </div>

          <div className='text-center group profile'>
            <div className='transition-all rounded-full p-1 mb-4 bg-gradient-to-bl from-brand-red-500 via-brand-yellow to-brand-green md:from-white md:to-white md:group-[.profile]:hover:from-brand-red-500 md:group-[.profile]:hover:via-brand-yellow md:group-[.profile]:hover:to-brand-green md:group-[.profile]:hover:scale-110'>
              <img className='inline-block rounded-full h-[180px]' src='/images/profile-pic.jpg' alt='Employee Name' />
            </div>

            <div className='text-2xl'>
              Empoloyee Name
              <span className='block text-lg text-brand-blue opacity-50'>Painter</span>
            </div>
          </div>

          <div className='text-center group profile'>
            <div className='transition-all rounded-full p-1 mb-4 bg-gradient-to-bl from-brand-red-500 via-brand-yellow to-brand-green md:from-white md:to-white md:group-[.profile]:hover:from-brand-red-500 md:group-[.profile]:hover:via-brand-yellow md:group-[.profile]:hover:to-brand-green md:group-[.profile]:hover:scale-110'>
              <img className='inline-block rounded-full h-[180px]' src='/images/profile-pic.jpg' alt='Employee Name' />
            </div>

            <div className='text-2xl'>
              Empoloyee Name
              <span className='block text-lg text-brand-blue opacity-50'>Painter</span>
            </div>
          </div>
        </div>
      </section> */}

      <Partners />

      <Footer />
    </>
  );
}
